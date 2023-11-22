import React from 'react';
import { useTranslation } from 'react-i18next';
import { TechnologyList } from './components';
import { BACKEND_TECHNOLOGY, FRONTEND_TECHNOLOGY } from './Technology.constans';
import styles from './styles.module.scss';

export const Technology = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.technology}>
      <h1 className={styles.technology_title}>{t('technology.title')}</h1>
      <p className={styles.technology_description}>
        {t('technology.description')}
      </p>
      <TechnologyList
        title={t('technology.backendTitle')}
        listData={BACKEND_TECHNOLOGY}
      />
      <TechnologyList
        title={t('technology.frontendTitle')}
        listData={FRONTEND_TECHNOLOGY}
      />
    </div>
  );
};
