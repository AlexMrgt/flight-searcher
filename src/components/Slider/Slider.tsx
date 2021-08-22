import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
  Navigation
} from 'swiper/core';
import './Slider.css';

import Slid_1 from '../../images/slider/slid_1.jpg';
import Slid_2 from '../../images/slider/slid_2.jpg';
import Slid_3 from '../../images/slider/slid_3.jpg';
import Slid_4 from '../../images/slider/slid_4.jpg';
import Slid_5 from '../../images/slider/slid_5.jpg';
import Slid_6 from '../../images/slider/slid_6.jpg';

SwiperCore.use([Navigation]);

const Slider = () => {

  const images = [
    Slid_1,
    Slid_2,
    Slid_3,
    Slid_4,
    Slid_5,
    Slid_6
  ]

  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={12}
      className="image-swiper"
      navigation={true}
    >
      {images.map((image) => (
        <SwiperSlide key={image}>
          <img
          className='image-swiper__image'
          src={image}
          alt="фото в слайдере"
          />
          </SwiperSlide>
      ))}

    </Swiper>
  )
}

export default Slider;
