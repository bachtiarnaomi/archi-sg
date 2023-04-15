import { useState, useContext } from 'react';
import { QuizContext } from '../helpers/Contexts';

function QuizReview({ year }) {
  const { gameState, setGameState, questions, answers } =
    useContext(QuizContext);
  return (
    <div className="quiz">
      <br />
      <p>Below is a review of the paper.</p>
      <br />

      {questions.map((question, index) => {
        return (
          <div
            className="review-question"
            style={{
              borderColor:
                answers[index] == question.answer ? '#a2c2c4' : '#de6f65',
            }}
          >
            {' '}
            <p className="review-answer-container">
              <p>{index + 1}. </p>
              <p /* className="bold" */>{question.prompt}</p>
            </p>
            <p className="review-answer-container">
              <span
                class="dot"
                className={answers[index] == 'A' ? 'dot selected' : 'dot'}
              ></span>
              <p>{question.optionA}</p>
            </p>
            <p className="review-answer-container">
              <span
                class="dot"
                className={answers[index] == 'B' ? 'dot selected' : 'dot'}
              ></span>
              <p>{question.optionB}</p>
            </p>
            <p className="review-answer-container">
              <span
                class="dot"
                className={answers[index] == 'C' ? 'dot selected' : 'dot'}
              ></span>
              <p>{question.optionC}</p>
            </p>
            <p className="review-answer-container">
              <span
                class="dot"
                className={answers[index] == 'D' ? 'dot selected' : 'dot'}
              ></span>
              <p>{question.optionD}</p>
            </p>
            <p className="bold">
              Your answer: {answers[index]}{' '}
              {answers[index] == question.answer ? '(Correct)' : '(Incorrect)'}
            </p>
            <p
              className="explanation"
              style={{
                backgroundColor:
                  answers[index] == question.answer ? '#e9f5e8' : '#F9CBC7',
              }}
            >
              <p className="bold">Explanation:</p>
              {question.explanation}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default QuizReview;
