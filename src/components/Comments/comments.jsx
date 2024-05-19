import axios from "axios";
import "./comments.scss";

const Comments = ({ id, comments, formatDate, setActiveVideo }) => {
  const handleDeleteComment = async (commentId) => {
    try {
      const deleteCommentsURL = `${
        import.meta.env.VITE_LOCALHOST
      }/videos/${id}/comments/${commentId}`;
      await axios.delete(deleteCommentsURL);
      setActiveVideo((prevVideo) => ({
        ...prevVideo,
        comments: prevVideo.comments.filter(
          (comment) => comment.id !== commentId
        ),
      }));
    } catch (error) {
      console.log("Error deleting the comment", error);
    }
  };

  return (
    <div className="comment">
      {comments &&
        comments.map((commentItem) => (
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
              <div className="comment__deleteIcon">
                <img
                  className="comment__deleteIcon"
                  src="/src/assets/Icons/icon-delete.svg"
                  alt="delete-icon"
                  onClick={() => handleDeleteComment(commentItem.id)}
                ></img>{" "}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Comments;
