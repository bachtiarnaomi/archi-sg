import { useState, useContext, useRef, useEffect } from 'react';
// import { Questions } from '../helpers/QuestionBank';
import axios from 'axios';
import { EssayContext } from '../helpers/Contexts';
import data from '../helpers/2017-p2.json';

function EssayQuestion() {
  const {
    currQuestion,
    questions,
    setCurrQuestion,
    subCount,
    setSubCount,
    isSub,
    setSub,
  } = useContext(EssayContext);

  useEffect(() => {
    if (!questions[currQuestion] && currQuestion == 0) {
      console.log('curr qn', currQuestion);
      return;
    }
    if (currQuestion >= questions.length) console.log('ESSAY ENDS');
    if (questions[currQuestion].subQuestions.length > 0) {
      setSub(true);
    }
  }, [currQuestion]);
  const handleNextQuestion = () => {
    if (!isSub) {
      setCurrQuestion(currQuestion + 1);
      return;
    }
    if (isSub && subCount + 1 < questions[currQuestion].subQuestions.length) {
      setSubCount(subCount + 1);
      return;
    }
    if (isSub && subCount + 1 >= questions[currQuestion].subQuestions.length) {
      setSubCount(0);
      setCurrQuestion(currQuestion + 1);
      return;
    }
  };
  const handlePrevQuestion = () => {
    if (!isSub) {
      setCurrQuestion(currQuestion - 1);
      return;
    }
    if (isSub && subCount - 1 >= 0) {
      setSubCount(subCount - 1);
      return;
    }
    if (isSub && subCount - 1 < 0) {
      setCurrQuestion(currQuestion - 1);
      return;
    }
  };
  return (
    <div className="quiz">
      <h3>{questions[currQuestion]?.title}</h3>
      <div className="text">
        {questions[currQuestion]?.subtitle +
          ') ' +
          questions[currQuestion]?.mainQuestion}
        <br />
        <br />
        <div className="bold">
          {questions[currQuestion]?.subQuestions[subCount] &&
            String.fromCharCode(subCount + 97) +
              ') ' +
              questions[currQuestion]?.subQuestions[subCount]}
        </div>
      </div>
      {(currQuestion - 1 >= 0 || subCount - 1 >= 0) && (
        <button
          className="essay-action"
          onClick={() => {
            handlePrevQuestion();
          }}
        >
          Previous
        </button>
      )}
      {(currQuestion + 1 < questions.length ||
        subCount + 1 < questions[currQuestion]?.subQuestions.length) && (
        <button
          className="essay-action"
          onClick={() => {
            handleNextQuestion();
          }}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default EssayQuestion;
