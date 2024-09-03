import { LuPenSquare } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoSettings } from "react-icons/io5";
import { FaUnlock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function DiaryBox() {
  const navigate = useNavigate();
    return (
      <div className="bg-gray-500 border-l-[40px] border-gray-900 m-5 mr-[500px] ml-[400px] h-[500px] w-[500px] rounded-2xl flex items-center justify-center">
          <div className="bg-white rounded-lg p-2 flex flex-col items-center justify-center">
              <div className="font-bold border-b-2 border-gray-500 mb-2">
                  Nirvan's Journal
              </div>
              <div className="flex space-x-10 items-center">
                <div className="flex bg-blue-100 pl-1 rounded-lg">
                    <LuPenSquare className="size-7 mt-1"/>
                  <button onClick={()=>
                    navigate('/')
                  } className=" px-2 py-2 rounded">New Entry</button>
                </div>
                  <div>
                    <TfiMenuAlt className="size-7"/>
                  </div>
                  <div>
                    <IoSettings className="size-7"/>
                  </div>
                  <div><FaUnlock className="size-7"/></div>
              </div>
          </div>
      </div>
    )
  }
  
  export default DiaryBox
  