import React, { useState } from 'react';
import LoginPage from './LoginPage';
import QuizPage from './QuizPage';
import ResultPage from './ResultPage';
import './App.css';
function App() {
  const [username, setUsername] = useState('');
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleLogin = (name) => {
    setUsername(name);
  };

  const handleFinishQuiz = (finalScore) => {
    setScore(finalScore);
    setIsQuizFinished(true);
  };

  const handleRestartQuiz = () => {
    setIsQuizFinished(false);
    setScore(0);
  };

  return (
    <div>
      {!username && !isQuizFinished && <LoginPage onLogin={handleLogin} />}
      {username && !isQuizFinished && <QuizPage username={username} onFinish={handleFinishQuiz} />}
      {isQuizFinished && <ResultPage score={score} totalQuestions={3} onRestart={handleRestartQuiz} />}
    </div>
  );
}

export default App;
