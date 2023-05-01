import { useEffect } from 'react';
import { deleteComment } from '../../helpers/api';
import CommentForm from './CommentForm';
import * as FaIcons from 'react-icons/fa';
import { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

const Comment = ({
  comment,
  replies,
  currentUserId,
  deleteComment,
  addComment,
  activeComment,
  setActiveComment,
  updateComment,
  addVote,
  decreaseVote,
  getCookie,
  parentId = null,
  topComment = false,
}) => {
  const canReply = /* Boolean(currentUserId) */ parentId == null;
  const canEdit = currentUserId === comment.userId;
  const canDelete = currentUserId === comment.userId;
  // Check if the user has already voted on this comment

  const [hasVoted, setHasVoted] = useState(
    getCookie(`comment_${comment._id}_voted`)
  );
  const [show, setShow] = useState(false);
  const isReplying =
    activeComment &&
    activeComment.type === 'replying' &&
    activeComment._id === comment._id;
  const isEditing =
    activeComment &&
    activeComment.type === 'editing' &&
    activeComment._id === comment._id;

  const replyId = parentId ? parentId : comment._id;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  const timePassed = (createdAt) => {
    const date = new Date(createdAt);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    if (seconds < 60) {
      return `${seconds} second${seconds <= 1 ? '' : 's'} ago`;
    }
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    }
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    }
    const days = Math.floor(hours / 24);
    return `${days} day${days === 1 ? '' : 's'} ago`;
  };

  return (
    <div className={topComment ? 'comment-top' : 'comment'}>
      <div className="comment-image-container">
        {/* <img src="." alt="" /> */}
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div className="comment-time">{timePassed(comment.createdAt)}</div>
          {/* <div className="comment-time">
            {new Date(comment.createdAt).toLocaleDateString()}
          </div>
          <br />
          <div className="comment-time">
            {new Date(comment.createdAt).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div> */}
        </div>
        {!isEditing && <div className="comment-text">{comment.text}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.text}
            handleSubmit={(text) => {
              updateComment(text, comment._id);
            }}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )}
        <div className="comment-actions">
          {canReply && (
            <div
              className="comment-action"
              onClick={() => {
                setActiveComment({ _id: comment._id, type: 'replying' });
              }}
            >
              Reply
            </div>
          )}
          {/* {canEdit && (
            <div
              className="comment-action"
              onClick={() => {
                setActiveComment({ id: comment._id, type: 'editing' });
              }}
            >
              Edit
            </div>
          )} */}
          {canDelete && (
            <div
              className="comment-action"
              onClick={() => deleteComment(comment._id)}
            >
              Delete
            </div>
          )}
          <FaIcons.FaRegThumbsUp
            style={hasVoted ? { fill: 'gray' } : { fill: 'black' }}
            onClick={(e) => {
              e.preventDefault();
              // console.log('e', e.target);
              if (hasVoted) {
                return;
              }
              addVote(
                document.querySelector(`#vote-count-${comment._id}`),
                comment._id
              );
              setHasVoted(true);
            }}
          />
          <FaIcons.FaRegThumbsDown
            style={hasVoted ? { fill: 'gray' } : { fill: 'black' }}
            onClick={(e) => {
              e.preventDefault();
              if (hasVoted) {
                return;
              }
              e.target.style.stroke = 'red';
              decreaseVote(
                document.querySelector(`#vote-count-${comment._id}`),
                comment._id
              );
              setHasVoted(true);
            }}
          />
          <div id={`vote-count-${comment._id}`} className="comment-action">
            {comment.vote}
          </div>
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && !show && (
          <div
            className="show-reply"
            onClick={() => {
              setShow(true);
            }}
          >
            <IoMdArrowDropdown />
            Show {replies.length > 1 ? 'replies' : 'reply'}
          </div>
        )}
        {replies.length > 0 && show && (
          <div
            className="show-reply"
            onClick={() => {
              setShow(false);
            }}
          >
            <IoMdArrowDropup />
            Hide {replies.length > 1 ? 'replies' : 'reply'}
          </div>
        )}
        {show && replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                key={reply._id}
                comment={reply}
                replies={[]}
                currentUserId={currentUserId}
                parentId={comment._id}
                deleteComment={deleteComment}
                addComment={addComment}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
                updateComment={updateComment}
                addVote={addVote}
                decreaseVote={decreaseVote}
                getCookie={getCookie}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
