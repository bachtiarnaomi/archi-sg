import { useState, useContext, useRef, useEffect } from 'react';
// import { Questions } from '../helpers/QuestionBank';
import axios from 'axios';
import { EssayContext } from '../helpers/Contexts';

function EssayQuestion() {
  const {
    currQuestion,
    essays,
    setCurrQuestion,
    subCount,
    setSubCount,
    isSub,
    setSub,
  } = useContext(EssayContext);

  useEffect(() => {
    console.log('getting the qn');
    if (!essays[currQuestion] && currQuestion == 0) {
      console.log('curr qn', currQuestion);
      return;
    }
    if (currQuestion >= essays.length) console.log('ESSAY ENDS');
    if (essays[currQuestion].subQuestions.length > 0) {
      setSub(true);
    }
  }, [currQuestion]);
  const handleNextQuestion = () => {
    if (!isSub) {
      setCurrQuestion(currQuestion + 1);
      return;
    }
    if (isSub && subCount + 1 < essays[currQuestion].subQuestions.length) {
      setSubCount(subCount + 1);
      return;
    }
    if (isSub && subCount + 1 >= essays[currQuestion].subQuestions.length) {
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
      <h3>{essays[currQuestion]?.title}</h3>
      <div className="text">
        {essays[currQuestion]?.subtitle +
          ') ' +
          essays[currQuestion]?.mainQuestion}
        <br />
        <br />
        <div className="bold">
          {essays[currQuestion]?.subQuestions[subCount] &&
            String.fromCharCode(subCount + 97) +
              ') ' +
              essays[currQuestion]?.subQuestions[subCount]}
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
      {(currQuestion + 1 < essays.length ||
        subCount + 1 < essays[currQuestion]?.subQuestions.length) && (
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
