import "./VideoItem.scss";

const VideoItem = (props) => {
  const { id, title, channel, image, setActiveVideosId } = props;

  return (
    <div className="nextVideos-item" onClick={() => setActiveVideosId(id)}>
      <div className="nextVideos__imgEl">
        <img className="nextVideos__image" src={image} alt={title}></img>
      </div>
      <div className="nextVideos__nextVideosDetails">
        <h4 className="nextVideos__title">{title}</h4>
        <p className="nextVideos__channel">{channel}</p>
      </div>
    </div>
  );
};

export default VideoItem;
