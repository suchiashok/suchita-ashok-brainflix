import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";

const BASE_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
const API_KEY = "98457a44-b052-41f0-a7e8-25093f568c3f";

function App() {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    getVideos();
  }, []);

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
      const response = await axios.get(`${BASE_URL}videos?api_key=${API_KEY}`);
      setVideos(response.data);
    } catch {
      console.log("Error fetching the videos");
    }
  }
}

export default App;
