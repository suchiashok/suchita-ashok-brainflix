import axios from "axios";
import "./comments.scss";

const Comments = ({ id, comments, formatDate, setActiveVideo }) => {
  const BASE_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
  const API_KEY = "98457a44-b052-41f0-a7e8-25093f568c3f";

  const handleDeleteComment = async (commentId) => {
    try {
      const deleteCommentsURL = `${BASE_URL}videos/${id}/comments/${commentId}?api_key=${API_KEY}`;
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
