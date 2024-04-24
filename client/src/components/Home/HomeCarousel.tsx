import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import {  Pagination, Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './styles.css'


import CardImage from "../../images/Ellipse4.png"

const HomeCarousel = () => {
  return (
    <div className="container">
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      spaceBetween={44}
      slidesPerView={1}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}


      modules={[ Pagination, Navigation]}
      className="md:h-[500px] "
    >


      <SwiperSlide className='flex p-2 md:h-[350px] items-center md:flex-row flex-col bg-white rounded-3xl  md:px-4 md:py-10 justify-center'>
         <div className='md:w-[30%] p-8'>
           <img className='' src={CardImage} alt="" />
         </div>


         <div className='md:w-[70%]'>
          <h3 className='text-3xl md:text-start text-center font-medium'>Hannah Schmitt</h3>

          <p className='mt-4 md:text-start text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse 
          </p>
         </div>
      </SwiperSlide>
      


      <SwiperSlide style={{ height: '350px' }}className='flex p-2 items-center md:flex-row flex-col bg-white rounded-3xl  md:px-4 md:py-10 justify-center'>
         <div className='md:w-[30%] p-8'>
           <img className='' src={CardImage} alt="" />
         </div>


         <div className='md:w-[70%]'>
          <h3 className='text-3xl md:text-start text-center font-medium'>Hannah Schmitt</h3>

          <p className='mt-4 md:text-start text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse 
          </p>
         </div>
      </SwiperSlide>

      <SwiperSlide style={{ height: '350px' }}className='flex p-2 items-center md:flex-row flex-col bg-white rounded-3xl  md:px-4 md:py-10 justify-center'>
         <div className='md:w-[30%] p-8'>
           <img className='' src={CardImage} alt="" />
         </div>


         <div className='md:w-[70%]'>
          <h3 className='text-3xl md:text-start text-center font-medium'>Hannah Schmitt</h3>

          <p className='mt-4 md:text-start text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse 
          </p>
         </div>
      </SwiperSlide>

      
     

      <div className="slider-controler md:mt-0 mt-10 ">
        <div className="swiper-button-prev slider-arrow">
           <FontAwesomeIcon className='text-gray-500 text-xl' icon={faAngleLeft}/>
        </div>
        <div className="swiper-button-next slider-arrow">
        <FontAwesomeIcon  className='text-gray-500 text-xl' icon={faAngleRight}/>          
        </div>
        <div className="swiper-pagination"></div>
      </div>

      
    </Swiper>
  </div>
  )
}

export default HomeCarousel