import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import TypeWriter from 'react-typewriter';

import styles from './styles.module.scss';

const ruTitle = (
  <span>
    BISONIX -{' '}
    <b>
      НАДЕЖНАЯ
      <br /> ИТ-КОМПАНИЯ
    </b>
    , КОТОРАЯ ГОТОВА ВЫПОЛНИТЬ ЗАДАЧИ ЛЮБОЙ СЛОЖНОСТИ
  </span>
);

const enTitle = (
  <span>
    BISONIX -{' '}
    <b>
      en
      <br /> en
    </b>
    en
  </span>
);

export const SliderCard = ({ id, description, title }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const typeWriterString = language === 'ru' ? ruTitle : enTitle;

  return (
    <div className={styles.sliderCard}>
      <h2 className={styles.sliderCard_title}>
        {id === 1 ? (
          <TypeWriter typing={1}>{typeWriterString}</TypeWriter>
        ) : (
          <Trans i18nKey={title} components={{ br: <br />, b: <b /> }} />
        )}
      </h2>
      <p className={styles.sliderCard_description}>{t(description)}</p>
    </div>
  );
};
