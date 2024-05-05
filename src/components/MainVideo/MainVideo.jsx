import "./MainVideo.scss";
import Comments from "../Comments/Comments";
import CommentsForm from "../CommentsForm/CommentsForm";
import videoDetails from "../../data/video-details.json";

function formatDate(timestamp) {
  const date = new Date(timestamp);
  const formattedDate = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;
  return formattedDate;
}

const MainVideo = ({ activeVideosId }) => {
  const activeVideo = videoDetails.find((video) => video.id === activeVideosId);

  return (
    <section className="mainVideo">
      <video
        className="mainVideo__video"
        controls
        poster={activeVideo.image}
        src={activeVideo.video}
        type="video/mp4"
      ></video>
      <h1 className="mainVideo__title">{activeVideo.title}</h1>
      <div className="mainVideo__stats">
        <div>
          <h4>{activeVideo.channel}</h4>
          <p>{formatDate(activeVideo.timestamp)}</p>
        </div>
        <div>
          <div className="mainVideo__views">
            <img src="/src/assets/Icons/views.svg" alt="views-icons"></img>
            <p>{activeVideo.views}</p>
          </div>
          <div className="mainVideo__likes">
            <img src="/src/assets/Icons/likes.svg"></img>
            <p>{activeVideo.likes}</p>
          </div>
        </div>
      </div>
      <div className="mainVideo__description">
        <p>{activeVideo.description}</p>
        <p className="mainVideo__commentLength">
          {activeVideo.comments.length} Comments
        </p>
      </div>
      <CommentsForm />
      <Comments comment={activeVideo.comments} formatDate={formatDate} />
    </section>
  );
};
export default MainVideo;
