import Navbar from '../components/Navbar'
import Profile from '../components/Profile'

function ProfilePage() {
  return (
    <div className='journalbg'>
        <Navbar/>
        <div className='mt-20'>
            <Profile/>
        </div>
    </div>
  )
}

export default ProfilePage