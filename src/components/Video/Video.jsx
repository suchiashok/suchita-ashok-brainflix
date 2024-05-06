import "./Video.scss";
import videoDetails from "../../data/video-details.json";

const Video = ({ activeVideosId }) => {
  const activeVideo = videoDetails.find((video) => video.id === activeVideosId);

  return (
    <section className="video">
      <video
        className="video__videoEl"
        controls
        poster={activeVideo.image}
        src={activeVideo.video}
        type="video/mp4"
      ></video>
    </section>
  );
};

export default Video;
