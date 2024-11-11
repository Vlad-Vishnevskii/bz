import React from 'react';
import { useTranslation } from 'react-i18next';
import { IconSucces } from '../Icons';

import styles from './styles.module.scss';

export const ModalSucces = ({ onClose }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.modalSucces}>
      <div className={styles.modalSucces_icon}>
        <IconSucces />
      </div>
      <h2 className={styles.modalSucces_title}>{t('modalSucces.title')}</h2>
      <p className={styles.modalSucces_description}>
        {t('modalSucces.description')}
      </p>
      <button
        className={styles.modalSucces_btn}
        onClick={onClose}
        type="button"
      >
        {t('modalSucces.closeBtn')}
      </button>
    </div>
  );
};
