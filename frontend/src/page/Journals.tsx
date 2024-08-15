import BelowNav from "../components/BelowNav"
import DiaryBox from "../components/DiaryBox"
import Navbar from "../components/Navbar"
import '../components/styles/Journal.css'


function Journals() {
  return (
    <div className="journalbg">
        <Navbar/>
        <BelowNav/>
        <DiaryBox/>
    </div>
  )
}

export default Journals