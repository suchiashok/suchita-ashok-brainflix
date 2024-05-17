import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";

function App() {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    getVideos();
  }, [videos]);

  if (!videos) {
    return <div className="loader">loading...</div>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home videos={videos} />} />
          <Route path="/video/:id" element={<Home videos={videos} />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </>
  );

  async function getVideos() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_LOCALHOST}/videos`
      );
      setVideos(response.data);
    } catch (error) {
      console.log("Error fetching the videos", error);
    }
  }
}

export default App;
