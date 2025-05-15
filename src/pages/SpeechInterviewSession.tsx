import React, { useState, useRef, useEffect } from "react";
import { getQuestionsForInterview } from "@/utils/questionUtils";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

export default function SpeechInterview() {
  const [current, setCurrent] = useState(0);
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [aiSpeaking, setAiSpeaking] = useState(false);
  const [userSpeaking, setUserSpeaking] = useState(false);
  const [ended, setEnded] = useState(false);
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const recognitionRef = useRef<any>(null);
  const navigate = useNavigate();

  // Get interview parameters from localStorage
  useEffect(() => {
    const storedParams = localStorage.getItem("interviewParams");
    if (storedParams) {
      const params = JSON.parse(storedParams);
      const domainQuestions = getQuestionsForInterview(params.domain, params.role, params.difficulty);
      setQuestions(domainQuestions);
    } else {
      // If no params, use default IT Software Engineer Intermediate questions
      const defaultQuestions = getQuestionsForInterview("it", "software-engineer", "intermediate");
      setQuestions(defaultQuestions);
    }
  }, []);

  // AI speaks the question
  const speak = (text: string) => {
    setAiSpeaking(true);
    const synth = window.speechSynthesis;
    const utter = new window.SpeechSynthesisUtterance(text);
    utter.onend = () => setAiSpeaking(false);
    synth.speak(utter);
  };

  useEffect(() => {
    if (questions[current]) {
      speak(questions[current].question);
      setTranscript("");
    }
  }, [current, questions]);

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

  const startListening = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event: any) => {
      const spokenAnswer = event.results[0][0].transcript;
      setTranscript(spokenAnswer);
      setIsListening(false);
      setUserSpeaking(false);

      // Validate the answer and store it
      if (questions[current]) {
        const validation = validateAnswer(questions[current], spokenAnswer);
        setAnswers(prev => ({
          ...prev,
          [questions[current].id]: {
            answer: spokenAnswer,
            score: validation.score,
            feedback: validation.feedback
          }
        }));
      }
    };
    recognition.onerror = (event: any) => {
      alert("Error occurred in recognition: " + event.error);
      setIsListening(false);
      setUserSpeaking(false);
    };
    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
    setUserSpeaking(true);
  };

  // End interview
  const endInterview = () => {
    // Calculate overall score
    const scores = Object.values(answers).map((v: any) => v.score || 0);
    const averageScore = scores.length > 0 
      ? parseFloat((scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1))
      : 0;

    const interviewResult = {
      type: "speech",
      answers,
      questions,
      overallScore: averageScore,
      completedAt: new Date().toISOString(),
      domain: localStorage.getItem("interviewDomain") || "Not specified",
      role: localStorage.getItem("interviewRole") || "Not specified",
      difficulty: localStorage.getItem("interviewDifficulty") || "intermediate"
    };

    // Save to history
    const history = JSON.parse(localStorage.getItem("interviewHistory") || "[]");
    history.push(interviewResult);
    localStorage.setItem("interviewHistory", JSON.stringify(history));

    // Navigate to feedback page
    navigate("/interview/feedback", { 
      state: { 
        answers,
        questions,
        overallScore: averageScore
      }
    });
  };

  if (ended) {
    return (
      <div style={{ textAlign: "center", marginTop: 100 }}>
        <h2>Interview Ended</h2>
        <p>Thank you for participating! Please check the feedback section.</p>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh", justifyContent: "center" }}>
      <div style={{ display: "flex", gap: 60, marginBottom: 40 }}>
        {/* AI Interviewer */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: "#2d2d3a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              boxShadow: aiSpeaking ? "0 0 0 15px #2563eb, 0 0 0 30px #2563eb44" : "none",
              transition: "box-shadow 0.3s"
            }}
          >
            <span role="img" aria-label="AI" style={{ fontSize: 48 }}>🤖</span>
          </div>
          <div style={{ color: "#222", marginTop: 16, fontWeight: "bold" }}>AI Interviewer</div>
        </div>
        {/* User */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: "#2d2d3a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              boxShadow: userSpeaking ? "0 0 0 15px #22c55e, 0 0 0 30px #22c55e44" : "none",
              transition: "box-shadow 0.3s"
            }}
          >
            <span role="img" aria-label="Mic" style={{ fontSize: 48 }}>🎤</span>
          </div>
          <div style={{ color: "#222", marginTop: 16, fontWeight: "bold" }}>You</div>
        </div>
      </div>
      {/* Question and Answer Section */}
      <div style={{ color: "#222", fontSize: 24, marginBottom: 16 }}>
        <strong>Question {current + 1} of {questions.length}:</strong> {questions[current]?.question}
      </div>
      <button
        onClick={startListening}
        disabled={isListening}
        style={{ padding: "12px 24px", background: "#2563eb", color: "#fff", border: "none", borderRadius: 8, fontSize: 18 }}
      >
        {isListening ? "Listening..." : "Answer with your voice"}
      </button>
      <div style={{ color: "#222", marginTop: 24 }}>
        <strong>Your Answer:</strong> {transcript}
      </div>
      {transcript && current < questions.length - 1 && (
        <button
          onClick={() => {
            setCurrent(current + 1);
            setTranscript("");
          }}
          style={{
            marginTop: 24,
            padding: "12px 24px",
            background: "#22c55e",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontSize: 18,
          }}
        >
          Next Question
        </button>
      )}
      {transcript && current === questions.length - 1 && (
        <button
          onClick={endInterview}
          style={{
            marginTop: 24,
            padding: "12px 24px",
            background: "#ef4444",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontSize: 18,
          }}
        >
          End Interview
        </button>
      )}
    </div>
  );
}

const Feedback = () => {
  const location = useLocation();
  const interviewResult = location.state?.interviewResult;

  // If not present, fallback to last interview in localStorage
  const result = interviewResult || (JSON.parse(localStorage.getItem("interviewHistory") || "[]").slice(-1)[0]);

  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <h2>Feedback</h2>
      {result ? (
        <div>
          <p>Type: {result.type}</p>
          <ul>
            {result.questions.map((q, i) => (
              <li key={i}>
                <strong>Q:</strong> {q.question}<br />
                <strong>Your Answer:</strong> {q.answer}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No interview data found.</p>
      )}
    </div>
  );
};
