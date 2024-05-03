import "./VideoItem.scss";

const VideoItem = (props) => {
  const { id, title, channel, image, setActiveVideosId } = props;

  return (
    <div className="navItem" onClick={() => setActiveVideosId(id)}>
      <div className="navItem__imgEl">
        <img className="navItem__image" src={image} alt={title}></img>
      </div>
      <div className="navItem__nextVideosDetails">
        <h4 className="navItem__title">{title}</h4>
        <p className="navItem__channel">{channel}</p>
      </div>
    </div>
  );
};

export default VideoItem;
