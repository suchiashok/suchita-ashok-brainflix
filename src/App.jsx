import Home from "./pages/Home/Home";
import UploadVideo from "./components/UploadVideo/UploadVideo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='upload' element={<UploadVideo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
