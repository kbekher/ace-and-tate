import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';

import './Customers.scss';

// import required modules
import { Navigation } from 'swiper/modules';

export const CustomSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        breakpoints={{
          744: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        navigation={true}

        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./assets/design/people1.webp" alt="customer" className="swiper-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/design/people2.webp" alt="customer" className="swiper-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/design/people3.webp" alt="customer" className="swiper-image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
