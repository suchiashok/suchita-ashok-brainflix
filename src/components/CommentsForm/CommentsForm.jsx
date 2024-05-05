import "./CommentsForm.scss";

const CommentsForm = () => {
  return (
    <div className="form">
      <div className="form__image">
        <img
          className="form__icon"
          src="/src/assets/Images/Mohan-muruge.jpg"
        ></img>
      </div>
      <div className="form__formButton">
        <form className="form__formEl">
          <label className="form__label" htmlFor="comments">
            JOIN THE CONVERSATION
          </label>
          <input
            className="form__input"
            type="text"
            id="comments"
            name="comments"
            placeholder="Add a new comment"
          ></input>
        </form>
        <button className="form__button">
            <img src="/src/assets/Icons/add_comment.svg"></img>COMMENT</button>
      </div>
    </div>
  );
};

export default CommentsForm;
