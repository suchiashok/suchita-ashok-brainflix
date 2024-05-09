import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home/Home";
import UploadVideo from "./components/UploadVideo/UploadVideo";

const BASE_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
const API_KEY = "98457a44-b052-41f0-a7e8-25093f568c3f";

function App() {
  const [ids, setIds] = useState(null);

  useEffect(() => {
    getVideos();
  }, []);

  if (!ids) {
    return <div className="loader">loading...</div>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home ids={ids} />} />
          <Route path="/videos/:id" element={<Home id={ids} />} />
          <Route path="upload" element={<UploadVideo />} />
        </Routes>
      </BrowserRouter>
    </>
  );

  async function getVideos() {
    try {
      const response = await axios.get(`${BASE_URL}videos?api_key=${API_KEY}`);
      setIds(response.data.id);
    } catch {
      console.log("Error fetching the videos");
    }
  }
}

export default App;
