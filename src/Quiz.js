import React, { useState, useEffect } from 'react';
import Question from './Question';
import Result from './Result';

// Fisher-Yates shuffle algorithm to shuffle the quizData array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const quizData = [
  { question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'], answer: 'Paris' },
  { question: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], answer: 'Mars' },
  { question: 'Who wrote "To Kill a Mockingbird"?', options: ['Harper Lee', 'J.K. Rowling', 'Ernest Hemingway', 'Mark Twain'], answer: 'Harper Lee' },
  { question: 'What is the largest ocean on Earth?', options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'], answer: 'Pacific Ocean' },
  { question: 'Who painted the Mona Lisa?', options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Claude Monet'], answer: 'Leonardo da Vinci' },
  { question: 'In which year did the Titanic sink?', options: ['1912', '1905', '1898', '1923'], answer: '1912' },
  { question: 'Which element has the chemical symbol O?', options: ['Gold', 'Oxygen', 'Osmium', 'Oganesson'], answer: 'Oxygen' },
  { question: 'What is the capital of Japan?', options: ['Seoul', 'Tokyo', 'Beijing', 'Bangkok'], answer: 'Tokyo' },
  { question: 'Which planet is the hottest in the solar system?', options: ['Venus', 'Mercury', 'Mars', 'Jupiter'], answer: 'Venus' },
  { question: 'What is the hardest natural substance on Earth?', options: ['Gold', 'Iron', 'Diamond', 'Platinum'], answer: 'Diamond' },
  { question: 'Who was the first president of the United States?', options: ['Thomas Jefferson', 'Abraham Lincoln', 'George Washington', 'John Adams'], answer: 'George Washington' },
  { question: 'Which continent is known as the Dark Continent?', options: ['Asia', 'South America', 'Africa', 'Australia'], answer: 'Africa' },
  { question: 'Which country is the largest by area?', options: ['China', 'Russia', 'Canada', 'United States'], answer: 'Russia' },
  { question: 'What is the smallest planet in our solar system?', options: ['Venus', 'Mars', 'Mercury', 'Pluto'], answer: 'Mercury' },
  { question: 'What is the longest river in the world?', options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'], answer: 'Nile' },
  { question: 'Who is known as the Father of Computers?', options: ['Charles Babbage', 'Alan Turing', 'John von Neumann', 'Steve Jobs'], answer: 'Charles Babbage' },
  { question: 'What is the speed of light?', options: ['300,000 km/s', '150,000 km/s', '1,000,000 km/s', '3,000 km/s'], answer: '300,000 km/s' },
  { question: 'Which gas is most abundant in the Earth\'s atmosphere?', options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'], answer: 'Nitrogen' },
  { question: 'Who discovered penicillin?', options: ['Marie Curie', 'Albert Einstein', 'Alexander Fleming', 'Isaac Newton'], answer: 'Alexander Fleming' },
  { question: 'Which is the largest desert in the world?', options: ['Sahara', 'Gobi', 'Arabian', 'Antarctic'], answer: 'Antarctic' }
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [shuffledQuizData, setShuffledQuizData] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
  
    useEffect(() => {
      // Shuffle the quizData array once when the component mounts
      const shuffledData = shuffleArray([...quizData]);
      setShuffledQuizData(shuffledData);
    }, []);
  
    const handleAnswer = (answer) => {
      if (!isAnswered) {
        setSelectedAnswer(answer);
        setIsAnswered(true);
  
        if (answer === shuffledQuizData[currentQuestion].answer) {
          setScore(score + 1);
        }
  
        setTimeout(() => {
          const nextQuestion = currentQuestion + 1;
          if (nextQuestion < shuffledQuizData.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedAnswer(null);
            setIsAnswered(false);
          } else {
            setShowResult(true);
          }
        }, 3000); // Proceed to the next question after 2 seconds
      }
    };
  
    return (
      <div className="quiz-container">
        {showResult ? (
          <Result score={score} totalQuestions={shuffledQuizData.length} />
        ) : (
          shuffledQuizData.length > 0 && (
            <Question
              data={shuffledQuizData[currentQuestion]}
              onAnswer={handleAnswer}
              selectedAnswer={selectedAnswer}
              isAnswered={isAnswered}
            />
          )
        )}
      </div>
    );
  };
  
  export default Quiz;