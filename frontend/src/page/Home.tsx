
import Footer from '../components/Footer'
import {LandingPage} from '../components/LandingPage'
import Navbar from '../components/Navbar'
import SecurityBox from '../components/SecurityBox'
import Slider from '../components/Slider'
import Testimonial from '../components/Testimonial'


function Home() {
  return (
    <div className='h-full'>
        <Navbar/>
        <LandingPage/>
        <Slider/>
        <div className='m-16 ml-44 mr-36 bg-[#b0fefe] p-4 rounded-3xl'>
          <SecurityBox/>
        </div>
        <div>
          <Testimonial/>
        </div>
        <div className='mt-20'>
            <Footer/>
        </div>

    </div>
  )
}

export default Home