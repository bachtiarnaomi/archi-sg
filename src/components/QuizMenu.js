import { useState, useContext } from 'react';
import { QuizContext } from '../helpers/Contexts';

function QuizMenu({ year }) {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="quiz">
      <h1>{year} PPE</h1>
      <p>This is the {year} PPE paper.</p>
      <p>
        Answers for the paper has been sourced from the community. If you see
        any discrepancies, you can use the feedback form <a href="/">here.</a>
      </p>
      <button
        className="action"
        onClick={() => {
          setGameState('quiz');
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default QuizMenu;
