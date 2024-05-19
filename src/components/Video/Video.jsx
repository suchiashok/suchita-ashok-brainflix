import "./Video.scss";


const Video = ({ activeVideo }) => {
  const posterUrl = `${import.meta.env.VITE_LOCALHOST}${activeVideo.image}`;
  return (
    <section className="video">
      <video
        className="video__videoEl"
        controls
        poster={posterUrl}
        src={activeVideo.video}
        type="video/mp4"
      ></video>
    </section>
  );
};

export default Video;
