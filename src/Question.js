import React from 'react';

const Question = ({ data, onAnswer, selectedAnswer, isAnswered }) => {
  return (
    <div className="question-container">
      <h2>{data.question}</h2>
      <ul>
        {data.options.map((option, index) => (
          <li key={index}>
            <button
              className={`${
                isAnswered
                  ? option === data.answer
                    ? 'correct animated'
                    : option === selectedAnswer
                    ? 'incorrect'
                    : ''
                  : ''
              }`}
              onClick={() => onAnswer(option)}
              disabled={isAnswered}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      {isAnswered && (
        <div>
          <p className="correct-answer">
            Correct Answer: <strong>{data.answer}</strong>
          </p>
          <p>Next question loading...</p>
        </div>
      )}
    </div>
  );
};

export default Question;
