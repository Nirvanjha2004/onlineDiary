import { useContext } from 'react';
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import ThemeContext from '../context/ThemeContext';

function ProfilePage() {
  const {themeCon} = useContext(ThemeContext);
  const className1 = `journalbg${themeCon.theme}`; 
  return (
    <div className={className1}>
        <Navbar/>
        <div className='mt-20'>
            <Profile/>
        </div>
    </div>
  )
}

export default ProfilePage