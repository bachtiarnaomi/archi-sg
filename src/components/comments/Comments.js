import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentForm from './CommentForm';
import Comment from './Comment';
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from '../../helpers/api';

import { getAnswers as getAnswersApi } from '../../helpers/answers.api';

const Comments = ({ currentUserId }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [topAnswers, setTopAnswers] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
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
    const topAnswers = [];
    const copied = [...comments];
    copied.sort((a, b) => b.vote - a.vote);
    const maxVote = copied[0].vote;
    if (maxVote < 3) return;
    console.log('copied', copied, maxVote);
    for (const comment of copied) {
      if (comment.vote == maxVote) topAnswers.push(comment);
      else {
        console.log('top answers', topAnswers);
        return topAnswers;
      }
    }
  };
  const addComment = (text, parentId, username = 'Anonymous User') => {
    console.log('add comment', text, parentId);
    // createCommentApi(text, parentId).then((comment) => {
    //   setBackendComments([comment, ...backendComments]);
    //   setActiveComment(null);
    // });
    const createdAt = new Date().toISOString();
    const answer = { text, parentId, createdAt, username };
    axios.post('http://localhost:3003/answer/add', answer).then((comment) => {
      setBackendComments([comment.data, ...backendComments]);
      console.log([comment.data, ...backendComments]);
      setActiveComment(null);
    });
  };
  const deleteComment = (commentId) => {
    if (window.confirm('Are you sure you want to remove comment?')) {
      console.log('delete comment', commentId);
      deleteCommentApi(commentId).then((comment) => {
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
      .post('http://localhost:3003/answer/vote', { commentId })
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
      .post('http://localhost:3003/answer/vote', { commentId })
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
    // getAnswersApi().then((data) => {
    //   setBackendComments(data);
    // });
    axios.get(`http://localhost:3003/answer/`).then((res) => {
      res.data.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setBackendComments(res.data);
      const topAnswers = getTopAnswer(res.data);
      if (topAnswers) setTopAnswers(topAnswers);
      console.log('answers', res.data);
    });
  }, []);

  return (
    <div className="comments">
      <h3 className="comments-title">Answers for question 1.1</h3>
      <div className="comment-form-title">Write your answer</div>
      <CommentForm submitLabel="Write" handleSubmit={addComment} />
      <div className="comments-container">
        {topAnswers.map((rootComment) => (
          <Comment
            key={rootComment._id}
            comment={rootComment}
            replies={getReplies(rootComment._id)}
            currentUserId={currentUserId}
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
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment._id}
            comment={rootComment}
            replies={getReplies(rootComment._id)}
            currentUserId={currentUserId}
            addComment={addComment}
            deleteComment={deleteComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            updateComment={updateComment}
            addVote={addVote}
            decreaseVote={decreaseVote}
            getCookie={getCookie}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
