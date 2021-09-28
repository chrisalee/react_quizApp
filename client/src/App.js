import "./App.css";
import questions from "./data";

function App() {

  return (
    <div className="app">
      {false ? (
        <div className="score-section">You scored 1 out of </div>
      ) : (
        <>
        <div className="title-section">
          <h1>JavaScript Quiz</h1>
        </div>

          <div className="question-section">
            <div className="question-count">
              <span>Question 1 / {questions.length}</span>
            </div>
            <div className="question-text">{questions[0].questionText}</div>
          </div>
          <div className="answer-section">
            {
              questions[0].answerOptions.map((answerOption) => 
                <button>
                  {answerOption.answerText}
                </button>
              )
            }
          </div>
        </>
      )}
    </div>
  );
}

export default App;
