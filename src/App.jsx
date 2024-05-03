import './App.scss'
import Header from './components/Header/Header'
import NextVideos from './components/NextVideos/NextVideos'
import { useState } from "react";
import videos from "./data/videos.json"


function App() {
  const [activeVideosId, setActiveVideosId] = useState(videos[0].id);
  return (
    <>
      <Header />
      <main className="mainBFlix">
        <NextVideos
          videos={videos}
          activeVideosId={activeVideosId}
          setActiveVideosId={setActiveVideosId} />
      </main>
    </>
  )
}

export default App
