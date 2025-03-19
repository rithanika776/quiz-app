import React, { useState, useEffect } from "react";
import './App.css';

const questions = [
  { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
  { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
  { question: "Who painted the Mona Lisa?", options: ["Van Gogh", "Da Vinci", "Picasso", "Dali"], answer: "Da Vinci" },
  { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
  { question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Dickens", "Austen", "Hemingway"], answer: "Shakespeare" },
  { question: "What is the square root of 16?", options: ["2", "3", "4", "5"], answer: "4" },
  { question: "In which country would you find the Great Barrier Reef?", options: ["Australia", "USA", "Japan", "India"], answer: "Australia" },
  { question: "Who discovered penicillin?", options: ["Einstein", "Fleming", "Newton", "Curie"], answer: "Fleming" },
  { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Amazon" },
  { question: "What is the currency of Japan?", options: ["Yuan", "Yen", "Won", "Ringgit"], answer: "Yen" },
];

function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds timer
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !quizFinished) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer); // Clean up on component unmount or when timer stops
    }
  }, [timeLeft, quizFinished]);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleFinishQuiz = () => {
    setQuizFinished(true);
  };

  return (
    <div className="quiz-container">
      <h1>Quiz App</h1>
      {quizFinished ? (
        <div className="quiz-finished">
          <p>Your score is: {score}/{questions.length}</p>
          <button className="finish-button" onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      ) : (
        <div>
          <div className="timer">
            <h3>Time Left:</h3>
            <p>{timeLeft} seconds</p>
          </div>
          <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
          <h3>{questions[currentQuestionIndex].question}</h3>
          <div className="options">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="finish-container">
        {!quizFinished && (
          <button className="finish-button" onClick={handleFinishQuiz}>
            Finish Quiz
          </button>
        )}
      </div>
    </div>
  );
}

export default QuizApp;
