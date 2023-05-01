import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ReactGA from 'react-ga4';
import CommentForm from './CommentForm';
import Comment from './Comment';
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from '../../helpers/api';

import { EssayContext } from '../../helpers/Contexts';

import { getAnswers as getAnswersApi } from '../../helpers/answers.api';
import Login from '../auth/login';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../helpers/firebase';

const Comments = ({ questionId, year }) => {
  const [user, loading] = useAuthState(auth);
  const [backendComments, setBackendComments] = useState([]);
  const [topAnswers, setTopAnswers] = useState([]);
  const [activeComment, setActiveComment] = useState(null);

  const { currQuestion, subCount, questions, isSub, paper } =
    useContext(EssayContext);
  // console.log('user', user);
  const rootComments = backendComments.filter(
    (comment) => comment.parentId == null
  );
  // Function to set a cookie
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

  // Function to get a cookie by name
  function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${name}=`)) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }
  const getReplies = (commentId) => {
    return backendComments
      .filter((backendComment) => backendComment.parentId == commentId)
      .sort((a, b) => {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
  };

  const getTopAnswer = (comments) => {
    if (comments.length == 0) return [];
    const topAnswers = [];
    const copied = [...comments];
    copied.sort((a, b) => b.vote - a.vote);
    let maxVote = 1;
    // console.log('copied', copied, maxVote);
    for (const comment of copied) {
      if (comment.parentId != null) continue;
      if (comment.vote >= maxVote) {
        topAnswers.push(comment);
        maxVote = comment.vote;
      } else {
        // console.log('top answers', topAnswers);
        return topAnswers;
      }
    }
    return topAnswers;
  };
  const addComment = (text, parentId) => {
    // console.log('add comment', text, parentId);
    // createCommentApi(text, parentId).then((comment) => {
    //   setBackendComments([comment, ...backendComments]);
    //   setActiveComment(null);
    // });
    ReactGA.event({
      category: 'ANSWERS',
      action: 'POST',
      label: 'NEW',
    });
    const username = user?.displayName || 'Anonymous User';
    const userId = user?.uid || null;
    const createdAt = new Date().toISOString();
    console.log('the user', user, username, userId);
    const newId = year + '-' + paper + '-' + questionId;
    const answer = {
      text,
      parentId,
      createdAt,
      username,
      userId,
      questionId: newId,
    };
    axios.post('https://www.archi.sg/answer/add', answer).then((comment) => {
      setBackendComments([comment.data, ...backendComments]);
      console.log([comment.data, ...backendComments]);
      setActiveComment(null);
    });
  };
  const deleteComment = (commentId) => {
    if (window.confirm('Are you sure you want to remove comment?')) {
      console.log('delete comment', commentId);
      axios
        .delete(`https://www.archi.sg/answer/delete/${commentId}`)
        .then((comment) => {
          console.log('deleted');
          const updatedBackendComments = backendComments.filter(
            (backendComment) => backendComment._id !== commentId
          );
          setBackendComments(updatedBackendComments);
        });
    }
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment._id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };

  const addVote = (voteCount, commentId) => {
    console.log('adding vote', voteCount);
    axios
      .post('https://www.archi.sg/answer/vote', { commentId })
      .then((response) => {
        // Update the vote count on the page
        const newVoteCount = parseInt(voteCount.textContent) + 1;
        voteCount.textContent = newVoteCount;

        // Create a cookie to track that the user has voted on this comment
        getCookie(`comment_${commentId}_voted`);
        setCookie(`comment_${commentId}_voted`, true, 1);
      })
      .catch((error) => {
        console.error('Axios request failed:', error);
      });
  };
  const decreaseVote = (voteCount, commentId) => {
    axios
      .post('https://www.archi.sg/answer/vote', { commentId })
      .then((response) => {
        // Update the vote count on the page
        const newVoteCount = parseInt(voteCount.textContent) - 1;
        voteCount.textContent = newVoteCount;

        // Create a cookie to track that the user has voted on this comment
        setCookie(`comment_${commentId}_voted`, true, 1);
      })
      .catch((error) => {
        console.error('Axios request failed:', error);
      });
  };
  useEffect(() => {
    const query = year + '-' + paper + '-' + questionId;
    axios
      .get(`https://www.archi.sg/answer/get-by-question/${query}`)
      .then((res) => {
        res.data.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setBackendComments(res.data);
        const newTopAnswers = getTopAnswer(res.data);
        if (newTopAnswers) setTopAnswers(newTopAnswers);
        else setTopAnswers([]);
        // console.log('answers', res.data);
      });
  }, [questionId]);
  useEffect(() => {
    const query = year + '-' + paper + '-' + questionId;
    axios
      .get(`https://www.archi.sg/answer/get-by-question/${query}`)
      .then((res) => {
        res.data.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setBackendComments(res.data);
        const newTopAnswers = getTopAnswer(res.data);
        if (newTopAnswers) setTopAnswers(newTopAnswers);
        else setTopAnswers([]);
        // console.log('answers', res.data);
      });
    // console.log('mounting component', paper + '-' + questionId);
    // axios
    //   .get(
    //     `http://localhost:3003/answer/get-by-question/${
    //       paper + '-' + questionId
    //     }`
    //   )
    //   .then((res) => {
    //     res.data.sort(
    //       (a, b) =>
    //         new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    //     );
    //     setBackendComments(res.data);
    //     const newTopAnswers = getTopAnswer(res.data);
    //     if (newTopAnswers) setTopAnswers(newTopAnswers);
    //     else setTopAnswers([]);
    //     console.log('answers', res.data);
    //   });
  }, []);

  return (
    <div className="comments">
      <Login />
      <h3 className="comments-title">
        {`Answers for ${questionId}`}
        {/* {'Answers for ' + questions[currQuestion]?.subtitle + ' '}
        {questions[currQuestion]?.subQuestions[subCount] &&
          String.fromCharCode(subCount + 97)} */}
      </h3>
      <div className="comment-form-title">Write your answer</div>
      <CommentForm
        submitLabel="Write"
        handleSubmit={addComment}
        username={user?.displayName}
        userId={user?.uid}
        signedin={user ? true : false}
      />
      <div className="comments-container">
        {topAnswers.map((rootComment) => (
          <Comment
            key={rootComment._id}
            currentUserId={user?.uid}
            comment={rootComment}
            replies={getReplies(rootComment._id)}
            addComment={addComment}
            deleteComment={deleteComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            updateComment={updateComment}
            addVote={addVote}
            decreaseVote={decreaseVote}
            getCookie={getCookie}
            topComment={true}
          />
        ))}
        {rootComments.map((rootComment) => {
          if (topAnswers[0] && rootComment._id == topAnswers[0]._id)
            return <div></div>;
          return (
            <Comment
              key={rootComment._id}
              comment={rootComment}
              replies={getReplies(rootComment._id)}
              currentUserId={user?.uid}
              addComment={addComment}
              deleteComment={deleteComment}
              activeComment={activeComment}
              setActiveComment={setActiveComment}
              updateComment={updateComment}
              addVote={addVote}
              decreaseVote={decreaseVote}
              getCookie={getCookie}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
