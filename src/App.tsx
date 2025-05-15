import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/providers/theme-provider";
import { AuthProvider } from "@/contexts/AuthContext";

// Layouts
import AppLayout from "@/components/app-layout";

// Authentication pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

// App pages
import Dashboard from "./pages/Dashboard";
import Interview from "./pages/Interview";
import InterviewSession from "./pages/InterviewSession";
import InterviewFeedback from "./pages/InterviewFeedback";
import Performance from "./pages/Performance";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import SpeechInterviewSession from "./pages/SpeechInterviewSession"; // 👈 Correct
import { getQuestionsForInterview } from "@/utils/questionUtils";
import Feedback from "./pages/Feedback"; // adjust path if needed
import RecentTrends from "./pages/RecentTrends";


const queryClient = new QueryClient();
const qs = getQuestionsForInterview("it", "software-engineer", "beginner");

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Auth routes */}
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              
              {/* Protected routes */}
              <Route element={<AppLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/interview" element={<Interview />} />
                <Route path="/interview/session" element={<InterviewSession />} />
                <Route path="/speech-interview" element={<SpeechInterviewSession />} /> {/* 👈 Fix */}
                <Route path="/interview/feedback" element={<InterviewFeedback />} />
                <Route path="/performance" element={<Performance />} />
                <Route path="/recent-trends" element={<RecentTrends />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/feedback" element={<Feedback />} />
              </Route>

              {/* Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
