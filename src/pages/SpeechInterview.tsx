import React, { useState, useRef, useEffect } from "react";
import { questions } from "../utils/questionUtils";
import { Link } from "react-router-dom";

const SpeechInterview = () => {
  const [current, setCurrent] = useState(0);
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  // Speak the question
  const speak = (text: string) => {
    const synth = window.speechSynthesis;
    const utter = new window.SpeechSynthesisUtterance(text);
    synth.speak(utter);
  };

  useEffect(() => {
    if (questions[current]) {
      speak(questions[current].question);
      setTranscript("");
    }
  }, [current]);

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
      setTranscript(event.results[0][0].transcript);
      setIsListening(false);
    };
    recognition.onerror = (event: any) => {
      alert("Error occurred in recognition: " + event.error);
      setIsListening(false);
    };
    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh", background: "#18181b" }}>
      <div style={{ background: "#23232b", borderRadius: 16, padding: 32, display: "flex", gap: 48 }}>
        {/* AI Interviewer */}
        <div style={{ textAlign: "center" }}>
          <div style={{ width: 120, height: 120, borderRadius: "50%", background: "#2d2d3a", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
            <span role="img" aria-label="AI" style={{ fontSize: 48 }}>🤖</span>
          </div>
          <div style={{ color: "#fff", marginTop: 16, fontWeight: "bold" }}>AI Interviewer</div>
        </div>
        {/* User */}
        <div style={{ textAlign: "center" }}>
          <div style={{ width: 120, height: 120, borderRadius: "50%", background: "#2d2d3a", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
            <span role="img" aria-label="User" style={{ fontSize: 48 }}>🧑</span>
          </div>
          <div style={{ color: "#fff", marginTop: 16, fontWeight: "bold" }}>You</div>
        </div>
      </div>
      {/* Question and Answer Section */}
      <div style={{ position: "absolute", bottom: 80, left: 0, right: 0, textAlign: "center" }}>
        <div style={{ color: "#fff", fontSize: 24, marginBottom: 16 }}>
          <strong>Question {current + 1}:</strong> {questions[current]?.question}
        </div>
        <button
          onClick={startListening}
          disabled={isListening}
          style={{ padding: "12px 24px", background: "#2563eb", color: "#fff", border: "none", borderRadius: 8, fontSize: 18 }}
        >
          {isListening ? "Listening..." : "Answer with your voice"}
        </button>
        <div style={{ color: "#fff", marginTop: 24 }}>
          <strong>Your Answer:</strong> {transcript}
        </div>
        {transcript && (
          <div style={{ marginTop: 24 }}>
            <button
              onClick={() => setCurrent((q) => q + 1)}
              style={{ padding: "12px 24px", background: "#22c55e", color: "#fff", border: "none", borderRadius: 8, fontSize: 18 }}
              disabled={current >= questions.length - 1}
            >
              Next Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpeechInterview;
