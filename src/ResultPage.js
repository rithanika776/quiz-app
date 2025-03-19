import React from 'react';

function ResultPage({ score, totalQuestions, onRestart }) {
  return (
    <div className="container">
      <h1>Quiz Finished!</h1>
      <p>Your Score: {score} / {totalQuestions}</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
}

export default ResultPage;
