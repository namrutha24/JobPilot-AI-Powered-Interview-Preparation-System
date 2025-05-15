
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

// Custom tooltip component for charts
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border rounded p-2 shadow-md">
        <p className="text-sm">{`Session: ${label}`}</p>
        <p className="text-sm text-primary">{`Score: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

// Function to get feedback based on average score
const getFeedbackForScore = (score: number) => {
  if (score >= 8) {
    return {
      overall: "Excellent",
      strengths: [
        "Strong technical knowledge",
        "Clear communication of complex concepts",
        "Structured problem-solving approach"
      ],
      improvements: [
        "Continue to deepen expertise in niche areas",
        "Practice explaining technical concepts to non-technical audiences"
      ]
    };
  } else if (score >= 6) {
    return {
      overall: "Good",
      strengths: [
        "Solid understanding of key concepts",
        "Good problem-solving skills",
        "Clear communication"
      ],
      improvements: [
        "Work on deepening technical knowledge",
        "Practice more complex scenarios",
        "Be more specific in technical explanations"
      ]
    };
  } else if (score >= 4) {
    return {
      overall: "Average",
      strengths: [
        "Basic understanding of concepts",
        "Some problem-solving abilities"
      ],
      improvements: [
        "Focus on strengthening core technical knowledge",
        "Practice structuring your answers more clearly",
        "Review fundamental concepts in your domain",
        "Work on providing specific examples"
      ]
    };
  } else {
    return {
      overall: "Needs Improvement",
      strengths: [
        "Willingness to learn and improve"
      ],
      improvements: [
        "Prioritize learning fundamental concepts",
        "Study technical terminology in your field",
        "Practice explaining basic concepts clearly",
        "Consider additional training or study resources",
        "Focus on one topic area at a time to build confidence"
      ]
    };
  }
};

// Function to generate recommendations based on performance
const getRecommendations = (interviewHistory: any[], averageScore: number) => {
  const weakestAreas = interviewHistory
    .flatMap(session => {
      return Object.values(session.answers || {})
        .map((answer: any) => ({
          score: answer.score || 0,
          feedback: answer.feedback || ""
        }));
    })
    .sort((a, b) => a.score - b.score)
    .slice(0, 3);

  const recommendations = [
    "Schedule regular practice interviews to build confidence",
    "Review technical documentation for concepts you struggled with"
  ];

  if (averageScore < 6) {
    recommendations.push("Consider taking online courses to strengthen technical knowledge");
    recommendations.push("Join technical communities to learn from peers");
  }

  return recommendations;
};

// Function to get domain name by ID
const getDomainName = (domainId: string) => {
  const domainMap: Record<string, string> = {
    "it": "Information Technology",
    "finance": "Finance",
    "healthcare": "Healthcare",
    "law": "Legal",
    "education": "Education",
    "hospitality": "Hospitality",
    "management": "Management"
  };
  return domainMap[domainId] || domainId;
};

// Function to get role name by ID
const getRoleName = (roleId: string) => {
  const roleMap: Record<string, string> = {
    "software-engineer": "Software Engineer",
    "data-scientist": "Data Scientist",
    "product-manager": "Product Manager",
    "ux-designer": "UX Designer",
    "financial-analyst": "Financial Analyst",
    "investment-banker": "Investment Banker",
    "accountant": "Accountant",
    "physician": "Physician",
    "nurse": "Nurse",
    "attorney": "Attorney",
    "paralegal": "Paralegal",
    "teacher": "Teacher",
    "hotel-manager": "Hotel Manager"
  };
  return roleMap[roleId] || roleId;
};

export default function Performance() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [interviewHistory, setInterviewHistory] = useState<any[]>([]);
  const [chartData, setChartData] = useState<any[]>([]);
  const [domainData, setDomainData] = useState<any[]>([]);
  const [overallScore, setOverallScore] = useState(0);
  const [totalInterviews, setTotalInterviews] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load interview history from localStorage
    const loadHistory = () => {
      const historyString = localStorage.getItem("interviewHistory");
      if (historyString) {
        try {
          const history = JSON.parse(historyString);
          setInterviewHistory(history);
          setTotalInterviews(history.length);

          // Calculate overall average score
          if (history.length > 0) {
            const avgScore = history.reduce((sum: number, session: any) => 
              sum + (session.overallScore || 0), 0) / history.length;
            setOverallScore(parseFloat(avgScore.toFixed(1)));
          }

          // Prepare chart data
          const chartDataArray = history.map((session: any, index: number) => ({
            name: `Session ${index + 1}`,
            score: session.overallScore || 0,
            domain: getDomainName(session.domain || ""),
            role: getRoleName(session.role || ""),
            difficulty: session.difficulty || "intermediate"
          }));
          setChartData(chartDataArray);

          // Prepare domain performance data
          const domainPerformance: Record<string, {count: number, total: number}> = {};
          history.forEach((session: any) => {
            const domain = session.domain || "unknown";
            if (!domainPerformance[domain]) {
              domainPerformance[domain] = {count: 0, total: 0};
            }
            domainPerformance[domain].count += 1;
            domainPerformance[domain].total += (session.overallScore || 0);
          });

          const domainDataArray = Object.entries(domainPerformance).map(([domain, data]) => ({
            name: getDomainName(domain),
            score: parseFloat((data.total / data.count).toFixed(1)),
            interviews: data.count
          }));
          setDomainData(domainDataArray);
        } catch (error) {
          console.error("Error parsing interview history:", error);
          toast.error("Failed to load performance data");
        }
      }
      setIsLoading(false);
    };

    loadHistory();
  }, []);

  // Get feedback based on average score
  const feedback = getFeedbackForScore(overallScore);
  const recommendations = getRecommendations(interviewHistory, overallScore);

  if (isLoading) {
    return <div className="flex justify-center items-center h-64">Loading performance data...</div>;
  }

  if (interviewHistory.length === 0) {
    return (
      <div className="space-y-6 animate-fade-in">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Your Performance</h1>
          <p className="text-muted-foreground">
            Track your progress and areas for improvement
          </p>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>No Interview Data Yet</CardTitle>
            <CardDescription>Complete your first interview to see performance analytics</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <p className="text-center mb-6 text-muted-foreground">
              You haven't completed any mock interviews yet. Start your first interview to begin tracking your performance.
            </p>
            <Button onClick={() => navigate("/interview")}>Start Your First Interview</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Your Performance</h1>
        <p className="text-muted-foreground">
          Track your progress and areas for improvement
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Overall Score</CardTitle>
            <CardDescription>Your average performance across all interviews</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{overallScore}/10</div>
            <p className="mt-2 text-muted-foreground">{feedback.overall}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Interviews Completed</CardTitle>
            <CardDescription>Total number of mock interviews</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{totalInterviews}</div>
            <p className="mt-2 text-muted-foreground">
              {totalInterviews < 5 ? "Just getting started" : 
               totalInterviews < 10 ? "Building consistency" : 
               "Regular practice"}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Most Recent</CardTitle>
            <CardDescription>Your latest interview performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">
              {interviewHistory.length > 0 ? 
                `${interviewHistory[interviewHistory.length - 1].overallScore || 0}/10` : 
                "N/A"}
            </div>
            <p className="mt-2 text-muted-foreground">
              {interviewHistory.length > 0 
                ? `${getDomainName(interviewHistory[interviewHistory.length - 1].domain || "")} - ${getRoleName(interviewHistory[interviewHistory.length - 1].role || "")}`
                : "No interviews yet"}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="col-span-2 md:col-span-1">
          <CardHeader>
            <CardTitle>Score Progress</CardTitle>
            <CardDescription>Your performance over time</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 10]} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#8884d8" 
                  activeDot={{ r: 8 }}
                  name="Interview Score"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="col-span-2 md:col-span-1">
          <CardHeader>
            <CardTitle>Domain Performance</CardTitle>
            <CardDescription>Your scores across different domains</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={domainData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 10]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="score" fill="#8884d8" name="Average Score" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Performance Analysis</CardTitle>
          <CardDescription>Detailed breakdown of your strengths and areas for improvement</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Your Strengths</h3>
            <ul className="list-disc pl-5 space-y-1">
              {feedback.strengths.map((strength, idx) => (
                <li key={idx} className="text-sm">{strength}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Areas for Improvement</h3>
            <ul className="list-disc pl-5 space-y-1">
              {feedback.improvements.map((improvement, idx) => (
                <li key={idx} className="text-sm">{improvement}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Recommendations</h3>
            <ul className="list-disc pl-5 space-y-1">
              {recommendations.map((recommendation, idx) => (
                <li key={idx} className="text-sm">{recommendation}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-end">
        <Button 
          onClick={() => navigate("/interview")} 
          className="mt-4"
        >
          Start New Interview
        </Button>
      </div>
    </div>
  );
}
