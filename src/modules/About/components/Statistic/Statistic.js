import React from 'react';
import cn from 'classnames';
import ellipseBg from '../../../../assets/ellipse-bg.png'
import { useTranslation, Trans } from 'react-i18next';

import styles from './styles.module.scss';

export const Statistic = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.statistic}>
      <div className={styles.statistic_left}>
        <div className={cn(styles.statistic_cell, styles.statistic_headerCell)}>
          <p className={styles.statistic_cellTitle}>
            {t('about.statistic.header_cell.title')}
          </p>
          <p className={styles.statistic_cellDescription}>
            {
              <Trans
                i18nKey={'about.statistic.header_cell.description'}
                components={{ br: <br /> }}
              />
            }
          </p>
        </div>
        <div>
          <p className={styles.statistic_cellTitle}>20+</p>
          <p className={styles.statistic_cellDescription}>
            {
              <Trans
                i18nKey={'about.statistic.left_cell.description'}
                components={{ br: <br /> }}
              />
            }
          </p>
        </div>
        <div>
          <p className={styles.statistic_cellTitle}>30+</p>
          <p className={styles.statistic_cellDescription}>
            {
              <Trans
                i18nKey={'about.statistic.right_cell.description'}
                components={{ br: <br /> }}
              />
            }
          </p>
        </div>
      </div>
      <div className={styles.statistic_right}>
        <img width={528} height={528} className={styles.statistic_bg} src={ellipseBg} alt="bg"/>
        <h2 className={styles.statistic_title}>
          {t('about.statistic.title')}
        </h2>
      </div>
    </div>
  );
};
