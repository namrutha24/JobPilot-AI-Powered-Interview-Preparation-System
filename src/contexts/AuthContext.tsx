import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

interface UserProfile {
  first_name?: string;
  job_title?: string;
  bio?: string;
  preferences?: {
    preferredDomain?: string;
    preferredRole?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

type AuthContextType = {
  user: User | null;
  loading: boolean;
  session: Session | null;
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  signup: (email: string, name: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  updateUserProfile: (profile: UserProfile) => Promise<void>;
  updatePassword: (password: string) => Promise<boolean>;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  session: null,
  login: async () => ({ success: false }),
  signup: async () => false,
  logout: async () => { },
  updateUserProfile: async () => { },
  updatePassword: async () => false,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      setSession(session);

      setUser(session?.user ?? null);

      setLoading(false);
    };

    getSession();

    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setSession(session ?? null);
      setLoading(false);
    });
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; message?: string }> => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        console.error("Login error:", error.message);
        return {
          success: false,
          message: error.message === 'Invalid login credentials'
            ? 'Invalid email or password'
            : error.message
        };
      }
      return { success: true };
    } catch (error) {
      console.error("Login error:", error);
      return {
        success: false,
        message: 'An unexpected error occurred. Please try again.'
      };
    }
  };

  const signup = async (email: string, name: string, password: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: name,
          },
        },
      });

      if (error) {
        console.error("Signup error:", error.message);
        return false;
      }

      if (data.user) {
        // Update the profile immediately after signup
        await updateUserProfile({
          first_name: name,
        });
      }

      return true;
    } catch (error) {
      console.error("Signup error:", error);
      return false;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const updateUserProfile = async (profile: UserProfile): Promise<void> => {
    try {
      // First update the user metadata
      const { error: userError } = await supabase.auth.updateUser({
        data: {
          first_name: profile.first_name,
          job_title: profile.job_title,
          bio: profile.bio,
          preferences: profile.preferences
        }
      });

      if (userError) {
        console.error("Error updating user metadata:", userError);
        throw userError;
      }

      // Then try to update the profiles table if it exists
      const { error: profileError } = await supabase
        .from('profiles')
        .upsert({
          id: user?.id,
          email: user?.email || '',
          first_name: profile.first_name,
          preferences: profile.preferences,
          updated_at: new Date().toISOString()
        })
        .eq('id', user?.id);

      if (profileError && profileError.code !== '42P01') { // Ignore table does not exist error
        console.error("Error updating profile in profiles table:", profileError);
        // Don't throw here as the user metadata update was successful
      }

      // Optimistically update the local user object
      setUser(prevUser => {
        if (prevUser) {
          return {
            ...prevUser,
            user_metadata: {
              ...prevUser.user_metadata,
              first_name: profile.first_name,
              job_title: profile.job_title,
              bio: profile.bio,
              preferences: profile.preferences
            }
          };
        }
        return prevUser;
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error;
    }
  };

  const updatePassword = async (password: string): Promise<boolean> => {
    try {
      const { error } = await supabase.auth.updateUser({
        password: password
      });

      if (error) {
        console.error("Error updating password:", error.message);
        return false;
      }

      return true;
    } catch (error) {
      console.error("Error updating password:", error);
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        session,
        login,
        signup,
        logout,
        updateUserProfile,
        updatePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
