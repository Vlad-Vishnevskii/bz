import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IconArrow } from './assets/IconArrow';
import { Autoplay, Navigation } from 'swiper/modules';
import { TEAM_LIST } from './TeamSlider.constans';

import styles from './styles.module.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';

const SliderCard = ({ name, post, photo, description, isActive }) => {
  return (
    <div
      className={cn(styles.sliderCard, {
        [styles.sliderCard_active]: isActive,
      })}
    >
      <div className={styles.sliderCard_header}>
        <img className={styles.sliderCard_photo} src={photo} alt={name} />
        <div className={styles.sliderCard_headerText}>
          <div className={styles.sliderCard_name}>{name}</div>
          <div className={styles.sliderCard_post}>{post}</div>
        </div>
      </div>
      <div className={styles.sliderCard_description}>{description}</div>
    </div>
  );
};

export const TeamSlider = () => {
  const { t } = useTranslation();
  const [swiper, setSwiper] = useState({});

  return (
    <div className={styles.teamSlider}>
      <h2 className={styles.teamSlider_title}>
        {t('about.team_slider.title')}
      </h2>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={'auto'}
        slidesOffsetBefore={70}
        className={styles.teamSlider_swiper}
        loop={true}
        onInit={(ev) => {
          setSwiper(ev);
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          270: {
            slidesOffsetBefore: 0,
          },
          350: {
            slidesOffsetBefore: 20,
          },
          768: {
            slidesOffsetBefore: 50,
          },
        }}
      >
        {TEAM_LIST.map((item) => (
          <SwiperSlide key={item.id}>
            {({ isActive }) => <SliderCard {...item} isActive={isActive} />}
          </SwiperSlide>
        ))}
        <div className={styles.teamSlider_navigation}>
          <button
            className={styles.teamSlider_leftArrow}
            onClick={() => swiper.slidePrev()}
          >
            <IconArrow />
          </button>
          <button
            className={styles.teamSlider_rightArrow}
            onClick={() => swiper.slideNext()}
          >
            <IconArrow />
          </button>
        </div>
      </Swiper>
    </div>
  );
};
