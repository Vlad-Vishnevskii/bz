import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import styles from './styles.module.scss';

export const SliderCard = ({ description, title }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.sliderCard}>
      <h2 className={styles.sliderCard_title}>
      <Trans i18nKey={title} components={{ br: <br />, b: <b/> }} />
      </h2>
      <p className={styles.sliderCard_description}>{t(description)}</p>
    </div>
  );
};
