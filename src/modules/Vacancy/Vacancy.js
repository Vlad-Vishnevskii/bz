import React from 'react';
import { useTranslation } from 'react-i18next';
import { AccordionList } from './AccordionList';

import styles from './styles.module.scss';

export const Vacancy = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.vacancy}>
      <h1 className={styles.vacancy_title}>{t('vacancy.title')}</h1>
      <p className={styles.vacancy_description}>{t('vacancy.description')}</p>
      <AccordionList />
    </div>
  );
};
