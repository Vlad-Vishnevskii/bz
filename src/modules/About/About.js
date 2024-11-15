import React, { useEffect } from 'react';
import { useBoolean } from '../../hooks';
import { ModalOrder } from '../ModalOrder';
import { useTranslation, Trans } from 'react-i18next';
import { Statistic, CooperationModels, TeamSlider } from './components';

import styles from './styles.module.scss';

export const About = () => {
  const [modalIsOpen, setIsOpen] = useBoolean(false);
  const openModal = () => {
    setIsOpen.on();
    window.scrollTo(0, 0);
  };
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={styles.about}>
        <div className={styles.about_container}>
          <h1 className={styles.about_title}>
            {
              <Trans
                i18nKey={'about.title'}
                components={{ b: <b />, br: <br /> }}
              />
            }
          </h1>
          <p className={styles.about_description}>{t('about.description')}</p>
          <Statistic />
          <CooperationModels />
        </div>
        <TeamSlider />
        <div className={styles.about_container}>
          <p className={styles.about_descriptionBottom}>
            {t('about.description_bottom')}
          </p>
          <button
            className={styles.about_orderBtn}
            onClick={openModal}
            type="button"
          >
            {t('about.orderBtn')}
          </button>
        </div>
      </div>
      <ModalOrder
        type={'orderForm'}
        modalIsOpen={modalIsOpen}
        closeModal={setIsOpen.off}
      />
    </>
  );
};
