import React, { useState } from "react";
import "./App.css";
import jsQuestions from "./data";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < jsQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          Score: {score} out of {jsQuestions.length}{" "}
          <span>
            Percent Correct: {((score / jsQuestions.length) * 100).toFixed(0)}%
          </span>
        </div>
      ) : (
        <>
          <div className="title-section">
            <h1>JavaScript Quiz</h1>
          </div>

          <div className="question-section">
            <div className="question-count">
              <span>
                Question {currentQuestion + 1} / {jsQuestions.length}
              </span>
            </div>
            <div className="question-text">
              {jsQuestions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {jsQuestions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
