import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';

export const CasinoProject = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.casinoProject}>
      <div className={styles.casinoProject_header}>
        <p className={styles.casinoProject_label}>Проект</p>
        <h1 className={styles.casinoProject_title}>Проект онлайн-казино</h1>
        <p className={styles.casinoProject_description}>
          Перед нашей командой была поставлена задача разработать платформу
          онлайн-казино, которая выдерживала бы высокий трафик и соответствовала
          всем международным стандартам онлайн-гемблинга. В результате работы мы
          получили программное обеспечение, которое включает в себя следующие
          модули:
        </p>
      </div>
    </div>
  );
};
