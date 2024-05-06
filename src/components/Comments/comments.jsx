import "./comments.scss";

const Comments = ({ comment, formatDate }) => {
  return (
    <div className="comment">
      {comment &&
        comment.map((commentItem) => (
          <div className="comment__container" key={commentItem.id}>
            <div className="comment__icon">
              <img className="comment__iconEl"></img>
            </div>
            <div className="comment__mainComment">
              <div className="comment__nameDate">
                <h4 className="comment__name">{commentItem.name}</h4>
                <p className="comment__date">
                  {formatDate(commentItem.timestamp)}
                </p>
              </div>
              <p className="comment__content">{commentItem.comment}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Comments;
