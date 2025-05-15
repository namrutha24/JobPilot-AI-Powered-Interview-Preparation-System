import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  LayoutDashboard,
  Play,
  ChartBarIcon,
  User,
  Settings,
  LogOut,
  ArrowLeft,
  Menu,
  X,
  TrendingUp
} from "lucide-react";
import { toast } from "sonner";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { logout, user } = useAuth();
  const location = useLocation();

  // Close mobile sidebar when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    toast.success("You have been logged out successfully");
  };

  const NavItem = ({
    to,
    icon: Icon,
    label,
    onClick
  }: {
    to: string;
    icon: React.ElementType;
    label: string;
    onClick?: () => void
  }) => {
    const isActive = location.pathname === to;

    return (
      <Link
        to={to}
        onClick={onClick}
        className={cn(
          "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-all",
          isActive
            ? "bg-sidebar-accent text-sidebar-accent-foreground"
            : "hover:bg-sidebar-accent/50 text-sidebar-foreground"
        )}
      >
        <Icon className="h-5 w-5" />
        {!collapsed && <span>{label}</span>}
      </Link>
    );
  };

  const sidebarContent = (
    <>
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          {!collapsed && <span className="text-xl font-bold text-primary">JobPilot</span>}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="hidden md:flex"
          >
            {collapsed ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(false)}
            className="md:hidden"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="space-y-1 px-3">
        <NavItem to="/dashboard" icon={LayoutDashboard} label="Dashboard" />
        <NavItem to="/interview" icon={Play} label="Start Interview" />
        <NavItem to="/performance" icon={ChartBarIcon} label="Performance" />
        <NavItem to="/recent-trends" icon={TrendingUp} label="Recent Trends" />
        <NavItem to="/profile" icon={User} label="Profile" />
        <NavItem to="/settings" icon={Settings} label="Settings" />
        <div
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-all cursor-pointer hover:bg-sidebar-accent/50 text-sidebar-foreground"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5" />
          {!collapsed && <span>Logout</span>}
        </div>
        <div
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-all cursor-pointer hover:bg-sidebar-accent/50 text-sidebar-foreground"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="h-5 w-5" />
          {!collapsed && <span>Go Back</span>}
        </div>
      </div>
      <div className="mt-auto p-4">
        <ThemeToggle />
      </div>
    </>
  );

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-40 md:hidden"
        onClick={() => setMobileOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Mobile sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-sidebar border-r border-sidebar-border transform transition-transform duration-200 ease-in-out md:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">{sidebarContent}</div>
      </div>

      {/* Desktop sidebar */}
      <div
        className={cn(
          "hidden md:flex fixed inset-y-0 left-0 z-50 flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300",
          collapsed ? "w-16" : "w-64"
        )}
      >
        <div className="flex h-full flex-col">{sidebarContent}</div>
      </div>

      {/* Backdrop for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
