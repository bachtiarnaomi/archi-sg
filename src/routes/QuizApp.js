import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import QuizMenu from '../components/QuizMenu';
import Quiz from '../components/Quiz';
import QuizEnd from '../components/QuizEnd';
import { QuizContext } from '../helpers/Contexts';
import QuizReview from '../components/QuizReview';

const QuizApp = ({ year }) => {
  const [gameState, setGameState] = useState('menu');
  const [score, setScore] = useState(0);
  return (
    <div className="quiz-app">
      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        {gameState === 'menu' && <QuizMenu year={year} />}
        {gameState === 'quiz' && <Quiz year={year} />}
        {gameState === 'end' && <QuizEnd year={year} />}
        {gameState === 'quiz-review' && <QuizReview year={year} />}
      </QuizContext.Provider>
    </div>
  );
};

export default QuizApp;
