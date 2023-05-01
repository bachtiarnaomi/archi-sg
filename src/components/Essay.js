import { useState, useContext, useRef, useEffect } from 'react';
import { EssayContext } from '../helpers/Contexts';
// import { Questions } from '../helpers/QuestionBank';
import axios from 'axios';
import { QuizContext } from '../helpers/Contexts';
import data from '../helpers/2017-p2.json';
import EssayQuestion from './EssayQuestion';
import Comments from './comments/Comments';
import { AuthProvider } from 'react-auth-kit';
import Login from './auth/login';

function Essay({ year }) {
  const { essays, setEssays, paper } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [subCount, setSubCount] = useState(0);
  const [isSub, setSub] = useState(false);
  const [questionId, setQuestionId] = useState('');

  useEffect(() => {
    // setQuestions(data[year]);
    // console.log('load essay');
    // console.log('essays', essays);
    const qn = essays[0];
    let newId = qn?.subtitle;
    if (qn?.subQuestions[subCount]) {
      newId += String.fromCharCode(subCount + 97);
    }
    setQuestionId(newId);
    // console.log('newid', newId);
  }, []);

  useEffect(() => {
    let newId = essays[currQuestion]?.subtitle;
    if (essays[currQuestion]?.subQuestions[subCount]) {
      newId += String.fromCharCode(subCount + 97);
    }
    setQuestionId(newId);
  }, [currQuestion, subCount, questionId]);
  return (
    <div className="essay">
      <h1>{year} PPE</h1>
      <EssayContext.Provider
        value={{
          essays,
          paper,
          currQuestion,
          setCurrQuestion,
          subCount,
          setSubCount,
          isSub,
          setSub,
        }}
      >
        <EssayQuestion />
        <hr />
        {questionId && <Comments questionId={questionId} year={year} />}
      </EssayContext.Provider>
    </div>
  );
}

export default Essay;
