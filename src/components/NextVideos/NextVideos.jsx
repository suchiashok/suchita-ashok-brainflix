import VideoItem from "../VideoItem/VideoItem";
import "./NextVideos.scss";

const NextVideos = ({ activeVideosId, videos, setActiveVideosId }) => {
  return (
    <section className="nextVideos">
      <nav className="nextVideos__nav">
        {videos
          .filter((videos) => videos.id !== activeVideosId)
          .map((videos) => (
            <VideoItem
              key={videos.id}
              id={videos.id}
              title={videos.title}
              channel={videos.channel}
              image={videos.image}
              setActiveVideosId={setActiveVideosId}
            />
          ))}
      </nav>
    </section>
  );
};
export default NextVideos;
