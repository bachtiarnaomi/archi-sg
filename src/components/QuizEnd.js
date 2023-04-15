import { useContext } from 'react';
import { QuizContext } from '../helpers/Contexts';
// import { Questions } from '../helpers/QuestionBank';
import QuizReview from './QuizReview';
function QuizEnd({ year }) {
  const { score, setScore, game, setGameState, questions } =
    useContext(QuizContext);
  // need tto switch game state to review when button is pressed
  return (
    <div className="quiz">
      <h1>{year} Quiz</h1>
      <h3>
        Score: {score}/{questions.length}
      </h3>
      <QuizReview></QuizReview>
      {/* <p>
        The next segment is open ended. Suggested answers from the community
        will be displayed alongside the question.
      </p>
      <button className="action">Next Segment</button> */}
    </div>
  );
}

export default QuizEnd;
