/* eslint-disable react/prop-types */
import "./MainVideo.scss";
import Comments from "../Comments/comments";
import CommentsForm from "../CommentsForm/CommentsForm";

function formatDate(timestamp) {
  const date = new Date(timestamp);
  const formattedDate = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;
  return formattedDate;
}

const MainVideo = ({ activeVideo }) => {
 
  const {title, channel, timestamp, views, likes, description, comments} = activeVideo;

  return (
    <section className="mainVideo">
      <div className="mainVideo__details">
        <h1 className="mainVideo__title">{title}</h1>
        <div className="mainVideo__stats">
          <div className="mainVideo__channelDate">
            <h4 className="mainVideo__channel">By {channel}</h4>
            <p className="mainVideo__date">
              {formatDate(timestamp)}
            </p>
          </div>
          <div className="mainVideo__viewsLikes">
            <div className="mainVideo__views">
              <img
                className="mainVideo__viewIcon"
                src="/src/assets/Icons/views.svg"
                alt="views-icons"
              ></img>
              <p className="mainVideo__viewCount">{views}</p>
            </div>
            <div className="mainVideo__likes">
              <img
                className="mainVideo__likesIcon"
                src="/src/assets/Icons/likes.svg"
              ></img>
              <p className="mainVideo__likesCount">{likes}</p>
            </div>
          </div>
        </div>
        <div className="mainVideo__description">
          <p>{description}</p>
          <p className="mainVideo__commentLength">
            {comments.length} Comments
          </p>
        </div>
        <CommentsForm />
        <Comments comment={comments} formatDate={formatDate} />
      </div>
    </section>
  );
};
export default MainVideo;
