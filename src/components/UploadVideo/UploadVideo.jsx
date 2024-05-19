import { useNavigate } from "react-router-dom";
import "./UploadVideo.scss";
import { useState } from "react";
import axios from "axios";

function UploadVideo({activeVideo}) {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const videoData = {
        title: event.target.title.value,
        description: event.target.description.value,
      };
  
      const apiURL = `${import.meta.env.VITE_LOCALHOST}/videos`
      await axios.post(apiURL, videoData);
      alert("Video Uploaded");
      navigate("/");

      setSuccess(true);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.response.data);
    }
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
                alt="video-preview-image"
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
                required
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
                required
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
          {success}
          {errorMessage}
        </form>
      </div>
    </>
  );
}
export default UploadVideo;
