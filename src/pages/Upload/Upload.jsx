import "./Upload.scss";
import UploadVideo from "../../components/UploadVideo/UploadVideo";
import Header from "../../components/Header/Header";

function Upload({ videos }) {
  return (
    <>
      <Header />
      <UploadVideo />
    </>
  );
}

export default Upload;
