import React from 'react'
import { HomeVariable } from '../Constant'

const Who = () => {
  return (
    <section id='milestone' className="text-white body-font bg-gradient-to-b via-[#090909] from-[black] to-[black] ">
  <div className="container md:w-[80%] w-[90%] px-5 py-16 mx-auto" data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
         

    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Who We Are?</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      We are a Switzerland and UAE (Dubai) based E Commerce Venture. We own and operate fashion stors globally. We help them grow and expand. In most of them we also own stakes in them.
      </p>
    </div>
    <div className="flex justify-center flex-wrap -m-4 text-center">
      <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-delay="500" data-aos-easing="ease-out" className="p-4 md:w-1/3 lg:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 min-h-[170px] px-4 py-6 rounded-lg">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-[#ffde5a] w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx={9} cy={7} r={4} />
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
          </svg>
          {/* <h2 className="title-font font-extrabold text-3xl text-white">{HomeVariable.milestone.follower}</h2> */}
          <p className="leading-relaxed">Global Fashion Network</p>
        </div>
      </div>
      <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-delay="1000" data-aos-easing="ease-out" className="p-4 md:w-1/3 lg:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 min-h-[160px] px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-[#ffde5a] w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6" />
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
          </svg>
          {/* <h2 className="title-font font-extrabold text-3xl text-white">{HomeVariable.milestone.impression}</h2> */}
          <p className="leading-relaxed">Partnerships with 6 Fashion Brands</p>
        </div>
      </div>
      <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-delay="1500" data-aos-easing="ease-out" className="p-4 md:w-1/3 lg:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 min-h-[160px] border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-[#ffde5a] w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          {/* <h2 className="title-font font-extrabold text-3xl text-white">{HomeVariable.milestone.influncers}</h2> */}
          <p className="leading-relaxed">E-commerce Clothing Store Expertise</p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Who;