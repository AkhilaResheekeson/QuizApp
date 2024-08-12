import React, { useState } from "react";
import Quiz from "./Quiz";
import './App.css';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStart = () => {
    setQuizStarted(true);
  };

  return (
    <div className="App">
      
      {!quizStarted ? (
        <div className="start-div"><h1>Welcome to the Quiz App!</h1>
        <button onClick={handleStart}>Start</button>
        </div>
      ) : (
        <Quiz />
      )}
    </div>
  );
}

export default App;
