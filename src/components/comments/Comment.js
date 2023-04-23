import { useEffect } from 'react';
import { deleteComment } from '../../helpers/api';
import CommentForm from './CommentForm';
import * as FaIcons from 'react-icons/fa';
import { useState } from 'react';

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

  return (
    <div className={topComment ? 'comment-top' : 'comment'}>
      <div className="comment-image-container">
        {/* <img src="." alt="" /> */}
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div className="comment-time">
            {new Date(comment.createdAt).toLocaleDateString()}
          </div>
          <br />
          <div className="comment-time">
            {new Date(comment.createdAt).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
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
          {canEdit && (
            <div
              className="comment-action"
              onClick={() => {
                setActiveComment({ id: comment._id, type: 'editing' });
              }}
            >
              Edit
            </div>
          )}
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
              console.log('e', e.target);
              if (hasVoted) {
                console.log(
                  'cookie',
                  getCookie(`comment_${comment._id}_voted`)
                );
                console.log('you have voted');
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
                console.log('you have voted');
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
        {replies.length > 0 && (
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
