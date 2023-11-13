import React from 'react';

import styles from './styles.module.scss';

export const SliderCard = ({ description, children }) => {
  return (
    <div className={styles.sliderCard}>
      <h2 className={styles.sliderCard_title}>{children}</h2>
      <p className={styles.sliderCard_description}>{description}</p>
    </div>
  );
};
