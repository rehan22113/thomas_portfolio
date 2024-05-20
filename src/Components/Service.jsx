import React,{useEffect,useRef,useState} from 'react'
import { HomeVariable } from '../Constant'
import { IoShirtSharp } from "react-icons/io5";
import { FaShopify } from "react-icons/fa";
import { GrWordpress } from "react-icons/gr";
import { HiSpeakerphone } from 'react-icons/hi';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';

const service = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      setScrollPosition(0);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
  return (
   <section id="service" className="bg-[black]">
  <div className="container lg:w-[80%] md:w-[100%] w-[95%] px-6 py-10 mx-auto">
    <div data-aos="fade-up" className="text-center">
      <h1 className="text-2xl font-semibold capitalize lg:text-3xl text-white">Operations Service</h1>
      <p className="max-w-2xl text-xl mx-auto mt-4 text-white">
      It’s not about limitations, but this is something about what we focus on.
      </p>
    </div>
    <div className='flex flex-col md:flex-row md:space-y-0 space-y-10 md:gap-10 justify-center py-10'>
    <div className="w-full md:w-1/2 md:mt-0 max-w-sm overflow-hidden rounded-lg shadow-lg bg-gray-800 transition-all" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-delay="500" data-aos-easing="ease-out">
      <div className="px-6 py-4 text-white">
      <IoShirtSharp color='white' size={52} />
        <h1 className="text-xl pt-2 font-semibold text-white">Fullfilment Services</h1>
        <p className="py-2 text-gray-400 text-md">Our online shop management service helps you run your e-commerce business smoothly. From inventory tracking to order fulfillment, we handle it all, so you can focus on growing your sales. With our expert assistance, you'll save time and effort while maximizing your online store's potential.</p>
        <div className="flex items-center mt-4 text-gray-200">
          <svg aria-label="suitcase icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 11H10V13H14V11Z" /><path fillRule="evenodd" clipRule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z" />
          </svg>
          <h1 className="px-2 text-sm">Customer Support</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-200">
          <svg aria-label="location pin icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z" /><path fillRule="evenodd" clipRule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z" />
          </svg>
          <h1 className="px-2 text-sm">Sourcing</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-200">
          <svg aria-label="email icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" />
          </svg>
          <h1 className="px-2 text-sm">Content</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-200">
          <svg aria-label="email icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" />
          </svg>
          <h1 className="px-2 text-sm">And some ideas from you</h1>
        </div>
       
      </div>
    </div>
    <div className="w-full md:w-1/2 md:mt-0 max-w-sm overflow-hidden rounded-lg shadow-lg bg-gray-800" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-delay="1500" data-aos-easing="ease-out">

      <div className="px-6 py-4 text-white">
      <MdOutlineMiscellaneousServices color='white' size={52} />

        <h1 className="text-xl pt-2 font-semibold text-white">Operation</h1>
        <p className="py-2 text-gray-400">Efficiently Navigate Every Aspect of Your Business with Expert Operations Support. Our Services Streamline Fulfillment, Enhance Customer Support, and Optimize Sourcing for Seamless Success.</p>
        <div className="flex items-center mt-4 text-gray-200">
          <svg aria-label="suitcase icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 11H10V13H14V11Z" /><path fillRule="evenodd" clipRule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z" />
          </svg>
          <h1 className="px-2 text-sm">Fullfilment Services
</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-200">
          <svg aria-label="location pin icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z" /><path fillRule="evenodd" clipRule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z" />
          </svg>
          <h1 className="px-2 text-sm">Customer Support</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-200">
          <svg aria-label="email icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" />
          </svg>
          <h1 className="px-2 text-sm">Sourcing</h1>
        </div>
       
        
      </div>
    </div>
    <div className="w-full md:w-1/2 md:mt-0 max-w-sm overflow-hidden rounded-lg shadow-lg bg-gray-800" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-delay="1000" data-aos-easing="ease-out">
     
      <div className="px-6 py-4 text-white">
      <HiSpeakerphone color='white' size={52} />

        <h1 className="text-xl pt-2 font-semibold text-white">Marketing</h1>
        <p className="py-2 text-gray-400">Drive Your Brand's Visibility and Reach New Heights with Our Diverse Marketing Solutions. From Strategic Social Media Advertising to Collaborative Influencer Campaigns, We Elevate Your Presence Across Google Ads and Fashion Blogs.</p>
        <div className="flex items-center mt-4 text-gray-200">
          <svg aria-label="suitcase icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 11H10V13H14V11Z" /><path fillRule="evenodd" clipRule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z" />
          </svg>
          <h1 className="px-2 text-sm">Social Media advertising</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-200">
          <svg aria-label="location pin icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z" /><path fillRule="evenodd" clipRule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z" />
          </svg>
          <h1 className="px-2 text-sm">Infuencer Marketing</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-200">
          <svg aria-label="email icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" />
          </svg>
          <h1 className="px-2 text-sm">Gooogle Ads   </h1>
               </div>
        <div className="flex items-center mt-4 text-gray-200">
          <svg aria-label="email icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" />
          </svg>
          <h1 className="px-2 text-sm">Fashion Blogs</h1>
        </div>
        
      </div>
    </div>
    
    </div>
  </div>
</section>

  )
}

export default service