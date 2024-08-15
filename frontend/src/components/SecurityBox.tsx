
import { FaUnlockKeyhole } from "react-icons/fa6";
function SecurityBox() {
  return (
    <div className="flex flex-col">
        <div className="flex gap-3"> 
            <FaUnlockKeyhole className="size-7"/>
            <p className="text-3xl font-bold">Privacy is our #1 concern</p>
        </div>
        <p>Even when carefully kept, paper journals can be read by anyone who happens upon them. Penzu keeps your journals safe with double password protection and military strength encryption so you can rest easy knowing that your entries are secure in the Penzu Vault.</p>
    </div>
  )
}

export default SecurityBox