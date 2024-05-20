import React from 'react'

const Testimonial = () => {
  return (
   <section className="relative flex">
  <div className="min-h-screen bg-black md:w-3/4" />
  <div className="min-h-screen bg-blue-500 md:w-2/5" />
  <div className="flex flex-col justify-center w-full min-h-screen px-4 py-10 md:mx-2">
    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
      What our <span className="text-blue-500">customers</span> <br /> are saying
    </h1>
    <div className="grid w-full grid-cols-1 gap-8 mt-8 2xl:grid-cols-4 lg:mt-16 md:grid-cols-2 lg:grid-cols-3">
      <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
        <p className="leading-loose text-gray-500 dark:text-gray-400">
          “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea tempora dolores qui eius pariatur
          odit ad voluptas iste, cum accusantium beatae tempore quasi nesciunt distinctio. ”
        </p>
        <div className="flex items-center mt-6 -mx-2">
          <img className="object-cover mx-2 rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt />
          <div className="mx-2">
            <h1 className="font-semibold text-gray-800 dark:text-white">Robbert</h1>
            <span className="text-sm text-gray-500 dark:text-gray-400">CTO, Robert Consultency</span>
          </div>
        </div>
      </div>
      <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
        <p className="leading-loose text-gray-500 dark:text-gray-400">
          “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea tempora dolores qui eius pariatur
          odit ad voluptas iste, cum accusantium beatae tempore quasi nesciunt distinctio. ”
        </p>
        <div className="flex items-center mt-6 -mx-2">
          <img className="object-cover mx-2 rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" alt />
          <div className="mx-2">
            <h1 className="font-semibold text-gray-800 dark:text-white">Jeny Doe</h1>
            <span className="text-sm text-gray-500 dark:text-gray-400">CEO, Jeny Consultency</span>
          </div>
        </div>
      </div>
      <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800 md:hidden lg:block">
        <p className="leading-loose text-gray-500 dark:text-gray-400">
          “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea tempora dolores qui eius pariatur
          odit ad voluptas iste, cum accusantium beatae tempore quasi nesciunt distinctio. ”
        </p>
        <div className="flex items-center mt-6 -mx-2">
          <img className="object-cover mx-2 rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt />
          <div className="mx-2">
            <h1 className="font-semibold text-gray-800 dark:text-white">Mia Brown</h1>
            <span className="text-sm text-gray-500 dark:text-gray-400">Marketing Manager at Stech</span>
          </div>
        </div>
      </div>
      <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800 md:hidden 2xl:block">
        <p className="leading-loose text-gray-500 dark:text-gray-400">
          “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea tempora dolores qui eius pariatur
          odit ad voluptas iste, cum accusantium beatae tempore quasi nesciunt distinctio. ”
        </p>
        <div className="flex items-center mt-6 -mx-2">
          <img className="object-cover mx-2 rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt />
          <div className="mx-2">
            <h1 className="font-semibold text-gray-800 dark:text-white">Lead Designer</h1>
            <span className="text-sm text-gray-500 dark:text-gray-400">Developer at Stech</span>
          </div>
        </div>
      </div>
    </div>
    <div className="items-center hidden mt-12 md:flex">
      <button title="left arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button title="right arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</section>

  )
}

export default Testimonial