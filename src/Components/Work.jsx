import React from 'react'
import { HomeVariable } from '../Constant'

const Work = () => {
  return (
   <section id="work" className="bg-black">
  <div className="container md:w-[80%] w-[90%] px-6 py-16 mx-auto" >
   <div data-aos="fade-up" data-aos-delay="500" data-aos-easing="ease-out" >
    <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl text-white">{HomeVariable.portfolio.title}
    </h1>
    <p className="lg:w-2/3 mx-auto text-white text-center leading-relaxed text-xl">
      {HomeVariable.portfolio.subtitle}
    </p>
    </div>
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
      <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80")'}} data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-delay="1000" data-aos-easing="ease-out">
        <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
          <h2 className="mt-4 text-xl font-semibold text-white capitalize">Best website collections</h2>
          <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Website</p>
        </div>
      </div>
      <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80")'}} data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-delay="1500" data-aos-easing="ease-out">
        <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
          <h2 className="mt-4 text-xl font-semibold text-white capitalize">Block of Ui kit collections</h2>
          <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Ui kit</p>
        </div>
      </div>
      <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")'}} data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-delay="2000" data-aos-easing="ease-out">
        <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
          <h2 className="mt-4 text-xl font-semibold text-white capitalize">Ton’s of mobile mockup</h2>
          <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Mockups</p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Work