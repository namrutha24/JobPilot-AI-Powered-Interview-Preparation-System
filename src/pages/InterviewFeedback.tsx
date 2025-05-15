import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Check, AlertTriangle, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

// Function to get feedback based on score
const getFeedbackByScore = (score: number) => {
  if (score >= 8) return "Excellent";
  if (score >= 6) return "Good";
  if (score >= 4) return "Average";
  if (score >= 2) return "Needs Improvement";
  return "Poor";
};
     
// Function to get color based on score
const getColorByScore = (score: number) => {
  if (score >= 8) return "bg-green-500";
  if (score >= 6) return "bg-blue-500";
  if (score >= 4) return "bg-yellow-500";
  if (score >= 2) return "bg-orange-500";
  return "bg-red-500";
};

export default function InterviewFeedback() {
  const location = useLocation();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [questions, setQuestions] = useState<any[]>([]);
  const [overallScore, setOverallScore] = useState(0);
  
  useEffect(() => {
    if (location.state) {
      const { answers: stateAnswers, questions: stateQuestions, overallScore: stateOverallScore } = location.state;
      
      if (stateAnswers && typeof stateAnswers === 'object') {
        setAnswers(stateAnswers);
      }
      
      if (stateQuestions && Array.isArray(stateQuestions)) {
        setQuestions(stateQuestions);
      }
      
      if (typeof stateOverallScore === 'number') {
        setOverallScore(stateOverallScore);
      }
    } else {
      // Fallback if accessed directly without state
      const historyString = localStorage.getItem("interviewHistory");
      if (historyString) {
        const history = JSON.parse(historyString);
        if (history.length > 0) {
          const latestSession = history[history.length - 1];
          setAnswers(latestSession.answers || {});
          setOverallScore(latestSession.overallScore || 0);
        }
      }
    }
  }, [location]);

  // Get question by id
  const getQuestionById = (questionId: string | number) => {
    // Convert questionId to number if it's a string
    const id = typeof questionId === 'string' ? parseInt(questionId, 10) : questionId;
    return questions.find(q => q.id === id) || { 
      question: "Question not found",
      keywords: []
    };
  };

  const handleFinish = () => {
    navigate("/dashboard");
    toast.success("Interview session completed and saved!");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-4">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => navigate("/interview")}
          className="h-9 w-9"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Interview Feedback</h1>
          <p className="text-muted-foreground">
            Review your performance and areas for improvement
          </p>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-0">
          <CardTitle>Overall Performance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-2 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Score: {overallScore}/10</span>
              <span className="text-sm font-medium">{getFeedbackByScore(overallScore)}</span>
            </div>
            <Progress value={overallScore * 10} className="h-2" />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-muted rounded-lg p-4">
              <h3 className="font-semibold mb-2">Technical Knowledge</h3>
              <p className="text-sm text-muted-foreground">
                {overallScore >= 7 
                  ? "Strong understanding of key technical concepts"
                  : overallScore >= 4
                  ? "Basic understanding of technical concepts with some gaps"
                  : "Significant gaps in technical knowledge"}
              </p>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <h3 className="font-semibold mb-2">Communication Skills</h3>
              <p className="text-sm text-muted-foreground">
                {overallScore >= 7
                  ? "Clear and precise communication of technical ideas"
                  : overallScore >= 4
                  ? "Adequate communication with room for improvement"
                  : "Communication lacks clarity and precision"}
              </p>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <h3 className="font-semibold mb-2">Problem-Solving</h3>
              <p className="text-sm text-muted-foreground">
                {overallScore >= 7
                  ? "Effective approach to problem-solving with structured thinking"
                  : overallScore >= 4
                  ? "Basic problem-solving skills that need refinement"
                  : "Struggles to approach problems systematically"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold tracking-tight mt-8">Question Analysis</h2>

      {Object.entries(answers).map(([questionId, answerData]: [string, any]) => {
        const question = getQuestionById(questionId);
        return (
          <Card key={questionId} className="mb-6">
            <CardHeader className={`${getColorByScore(answerData.score)} text-white rounded-t-lg`}>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-medium">{question.question}</CardTitle>
                <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                  {answerData.score}/10
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Your Answer:</h4>
                <div className="bg-muted p-3 rounded-md text-sm">
                  {answerData.answer}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Feedback:</h4>
                <div className="flex items-start gap-2">
                  {answerData.score >= 6 ? (
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{answerData.feedback}</p>
                </div>
              </div>
              {question.keywords && question.keywords.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium mb-2">Key Concepts:</h4>
                  <div className="flex flex-wrap gap-2">
                    {question.keywords.map((keyword: string, idx: number) => (
                      <Badge key={idx} variant="secondary">{keyword}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="bg-muted/50 pt-2 pb-2">
              <div className="w-full">
                <h4 className="text-sm font-medium mb-2">Areas for Improvement:</h4>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  {answerData.score < 10 && (
                    <>
                      {answerData.score < 7 && (
                        <li>Cover more key technical concepts in your answer</li>
                      )}
                      {answerData.score < 5 && (
                        <li>Be more specific and provide concrete examples</li>
                      )}
                      {answerData.score < 3 && (
                        <li>Review the fundamental principles of this topic</li>
                      )}
                    </>
                  )}
                  {answerData.score >= 7 && (
                    <li>Great job! Keep refining your technical vocabulary</li>
                  )}
                </ul>
              </div>
            </CardFooter>
          </Card>
        );
      })}

      <div className="flex justify-end">
        <Button onClick={handleFinish} size="lg">
          Return to Dashboard
        </Button>
      </div>
    </div>
  );
}
