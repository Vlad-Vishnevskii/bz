import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { PROVIDER_DATA } from './ProviderSlider.constans';

import styles from './styles.module.scss';
import 'swiper/scss';

export const ProviderSlider = () => {
  return (
    <Swiper
      grabCursor={true}
      modules={[Autoplay]}
      spaceBetween={60}
      slidesPerView={'auto'}
      className={styles.providerSlider}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        1024: {
          spaceBetween: 60,
        },
        1919: {
          spaceBetween: 100,
        },
        2500: {
          spaceBetween: 150,
        },
      }}
    >
      {PROVIDER_DATA.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item.path} width={33} height={33} alt="provider" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
