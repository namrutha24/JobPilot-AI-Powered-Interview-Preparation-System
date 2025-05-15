import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Index: React.FC = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (user) {
        // Check if user had selected speech or text interview previously
        const preferredMode = localStorage.getItem('preferredInterviewMode'); // "text" or "speech"

        if (preferredMode === "speech") {
          navigate('/speech-interview/session');
        } else {
          navigate('/dashboard');
        }
      } else {
        navigate('/login');
      }
    }
  }, [user, loading, navigate]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center">
        <p className="text-xl text-muted-foreground">
          {loading ? "Loading..." : "Redirecting..."}
        </p>
      </div>
    </main>
  );
};

export default Index;
