
import { ReactNode } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  fullWidth?: boolean;
}

export default function AuthLayout({ children, title, subtitle, fullWidth = false }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      <div className={`${fullWidth ? 'w-full max-w-4xl' : 'w-full max-w-md'} space-y-6 rounded-xl border bg-card p-8 shadow-lg animate-fade-in`}>
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-primary">SkillSync</h1>
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
        
        {children}
      </div>
    </div>
  );
}
