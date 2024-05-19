import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Home.scss";
import Header from "../../components/Header/Header";
import MainVideo from "../../components/MainVideo/MainVideo";
import NextVideos from "../../components/NextVideos/NextVideos";
import Video from "../../components/Video/Video";

function Home({ videos }) {
  const { id } = useParams();
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    getSelectedVideo();
  }, [id]);

  if (!activeVideo) {
    return <div className="loader">loading...</div>;
  }

  return (
    <>
      <Header />
      <main className="mainBFlix">
        <Video activeVideo={activeVideo} />
        <section className="mainBFlix__flexComponents">
          <MainVideo
            activeVideo={activeVideo}
            setActiveVideo={setActiveVideo}
          />
          <NextVideos videos={videos} activeVideo={activeVideo} />
        </section>
      </main>
    </>
  );

  async function getSelectedVideo() {
    try {
      const videoId = id || videos[0].id;
      const apiURL = `${import.meta.env.VITE_LOCALHOST}/videos/${videoId}`;
      const { data } = await axios.get(apiURL);
      setActiveVideo(data);
      if (setActiveVideo) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    } catch (error) {
      console.log("Error displaying the selected video", error);
    }
  }
}

export default Home;
