import React from 'react'

const Cta = () => {
  return (
   <section className="bg-black lg:py-12 lg:flex lg:justify-center">
  <div className="overflow-hidden bg-gray-800 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl" data-aos="flip-down">
  <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 class="max-w-2xl mx-auto text-2xl font-semibold tracking-tight xl:text-3xl text-white">
        Elevate Your Business  <span class="text-[#ffde5a]">Beyond Boundaries.
            </span>
        </h2>

        <p class="max-w-4xl mt-6 text-lg text-center text-white">
        Unleash the potential of your fashion store with our expert guidance and strategic investments. Together, let's create a path to unprecedented growth and success in the global fashion market.
        </p>

        <div class="flex w-full mt-6 sm:w-auto gap-2">
        <input type="email" id="email" name="email" className="w-[70%] lg:w-2/3 bg-gray-100 bg-opacity-50 rounded border border-[#ffde5a] focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-[#f9dd6f] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='example@gmail.com' />

            <a href="mailto:info@info@stralium.com" class="text-sm md:text-sm inline-flex items-center justify-center w-[30%] lg:w-1/3 px-4 py-2 text-black font-bold duration-300 bg-[#ffde5a] rounded-lg hover:bg-[#ffb302] focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Subscribe
            </a>
        </div>
    </div>
  </div>
</section>

  )
}

export default Cta