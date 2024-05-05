import "./App.scss";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import NextVideos from "./components/NextVideos/NextVideos";
import { useState } from "react";
import videos from "./data/videos.json";

function App() {
  const [activeVideosId, setActiveVideosId] = useState(videos[0].id);
  return (
    <>
      <Header />
      <main className="mainBFlix">
        <MainVideo activeVideosId={activeVideosId}/>
        <NextVideos
          videos={videos}
          activeVideosId={activeVideosId}
          setActiveVideosId={setActiveVideosId}
        />
      </main>
    </>
  );
}

export default App;
