import { useSelector } from "react-redux";
import BelowNav from "../components/BelowNav";
import DiaryBox from "../components/DiaryBox";
import Navbar from "../components/Navbar";
import "../components/styles/Journal.css";
import { RootState } from "../app/store";

function Journals() {

  const theme = useSelector((state: RootState) => state.theme);
  console.log("The theme is:", theme.currentTheme);
  const className1 = `journalbg${theme.currentTheme}`;
  console.log(className1);
  return (
    <div className={className1}>
      <Navbar />
      <BelowNav />
      <DiaryBox />
    </div>
  );
}

export default Journals;
