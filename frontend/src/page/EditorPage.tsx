
import '../App.css'
import EditorComponent from '../components/Editor';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';

function EditorPage() {
  return (
    <div className="journalbg">
      <SideBar/>
      <Navbar/>
      <div>
        <EditorComponent />
      </div>
    </div>
  );
}

export default EditorPage;