import { useState, useContext, useRef, useEffect } from 'react';
import { Questions } from '../helpers/QuestionBank';
import { QuizContext } from '../helpers/Contexts';

function Quiz({ year }) {
  const { gameState, setGameState } = useContext(QuizContext);
  const { score, setScore } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');

  const nQuestions = Questions[year]['mcq'].length;
  const ref = useRef(null);
  const handleNextQuestion = () => {
    resetClasses();
    if (selectedOption === '') return;
    if (Questions[year]['mcq'][currQuestion].answer == selectedOption) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
    setSelectedOption('');
  };

  const handleFinishQuiz = () => {
    // if (selectedOption === '') return;
    if (Questions[year]['mcq'][currQuestion].answer == selectedOption) {
      setScore(score + 1);
    }
    setGameState('end');
  };

  const handleClick = (e, ans) => {
    console.log('this', e.currentTarget);
    resetClasses();

    e.currentTarget.className += ' option-active';
    console.log(ref.current);
    setSelectedOption(ans);
  };
  const resetClasses = () => {
    const buttons = Array.from(ref.current.children);
    buttons.forEach((button) => {
      button.className = 'option';
    });
  };
  return (
    <div className="quiz">
      <h1>{year} Quiz</h1>
      <ProgressBar
        currQuestion={currQuestion}
        nQuestions={nQuestions}
      ></ProgressBar>
      <p className="prompt">{Questions[year]['mcq'][currQuestion].prompt}</p>
      <div ref={ref} id="options">
        <button
          className="option"
          onClick={(e) => {
            handleClick(e, 'A');
          }}
        >
          {Questions[year]['mcq'][currQuestion].optionA}
        </button>
        <button
          className="option"
          onClick={(e) => {
            handleClick(e, 'B');
          }}
        >
          {Questions[year]['mcq'][currQuestion].optionB}
        </button>
        <button
          className="option"
          onClick={(e) => {
            handleClick(e, 'C');
          }}
        >
          {Questions[year]['mcq'][currQuestion].optionC}
        </button>
        <button
          className="option"
          onClick={(e) => {
            handleClick(e, 'D');
          }}
        >
          {Questions[year]['mcq'][currQuestion].optionD}
        </button>
      </div>

      {currQuestion == nQuestions - 1 ? (
        <button className="action" onClick={handleFinishQuiz}>
          Submit
        </button>
      ) : (
        <button className="action" onClick={handleNextQuestion}>
          Next
        </button>
      )}
    </div>
  );
}

const ProgressBar = ({ currQuestion, nQuestions }) => {
  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: (currQuestion / nQuestions) * 100 + '%' }}
        ></div>
      </div>
      <div className="progress-label">
        {currQuestion} / {nQuestions}
      </div>
    </div>
  );
};

export default Quiz;
