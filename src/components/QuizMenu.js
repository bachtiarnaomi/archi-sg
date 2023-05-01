import { useState, useContext } from 'react';
import { QuizContext } from '../helpers/Contexts';

function QuizMenu({ year }) {
  const { gameState, setGameState, paper, setPaper, essays } =
    useContext(QuizContext);

  return (
    <div className="quiz">
      <h1>{year} PPE</h1>
      <p>This is the {year} PPE paper.</p>
      <p>
        Answers for the paper has been sourced from the community. If you see
        any discrepancies, you can use the feedback form{' '}
        <a
          style={{ textDecoration: 'underline' }}
          href="/contact"
          target="_blank"
        >
          here.
        </a>
      </p>
      <button
        className="action"
        onClick={() => {
          setPaper(1);
          setGameState('quiz');
        }}
      >
        Paper 1
      </button>
      {year == '2017' && (
        <button
          className="action"
          onClick={() => {
            setPaper(2);
            setGameState('quiz');
          }}
        >
          Paper 2
        </button>
      )}
    </div>
  );
}

export default QuizMenu;
