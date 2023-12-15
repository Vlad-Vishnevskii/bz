import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { SliderCard } from './components/sliderCard';
import ellipseBg from '../../assets/ellipse-bg.png';
import { getSliderData } from './Main.helpers';

import styles from './styles.module.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';

export const Main = () => {
  const sliderData = getSliderData();
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.main_container}>
        <img
          className={styles.main_bg}
          src={ellipseBg}
          alt="bg"
          width={635}
          height={636}
        />
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={pagination}
        className={styles.swiper}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <SliderCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
