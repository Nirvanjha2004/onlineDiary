import "../App.css";
import EditorComponent from "../components/Editor";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

function EditorPage() {
  const className1 = `journalbgred`;
  return (
    <div className={className1}>
      <SideBar />
      <Navbar />
      <div>
        <EditorComponent />
      </div>
    </div>
  );
}

export default EditorPage;
