import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './network.css';

// import required modules
import { Pagination,Autoplay } from 'swiper/modules';

export default function Network() {
  return (
    <div id="network" className='bg-black flex items-center justify-center'>
    <div className="container w-[90%] md:w-[80%] ">
      <Swiper
        breakpoints={{
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            //spaceBetween: 40,
          },
          // when window width is >= 640px
          768: {
            slidesPerView: 3,
            //spaceBetween: 100,
          },
          992: {
            slidesPerView: 6,
            // spaceBetween: 40,
          },
        }}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 800,
          reverseDirection: false,
        }}
        loop={true}
        reverseDirection={true}
        modules={[Autoplay]}
        className="mySwiper rectangle"
      >
      {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map((item)=>{
        return (
        <SwiperSlide>
          <img src={`/brand/${item}.png`} className=' md:w-28 w-full md:aspect-[2/1]' />
        </SwiperSlide>
        )
      })}
        
      </Swiper>
      </div>
    </div>
  );
}
