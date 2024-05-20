import React from 'react'
import Navbar from '../Components/layout/Navbar'
import Footer from '../Components/layout/Footer'
import Service from '../Components/Service'
import Work from '../Components/Work'
import Cta from '../Components/Cta'
import { useLottie } from 'lottie-react'
import webhero from '../assets/animated-web-design.json'
import Network from '../Components/Network'
// import Testimonial from '../Components/Testimonial'
import './Home.css'
import {HomeVariable} from '../Constant'
import Who from '../Components/Who'

const Home = () => {
  const options = {
    animationData: webhero,
    loop: true
  };

  const { View } = useLottie(options);
  return (
    <>
    <Navbar/>
    {/* Hero Section */}
    <header className=" bg-gradient-to-b to-[black] via-[#090909] from-[#131313]">
  <div className="container w-[95%] px-6 py-16 mx-auto">
       
         {/*?xml version="1.0" standalone="no"?*/}              
         

         
    <div className="items-center md:flex">
      <div className="w-full md:w-1/2">
        <div className="md:max-w-xl">

        <h1 className="text-3xl font-extrabold md:text-left text-left whitespace-normal md:text-6xl z-20 relative" data-aos="fade-up" data-aos-duration="3000" id='heading'>
  <span className="text-transparent bg-gradient-to-br bg-clip-text from-[#ffde5a] via-[#ffde5a] to-[#bc9400]">
  Fashion Frontier Partners:  
  </span>
  <span className="text-transparent bg-gradient-to-tr bg-clip-text from-[#ffde5a] via-[#a97101] to-[#ffde5a] ml-2">
  Empowering Global Growth in Style
  </span>
</h1>
          <p className="mt-3 text-white text-lg" data-aos="fade-up" data-aos-duration="3000">Nurturing Fashion Stores Worldwide with Strategic Support and Investments</p>
          <div className='mt-6'>

          <a href='mailto:info@stralium.com' data-aos="fade-right" data-aos-duration="1000" className="w-full px-5 py-3 mt-10 text-sm tracking-wider text-slate-700 font-bold uppercase transition-colors duration-300 transform bg-[#ffde5a] rounded-lg lg:w-auto hover:bg-[#f9b700] focus:outline-none focus:bg-[#f9db65]">Contact us</a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-6 lg:mt-0 md:w-1/2" data-aos="fade-left" data-aos-anchor-placement="top-center">
      {View}
      </div>
    </div>
  </div>
</header>
    <Who />
    <Service />
    {/* <Work /> */}
    {/* <Testimonial/> */}
    {/* <Network/> */}
    <Cta/>
    <Footer/>
    </>
  )
}

export default Home