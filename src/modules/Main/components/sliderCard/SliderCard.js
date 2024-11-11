import React, { useState } from 'react';
import cn from 'classnames';
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
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const typeWriterString = language === 'ru' ? ruTitle : enTitle;
  const onTypingFinished = () => {
    setDescriptionVisible(true);
  };

  return (
    <div className={styles.sliderCard}>
      {id === 1 ? (
        <>
          <h2 className={styles.sliderCard_title}>
            <TypeWriter typing={1} onTypingEnd={onTypingFinished}>
              {typeWriterString}
            </TypeWriter>
          </h2>
          <p
            className={cn(styles.sliderCard_description, {
              [styles.sliderCard_description_fade]: descriptionVisible,
            })}
          >
            {descriptionVisible && t(description)}
          </p>
        </>
      ) : (
        <>
          <h2 className={styles.sliderCard_title}>
            <Trans i18nKey={title} components={{ br: <br />, b: <b /> }} />
          </h2>
          <p className={styles.sliderCard_description}>{t(description)}</p>
        </>
      )}
    </div>
  );
};
