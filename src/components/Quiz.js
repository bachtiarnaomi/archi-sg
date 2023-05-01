import { useState, useContext, useRef, useEffect } from 'react';
// import { Questions } from '../helpers/QuestionBank';
import axios from 'axios';
import { QuizContext } from '../helpers/Contexts';

function Quiz({ year }) {
  const { gameState, setGameState } = useContext(QuizContext);
  const { paper, setPaper } = useContext(QuizContext);
  const { essays, setEssays } = useContext(QuizContext);
  const { score, setScore } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const { questions, setQuestions } = useContext(QuizContext);
  const { answers, setAnswers } = useContext(QuizContext);
  useEffect(() => {
    if (paper == '1') {
      axios.get(`https://www.archi.sg/quiz/get-by-year/${year}`).then((res) => {
        // axios.get(`https://www.archi.sg/quiz/get-by-year/${year}`).then((res) => {
        console.log('res', res);
        setQuestions(res.data[0].mcq);
        setEssays(res.data[0].essay);
      });
    } else if (paper == '2') {
      axios
        .get(`https://www.archi.sg/quiz2/get-by-year/${year}`)
        .then((res) => {
          // axios.get(`https://www.archi.sg/quiz/get-by-year/${year}`).then((res) => {
          setQuestions(res.data[0].mcq);
          setEssays(res.data[0].essay);
        });
    }
  }, []);
  const ref = useRef(null);
  const handleNextQuestion = () => {
    resetClasses();
    if (selectedOption === '') return;
    const answer = selectedOption;
    if (questions[currQuestion].answer == selectedOption) {
      setScore(score + 1);
    }
    answers.push(answer);
    setAnswers(answers);
    setCurrQuestion(currQuestion + 1);
    setSelectedOption('');
  };

  const handleFinishQuiz = () => {
    if (selectedOption === '') return;
    const answer = selectedOption;
    if (questions[currQuestion].answer == selectedOption) {
      setScore(score + 1);
    }
    answers.push(answer);
    setAnswers(answers);
    setGameState('end');
  };

  const handleClick = (e, ans) => {
    console.log('this', e.currentTarget);
    resetClasses();

    e.currentTarget.className += ' option-active';
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
      <button className="skip" onClick={() => setGameState('essay')}>
        Skip to essay
      </button>
      <ProgressBar
        currQuestion={currQuestion}
        nQuestions={questions.length}
      ></ProgressBar>
      <p className="prompt">{questions[currQuestion].prompt}</p>
      <div ref={ref} id="options">
        <button
          className="option"
          onClick={(e) => {
            handleClick(e, 'A');
          }}
        >
          {questions[currQuestion].optionA}
        </button>
        <button
          className="option"
          onClick={(e) => {
            handleClick(e, 'B');
          }}
        >
          {questions[currQuestion].optionB}
        </button>
        <button
          className="option"
          onClick={(e) => {
            handleClick(e, 'C');
          }}
        >
          {questions[currQuestion].optionC}
        </button>
        <button
          className="option"
          onClick={(e) => {
            handleClick(e, 'D');
          }}
        >
          {questions[currQuestion].optionD}
        </button>
      </div>

      {currQuestion == questions.length - 1 ? (
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
