import { useContext } from 'react';
import { QuizContext } from '../helpers/Contexts';
import { Questions } from '../helpers/QuestionBank';
function QuizEnd({ year }) {
  const { score, setScore } = useContext(QuizContext);
  const { game, setGameState } = useContext(QuizContext);
  // need tto switch game state to review when button is pressed
  return (
    <div className="quiz">
      <h1>{year} Quiz</h1>
      <h3>
        Score: {score} /{Questions[year]['mcq'].length}
      </h3>
      <p>
        The next segment is open ended. Suggested answers from the community
        will be displayed alongside the question.
      </p>
      <button className="action">Next Segment</button>
      <h3>Review paper!!!</h3>
      <p>
        The next segment is open ended. Suggested answers from the community
        will be displayed alongside the question.
      </p>
      <p>
        The next segment is open ended. Suggested answers from the community
        will be displayed alongside the question.
      </p>
    </div>
  );
}

export default QuizEnd;
