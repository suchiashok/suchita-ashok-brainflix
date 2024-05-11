import { Link } from "react-router-dom";
import "./VideoItem.scss";

const VideoItem = (props) => {
  const { id, title, channel, image} = props;

  
  return (
    <Link to={`/video/${id}`}>
    <div className="navItem">
      <div className="navItem__imgEl">
        <img className="navItem__image" src={image} alt={title}></img>
      </div>
      <div className="navItem__nextVideosDetails">
        <h4 className="navItem__title">{title}</h4>
        <p className="navItem__channel">{channel}</p>
      </div>
    </div>
    </Link>
  );
};

export default VideoItem;
