import "./UploadVideo.scss";

function UploadVideo() {
  return (
    <>
      <div className="upload">
        <h3 className="upload__title">Upload Video</h3>
        <form className="upload__form">
          <label className="upload__label">VIDEO THUMBNAIL</label>
          <img
            className="upload__image"
            src="/src/assets/Images/Upload-video-preview.jpg"
          ></img>
          <label className="upload__label">TITLE YOUR VIDEO</label>
          <input
            className="upload__input"
            type="text"
            id="title"
            name="title"
            placeholder="Add a title to your video"
          ></input>
          <label className="upload__label">
            ADD A VIDEO DESCRIPTION
            <input
              className="upload__input"
              type="text"
              id="description"
              name="description"
              placeholder="Add a description to your video"
            ></input>
          </label>
          <button className="header__buttonEl">
            <img
              className="upload__publishButton"
              src="/src/assets/Icons/publish.svg"
              alt="upload-icon"
            ></img>
            PUBLISH
          </button>
          <button className="upload__cancelButton">CANCEL</button>
        </form>
      </div>
    </>
  );
}
export default UploadVideo;
