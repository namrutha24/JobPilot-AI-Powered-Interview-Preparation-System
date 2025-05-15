import React from "react";
import { useLocation } from "react-router-dom";

const Feedback = () => {
  const location = useLocation();
  const interviewResult = location.state?.interviewResult;
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

export default Feedback;
