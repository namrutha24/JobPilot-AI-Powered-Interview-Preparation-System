import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { TrendingUp, TrendingDown, Milestone, Award, Calendar, Clock } from "lucide-react";

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const userName = user?.user_metadata?.first_name || "User";
  const [stats, setStats] = useState({
    totalInterviews: 0,
    averageScore: 0,
    recentAttempts: 0,
    upcomingInterviews: 0,
    improvement: { value: 0, positive: true }
  });
  const [performanceData, setPerformanceData] = useState<any[]>([]);
  const [recommendedTopics, setRecommendedTopics] = useState<string[]>([]);
  const [strongDomains, setStrongDomains] = useState<string[]>([]);
                 
  useEffect(() => {
    // Load interview history from localStorage
    const history = JSON.parse(localStorage.getItem("interviewHistory") || "[]");
    
    if (history.length === 0) {
      // If no history, use empty data
      setStats({
        totalInterviews: 0,
        averageScore: 0,
        recentAttempts: 0,
        upcomingInterviews: 0,
        improvement: { value: 0, positive: true }
      });
      setPerformanceData([]);
      setRecommendedTopics([]);
      setStrongDomains([]);
      return;
    }
    
    // Calculate stats from real data
    const totalInterviews = history.length;
    
    // Calculate average score
    const totalScore = history.reduce((sum: number, interview: any) => 
      sum + (interview.overallScore || 0), 0);
    const averageScore = parseFloat((totalScore / totalInterviews).toFixed(1));
    
    // Calculate recent attempts (last 7 days)
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const recentAttempts = history.filter((interview: any) => 
      new Date(interview.timestamp) > oneWeekAgo).length;
    
    // For upcoming interviews, just use a placeholder
    // In a real app, this would come from scheduled interviews in the database
    const upcomingInterviews = 0;
    
    // Calculate improvement
    let improvement = { value: 0, positive: true };
    if (history.length >= 2) {
      const firstScore = history[0].overallScore || 0;
      const lastScore = history[history.length - 1].overallScore || 0;
      
      if (firstScore > 0) {
        const percentChange = ((lastScore - firstScore) / firstScore) * 100;
        improvement = {
          value: parseFloat(Math.abs(percentChange).toFixed(1)),
          positive: percentChange >= 0
        };
      }
    }
    
    setStats({
      totalInterviews,
      averageScore,
      recentAttempts,
      upcomingInterviews,
      improvement
    });
    
    // Generate performance data for chart
    const chartData = history.slice(-7).map((interview: any) => {
      let dateLabel = "Unknown";
      if (interview.timestamp) {
        const d = new Date(interview.timestamp);
        if (!isNaN(d.getTime())) {
          dateLabel = d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
        }
      }
      return {
        date: dateLabel,
        score: interview.overallScore || 0
      };
    });
    
    setPerformanceData(chartData);
    
    // Analyze domain strengths
    const domainScores: Record<string, { total: number, count: number }> = {};
    history.forEach((interview: any) => {
      const domain = interview.domain;
      if (!domain) return;
      
      if (!domainScores[domain]) {
        domainScores[domain] = { total: 0, count: 0 };
      }
      
      domainScores[domain].total += (interview.overallScore || 0);
      domainScores[domain].count += 1;
    });
    
    // Get top domains
    const topDomains = Object.entries(domainScores)
      .map(([domain, data]) => ({
        domain,
        avgScore: data.total / data.count
      }))
      .filter(d => d.avgScore >= 7) // Only consider domains with good scores
      .sort((a, b) => b.avgScore - a.avgScore)
      .slice(0, 2)
      .map(d => d.domain);
    
    setStrongDomains(topDomains);
    
    // Generate recommended topics
    // Analyze areas that need improvement
    const weakScores = history.flatMap((interview: any) => {
      if (!interview.answers) return [];
      
      // Find low scoring answers
      return Object.entries(interview.answers)
        .filter(([_, answer]: [string, any]) => answer.score < 5)
        .map(([_, answer]: [string, any]) => answer.feedback);
    });
    
    // Extract potential topics from feedback
    const topics = new Set<string>();
    weakScores.forEach((feedback: string) => {
      if (!feedback) return;
      
      // Look for technical terms in feedback
      const technicalTerms = feedback.match(/\b[A-Z][a-z]+(?: [a-z]+)*\b/g) || [];
      technicalTerms.forEach(term => {
        if (term.length > 3 && !["Try", "Consider", "Your", "You", "The", "This"].includes(term)) {
          topics.add(term);
        }
      });
    });
    
    setRecommendedTopics(Array.from(topics).slice(0, 3));
  }, []);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, {userName}</h1>
        <p className="text-muted-foreground">
          Track your progress and prepare for your next interview
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover-scale">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Interviews</CardTitle>
            <Milestone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.totalInterviews}</div>
            <p className="text-xs text-muted-foreground">completed sessions</p>
          </CardContent>
        </Card>
        
        <Card className="hover-scale">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.averageScore}/10</div>
            <p className="text-xs text-muted-foreground">across all interviews</p>
          </CardContent>
        </Card>
        
        <Card className="hover-scale">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Attempts</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.recentAttempts}</div>
            <p className="text-xs text-muted-foreground">in the last 7 days</p>
          </CardContent>
        </Card>
        
        <Card className="hover-scale">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Improvement</CardTitle>
            {stats.improvement.positive ? (
              <TrendingUp className="h-4 w-4 text-green-500" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500" />
            )}
          </CardHeader>
          <CardContent>
            <div className={`text-3xl font-bold ${stats.improvement.positive ? 'text-green-500' : 'text-red-500'}`}>
              {stats.improvement.value > 0 ? `${stats.improvement.positive ? '+' : '-'}${stats.improvement.value}%` : 'N/A'}
            </div>
            <p className="text-xs text-muted-foreground">since first interview</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Performance Trends</CardTitle>
            <CardDescription>Your interview scores over time</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            {performanceData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 10]} />
                  <Tooltip />
                  <Bar dataKey="score" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center gap-3">
                <p className="text-muted-foreground">
                  No interview data available yet. Complete an interview to see your performance.
                </p>
                <Button onClick={() => navigate("/interview")}>Take Your First Interview</Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommended Actions</CardTitle>
            <CardDescription>Next steps to improve your skills</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {stats.totalInterviews === 0 ? (
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="rounded-full h-2 w-2 bg-primary mr-2"></div>
                  <h4 className="text-sm font-medium">Take Your First Interview</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Start with a basic interview to establish your baseline performance.
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="rounded-full h-2 w-2 bg-primary mr-2"></div>
                    <h4 className="text-sm font-medium">
                      {stats.averageScore < 5 ? "Practice Fundamentals" : 
                       stats.averageScore < 7 ? "Build Advanced Knowledge" : 
                       "Try Expert Difficulty"}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {stats.averageScore < 5 ? 
                      "Focus on strengthening core technical concepts." : 
                      stats.averageScore < 7 ? 
                      "Explore more complex scenarios and edge cases." : 
                      "Challenge yourself with the most difficult questions."}
                  </p>
                </div>
                
                {recommendedTopics.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="rounded-full h-2 w-2 bg-primary mr-2"></div>
                      <h4 className="text-sm font-medium">Study Specific Topics</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Based on your performance, focus on improving your knowledge of: {recommendedTopics.join(', ')}.
                    </p>
                  </div>
                )}
                
                {strongDomains.length > 0 ? (
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="rounded-full h-2 w-2 bg-primary mr-2"></div>
                      <h4 className="text-sm font-medium">Leverage Your Strengths</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      You're performing well in {strongDomains.join(' and ')}. Consider advanced interviews in these domains.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="rounded-full h-2 w-2 bg-primary mr-2"></div>
                      <h4 className="text-sm font-medium">Try Different Domains</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Expand your knowledge by attempting interviews in other domains to find your strengths.
                    </p>
                  </div>
                )}
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="rounded-full h-2 w-2 bg-primary mr-2"></div>
                    <h4 className="text-sm font-medium">Review Past Feedback</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Study the feedback from previous interviews to identify patterns and improvement areas.
                  </p>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center mt-6">
        <Button onClick={() => navigate("/interview")} size="lg">
          Start New Interview
        </Button>
      </div>
    </div>
  );
}
