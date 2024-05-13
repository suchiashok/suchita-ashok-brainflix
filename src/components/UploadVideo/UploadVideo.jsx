import { useNavigate } from "react-router-dom";
import "./UploadVideo.scss";

function UploadVideo() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    alert("Form Submitted");
    navigate("/");
  };

  return (
    <>
      <div className="upload">
        <h3 className="upload__title">Upload Video</h3>
        <form className="upload__form" onSubmit={handleSubmit}>
          <div className="upload__imageInputs">
            <div className="upload__imageDiv">
              <label className="upload__label">VIDEO THUMBNAIL</label>
              <img
                className="upload__image"
                src="/src/assets/Images/Upload-video-preview.jpg"
              ></img>
            </div>
            <div className="upload__inputsDiv">
              <label className="upload__label" htmlFor="title">
                TITLE YOUR VIDEO
              </label>
              <input
                className="upload__input1"
                type="text"
                id="title"
                name="title"
                placeholder="Add a title to your video"
              ></input>
              <label className="upload__label" htmlFor="description">
                ADD A VIDEO DESCRIPTION
              </label>
              <input
                className="upload__input2"
                type="text"
                id="description"
                name="description"
                placeholder="Add a description to your video"
              ></input>
            </div>
          </div>
          <div className="upload__buttonsDiv">
            <button className="upload__publishButton" type="submit">
              <img
                className="upload__publishIcon"
                src="/src/assets/Icons/publish.svg"
                alt="upload-icon"
              ></img>
              PUBLISH
            </button>
            <button className="upload__cancelButton">CANCEL</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default UploadVideo;
