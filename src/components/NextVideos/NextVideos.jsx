import VideoItem from "../VideoItem/VideoItem";
import "./NextVideos.scss";

const NextVideos = ({ activeVideo, videos }) => {
  return (
    <section className="nextVideos">
      <h4 className="nextVideos__title">NEXT VIDEOS</h4>
      <nav className="nextVideos__nav">
        {videos
          .filter(video => video.id !== activeVideo.id)
          .map(video => (
            <VideoItem
              key={video.id}
              id={video.id}
              title={video.title}
              channel={video.channel}
              image={video.image}
            />
          ))}
      </nav>
    </section>
  );
};
export default NextVideos;
