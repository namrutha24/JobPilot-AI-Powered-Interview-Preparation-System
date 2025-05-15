import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";

// Moved to a separate file for better organization
import { getDomainQuestions } from "@/utils/questionUtils";
import { saveInterviewHistory } from "@/utils/interviewHistoryUtils";

export default function InterviewSession() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [timerActive, setTimerActive] = useState(false);
  const [questions, setQuestions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  // Get interview parameters from localStorage
  useEffect(() => {
    const storedParams = localStorage.getItem("interviewParams");
    if (!storedParams) {
      setError("No interview parameters found. Please start a new interview.");
      setIsLoading(false);
      return;
    }

    try {
      const params = JSON.parse(storedParams);
      if (!params.domain || !params.role || !params.difficulty) {
        throw new Error("Invalid interview parameters");
      }
      fetchQuestions(params.domain, params.role, params.difficulty);
    } catch (error) {
      console.error("Error parsing interview parameters:", error);
      setError("Invalid interview parameters. Please start a new interview.");
      setIsLoading(false);
    }
  }, []);

  const fetchQuestions = async (domain: string, role: string, difficulty: string) => {
    setIsLoading(true);
    setError(null);
    try {
      // Get domain-specific questions
      const domainQuestions = getDomainQuestions(domain, role, difficulty);

      if (!domainQuestions || domainQuestions.length === 0) {
        throw new Error("No questions found for the selected criteria");
      }

      setQuestions(domainQuestions);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching questions:", error);
      setError("Failed to load interview questions. Please try again.");
      setIsLoading(false);
    }
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="text-lg">Loading your interview questions...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <p className="text-lg text-red-500">{error}</p>
          <Button onClick={() => navigate("/interview")}>
            Start New Interview
          </Button>
        </div>
      </div>
    );
  }

  // Show no questions state
  if (!questions || questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <p className="text-lg">No questions available for the selected criteria.</p>
          <Button onClick={() => navigate("/interview")}>
            Start New Interview
          </Button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === (questions.length - 1);

  const handleStartTimer = () => {
    setTimeLeft(120); // 2 minutes in seconds
    setTimerActive(true);

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === null || prevTime <= 1) {
          clearInterval(timer);
          setTimerActive(false);
          toast.info("Time's up! Please submit your answer.");
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const validateAnswer = (question: any, userAnswer: string): { score: number, feedback: string } => {
    if (!userAnswer.trim()) {
      return { score: 0, feedback: "No answer provided." };
    }

    // Check if answer is just nonsense (e.g., "jjjjjj")
    if (/^(.)\1+$/.test(userAnswer.trim()) || userAnswer.trim().length < 10) {
      return { score: 0, feedback: "Answer appears to be invalid or too short." };
    }

    // Check if answer contains any keywords from the reference answer
    const keywords = question.keywords || [];
    const keywordMatches = keywords.filter(keyword =>
      userAnswer.toLowerCase().includes(keyword.toLowerCase())
    ).length;

    // Calculate keyword match percentage
    const keywordMatchPercentage = keywords.length > 0 ? (keywordMatches / keywords.length) : 0;

    // More sophisticated scoring based on keyword matches, length, and content quality
    const lengthScore = Math.min(3, Math.max(1, Math.floor(userAnswer.length / 100)));

    // Higher weight to keyword matches (0-7 points)
    const keywordScore = Math.min(7, Math.floor(keywordMatchPercentage * 10));

    // Calculate total score - max 10
    const totalScore = Math.min(10, lengthScore + keywordScore);

    // Generate detailed feedback based on score
    let feedback = "";
    if (totalScore < 3) {
      feedback = `Your answer lacks essential technical concepts. Key terms missing: ${keywords.slice(0, 3).join(', ')}. Try to research these concepts more thoroughly.`;
    } else if (totalScore < 6) {
      feedback = `You've covered some basics but missed important technical details. Consider expanding your knowledge about ${keywords.slice(0, 2).join(' and ')}.`;
    } else if (totalScore < 8) {
      feedback = "Good technical answer with relevant points, but could be more comprehensive and precise with technical terminology.";
    } else {
      feedback = "Excellent technical response that demonstrates strong subject knowledge and covers key concepts thoroughly.";
    }

    return { score: totalScore, feedback };
  };

  const handleNext = async () => {
    if (!currentQuestion) return;

    if (!answer.trim()) {
        toast.error("Please provide an answer before continuing");
        return;
    }

    // Validate the current answer
    const validation = validateAnswer(currentQuestion, answer);

    // Store the validation result for this question
    const updatedValidations = {
        ...answers,
        [currentQuestion.id]: {
            answer,
            score: validation.score,
            feedback: validation.feedback
        }
    };

    // Update answers state
    setAnswers(updatedValidations);

    // Clear answer field for next question
    setAnswer("");

    // Reset timer
    setTimeLeft(null);
    setTimerActive(false);

    if (isLastQuestion) {
        try {
            // Calculate overall score
            const scores = Object.values(updatedValidations).map((v: any) => v.score || 0);
            const averageScore = scores.length > 0
                ? parseFloat((scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1))
                : 0;

            // Store interview results
            const results = {
                answers: updatedValidations,
                questions: questions.map(q => ({
                    ...q,
                    id: Number(q.id) // Ensure ID is a number
                })),
                overallScore: averageScore,
                timestamp: new Date().toISOString(),
                domain: localStorage.getItem("interviewDomain") || "Not specified",
                role: localStorage.getItem("interviewRole") || "Not specified",
                difficulty: localStorage.getItem("interviewDifficulty") || "intermediate"
            };

            // Save interview history
            if (user) {
                await saveInterviewHistory(user.id, results);
            } else {
                // Save to localStorage only if user is not logged in
                const history = JSON.parse(localStorage.getItem("interviewHistory") || "[]");
                history.push(results);
                localStorage.setItem("interviewHistory", JSON.stringify(history));
            }

            // Navigate to feedback page on completion
            navigate("/interview/feedback", {
                state: {
                    answers: updatedValidations,
                    questions: results.questions,
                    overallScore: averageScore
                }
            });
        } catch (error) {
            console.error("Error in interview submission:", error);
            // Even if there's an error, try to navigate to feedback with available data
            const scores = Object.values(updatedValidations).map((v: any) => v.score || 0);
            const averageScore = scores.length > 0
                ? parseFloat((scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1))
                : 0;

            navigate("/interview/feedback", {
                state: {
                    answers: updatedValidations,
                    questions: questions.map(q => ({ ...q, id: Number(q.id) })),
                    overallScore: averageScore
                }
            });
        }
    } else {
        // Move to next question
        setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Mock Interview Session</h1>
        <div className="flex justify-between">
          <p className="text-muted-foreground">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
          {timeLeft !== null ? (
            <div className={`font-mono ${timeLeft < 30 ? 'text-destructive' : ''}`}>
              Time remaining: {formatTime(timeLeft)}
            </div>
          ) : (
            <Button variant="outline" size="sm" onClick={handleStartTimer} disabled={timerActive}>
              Start 2-Minute Timer
            </Button>
          )}
        </div>
      </div>

      <Card>
        <CardHeader className="bg-muted/50">
          <h2 className="text-lg font-semibold">{currentQuestion.question}</h2>
        </CardHeader>
        <CardContent className="pt-6">
          <Textarea
            placeholder="Type your answer here..."
            className="min-h-[200px]"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => {
              if (currentQuestionIndex > 0) {
                setCurrentQuestionIndex(prev => prev - 1);
                const prevQuestionId = questions[currentQuestionIndex - 1].id;
                const prevAnswer = answers[prevQuestionId];
                setAnswer(prevAnswer?.answer || '');
              }
            }}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          <Button onClick={handleNext}>
            {isLastQuestion ? "Submit Interview" : "Next Question"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
