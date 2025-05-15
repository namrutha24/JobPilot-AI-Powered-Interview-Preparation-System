
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Sidebar from "@/components/sidebar";
import { cn } from "@/lib/utils";

export default function AppLayout() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);
  
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-pulse text-2xl font-semibold">Loading...</div>
      </div>
    );
  }
  
  if (!user) return null;

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className={cn("flex-1 transition-all duration-300 md:ml-64")}>
        <main className="container max-w-7xl py-6 px-4 md:px-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
