import "./MainVideo.scss";
import Comments from "../Comments/Comments"
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
      <div className="mainVideo__details">
        <h1 className="mainVideo__title">{activeVideo.title}</h1>
        <div className="mainVideo__stats">
          <div>
            <h4 className="mainVideo__channel">By {activeVideo.channel}</h4>
            <p className="mainVideo__date">{formatDate(activeVideo.timestamp)}</p>
          </div>
          <div className="mainVideo__viewsLikes">
            <div className="mainVideo__views">
              <img className="mainVideo__viewIcon"src="/src/assets/Icons/views.svg" alt="views-icons"></img>
              <p className="mainVideo__viewCount">{activeVideo.views}</p>
            </div>
            <div className="mainVideo__likes">
              <img className="mainVideo__likesIcon" src="/src/assets/Icons/likes.svg"></img>
              <p className="mainVideo__likesCount">{activeVideo.likes}</p>
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
      </div>
    </section>
  );
};
export default MainVideo;
