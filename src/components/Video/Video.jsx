import "./Video.scss";

const Video = ({ activeVideo }) => {
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
