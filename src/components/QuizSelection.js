import { Link } from 'react-router-dom';

const QuizSelection = () => {
  return (
    <div className="quiz-app">
      <h2>Past Year Papers</h2>
      <p>Select a past year paper to begin</p>
      <div className="quiz-selection">
        <Link className="quiz-year" to="/2016">
          2016
        </Link>
        <Link className="quiz-year" to="/2017">
          2017
        </Link>
        <Link className="quiz-year" to="/2018">
          2018
        </Link>
        <Link className="quiz-year" to="/2019">
          2019
        </Link>
      </div>
    </div>
  );
};

export default QuizSelection;
