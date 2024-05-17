import "./CommentsForm.scss";
import { useState } from "react";
import axios from "axios";

const CommentsForm = ({id, setActiveVideo}) => {
  // const BASE_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
  // const API_KEY = "98457a44-b052-41f0-a7e8-25093f568c3f";
  const [comment, setComment] = useState("");

  const handleSubmit = async () => {

    if(!comment.trim()){
      alert("Please enter a comment before posting");
    }

    const name = "Anonymous";
    try {
      const apiCommentsURL = `${BASE_URL}videos/${id}/comments?api_key=${API_KEY}`;
      const response = await axios.post(apiCommentsURL, {
        name: name,
        comment: comment,
      });
      setComment("");
      setActiveVideo(prevVideo => ({
        ...prevVideo,
        comments: [...prevVideo.comments, response.data]
      }));
    } catch (error) {
      console.log("Error fetching the comments", error);
    }
  };

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      await handleSubmit();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="form">
      <div className="form__image">
        <img
          className="form__icon"
          src="/src/assets/Images/Mohan-muruge.jpg"
        ></img>
      </div>
      <div className="form__formButton">
        <div className="form__mainForm">
          <form className="form__formEl" onSubmit={handleSubmit}>
            <label className="form__label" htmlFor="comments">
              JOIN THE CONVERSATION
            </label>
            <input
              className="form__input"
              type="text"
              id="comments"
              name="comments"
              placeholder="Add a new comment"
              value={comment}
              onChange={handleChange}
              required
            ></input>
          </form>
        </div>
        <div className="form__mainButton">
          <button
            type="submit"
            className="form__button"
            onClick={handleButtonClick}
          >
            <img src="/src/assets/Icons/add_comment.svg"></img>COMMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentsForm;
