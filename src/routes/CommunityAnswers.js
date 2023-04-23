import Comments from '../components/comments/Comments';

function CommunityAnswers() {
  return (
    <div className="about">
      <h1>Community Answers</h1>
      <Comments currentUserId="1" />
    </div>
  );
}

export default CommunityAnswers;
