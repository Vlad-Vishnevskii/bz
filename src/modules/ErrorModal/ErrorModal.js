import React from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorIcon } from '../Icons';

import styles from './styles.module.scss';

export const ErrorModal = ({ onClose }) => {
  const { t } = useTranslation();

  const handleClose = () => {
    onClose();
  };

  return (
    <div className={styles.modalError}>
      <div className={styles.modalError_icon}>
        <ErrorIcon />
      </div>
      <h2 className={styles.modalError_title}>{t('modalError.title')}</h2>
      <p className={styles.modalError_description}>
        {t('modalError.description')}
      </p>
      <button
        className={styles.modalError_btn}
        onClick={handleClose}
        type="button"
      >
        {t('modalError.closeBtn')}
      </button>
    </div>
  );
};
