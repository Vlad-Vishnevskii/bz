import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { SliderCard } from './components/sliderCard';
import ellipseBg from './assets/ellipse-bg.png';
import { useSliderData } from './useSliderData';

import styles from './styles.module.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';

export const Main = () => {
  const sliderData = useSliderData();
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <main className={styles.main}>
      <div className={styles.main_container}>
        <img
          className={styles.main_bg}
          src={ellipseBg}
          alt='bg'
          width={635}
          height={636}
        />
      </div>
      <Swiper
      modules={[Pagination]}
      pagination={pagination}
      className={styles.swiper}     
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <SliderCard description={item.description}>{item.title}</SliderCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};
