import React from 'react';
import { useTranslation } from 'react-i18next';
import { COOPERATION_MODELS_LIST } from './CooperationModels.constans';

import styles from './styles.module.scss';

export const CooperationModels = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.cooperationModels}>
      <h2 className={styles.cooperationModels_title}>
        {t('about.cooperationModels.title')}
      </h2>
      <ul className={styles.cooperationModels_list}>
        {COOPERATION_MODELS_LIST.map((item) => (
          <li className={styles.cooperationModels_item}>
            <img src={item.img} />
            <span>{t(item.name)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
