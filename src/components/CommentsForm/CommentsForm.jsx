import "./CommentsForm.scss";

const CommentsForm = () => {
  return (
    <div className="form">
      <div>
        <img className="form__icon"></img>
      </div>
      <div>
      <form>
        <label for="comments">JOIN THE CONVERSATION</label>
        <input
          type="text"
          id="comments"
          name="comments"
          placeholder="Add a new comment"
        ></input>
      </form>
      <button>
        COMMENT
      </button>
      </div>
    </div>
  );
};

export default CommentsForm;
