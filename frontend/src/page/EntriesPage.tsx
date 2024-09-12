import { useContext } from "react";
import Entries from "../components/Entries"
import Navbar from "../components/Navbar"
import ThemeContext from "../context/ThemeContext";

function EntriesPage() {
  const {themeCon} = useContext(ThemeContext);
  const className1 = `journalbg${themeCon.theme}`; 
  return (
    <div className={className1}>
        <Navbar/>
        <Entries/>
    </div>
  )
}

export default EntriesPage