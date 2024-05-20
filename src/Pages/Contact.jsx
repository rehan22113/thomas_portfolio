import React from 'react'
import ContactForm from '../Components/contactForm'
import Navbar from '../Components/layout/Navbar'
import Footer from '../Components/layout/Footer'

const Contact = () => {
  return (
    <>
  <Navbar/>
  <div className='bg-gradient-to-b to-[black] via-[#090909] from-[#131313] 2xl:py-2'>
 <section className="bg-gradient-to-b to-[black] via-[#090909] from-[#131313]">
  {/*?xml version="1.0" standalone="no"?*/}              
  <svg id="sw-js-blob-svg" className='md:block absolute z-10 hidden w-[24em] bottom-0 -left-[10rem]' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs><linearGradient id="sw-gradient" x1={0} x2={1} y1={1} y2={0}><stop id="stop1" stopColor="rgba(255, 222, 90, 1)" offset="0%" /><stop id="stop2" stopColor="rgba(251, 168, 31, 1)" offset="100%" /></linearGradient></defs><path fill="url(#sw-gradient)" d="M29.8,-18.2C35.5,-7.4,34.7,6.1,28.7,16.2C22.6,26.3,11.3,33.1,-0.6,33.4C-12.5,33.8,-25.1,27.8,-32.2,17C-39.3,6.3,-40.9,-9.1,-34.6,-20.3C-28.3,-31.4,-14.2,-38.3,-1,-37.7C12.1,-37.1,24.1,-29,29.8,-18.2Z" width="100%" height="100%" transform="translate(50 50)" style={{transition: 'all 0.3s ease 0s'}} strokeWidth={0} />            
         </svg>

         <svg id="sw-js-blob-svg" className='md:block z-10 absolute hidden lg:w-[20rem] w-[16em] top-40 right-[3rem] md:right-0' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient" x1={0} x2={1} y1={1} y2={0}><stop id="stop1" stopColor="rgba(255, 222, 90, 1)" offset="0%" /><stop id="stop2" stopColor="rgba(251, 168, 31, 1)" offset="100%" /></linearGradient></defs><path fill="url(#sw-gradient)" d="M24.2,-29.5C29.5,-24.5,30.6,-15,32.2,-5.7C33.9,3.7,36.3,13,33.1,19.6C29.9,26.2,21.1,30.2,12.6,32.2C4.1,34.2,-4.2,34.3,-11.8,31.8C-19.5,29.4,-26.4,24.3,-30.3,17.5C-34.2,10.7,-35.1,2.2,-34.6,-7.1C-34.1,-16.3,-32.3,-26.3,-26.3,-31.2C-20.3,-36.2,-10.1,-36.1,-0.3,-35.7C9.5,-35.3,19,-34.6,24.2,-29.5Z" width="100%" height="100%" transform="translate(50 50)" style={{transition: 'all 0.3s ease 0s'}} strokeWidth={0} /> 
                  
         </svg>
  <div className="container px-6 pt-12 mx-auto relative z-20">
    <div className="text-center ">
      <p className="font-medium text-[#ffde5a]">Contact us</p>
      <h1 className="mt-2 text-2xl font-semibold md:text-3xl text-white">We’d love to hear from you</h1>
      <p className="mt-3 text-white">Chat to our friendly team.</p>
    </div>
    {/* <img data-aos="fade-up"
     data-aos-duration="3000" className="object-cover w-full h-64 mt-10 rounded-lg lg:h-96" src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=100" alt /> */}
  </div>
</section>

    <ContactForm/>
    <Footer />
    </div>
    </>
  )
}

export default Contact