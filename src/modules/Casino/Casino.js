import React, { useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import cn from 'classnames';
import { ProviderSlider } from './components/ProviderSlider/ProviderSlider';
import { ProjectButtons } from '../ProjectButtons';

import styles from './styles.module.scss';

export const Casino = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.casino}>
      <div className={styles.casino_header}>
        {/* <p className={styles.casino_label}>{t('casino.label')}</p> */}
        <h1 className={styles.casino_title}>{t('casino.title')}</h1>
        <p className={styles.casino_description}>{t('casino.description')}</p>
      </div>
      <div className={styles.casino_container}>
        <div className={cn(styles.casino_section, styles.casino_section_1)}>
          <img
            src="/images/casino/screen-1.png"
            alt="Управление казино-контентом"
          />
          <div className={styles.casino_textBlock}>
            <h3>{t('casino.screen1.title')}</h3>
            <article>
              <Trans
                i18nKey={'casino.screen1.description'}
                components={{ p: <p /> }}
              />
            </article>
          </div>
        </div>
      </div>
      <ProviderSlider />
      <div className={styles.casino_containerGrey}>
        <div className={cn(styles.casino_section, styles.casino_section_2)}>
          <img src="/images/casino/screen-2.png" alt="Ставки на спорт" />
          <div className={styles.casino_textBlock}>
            <h3>{t('casino.screen2.title')}</h3>
            <article>
              <Trans
                i18nKey={'casino.screen2.description'}
                components={{ p: <p /> }}
              />
            </article>
          </div>
        </div>
      </div>
      <div className={styles.casino_container}>
        <div className={cn(styles.casino_section, styles.casino_section_3)}>
          <img src="/images/casino/screen-3.png" alt="Финансовые операции" />
          <div className={styles.casino_textBlock}>
            <h3>{t('casino.screen3.title')}</h3>
            <article>
              <Trans
                i18nKey={'casino.screen3.description'}
                components={{ p: <p /> }}
              />
            </article>
          </div>
        </div>
      </div>
      <div className={styles.casino_containerGrey}>
        <div className={cn(styles.casino_section, styles.casino_section_4)}>
          <img
            src="/images/casino/screen-4.png"
            alt="Управление бонусными механиками"
          />
          <div className={styles.casino_textBlock}>
            <h3>{t('casino.screen4.title')}</h3>
            <article>
              <Trans
                i18nKey={'casino.screen4.description'}
                components={{ p: <p /> }}
              />
            </article>
          </div>
        </div>
      </div>
      <div
        className={cn(
          styles.casino_containerGrey,
          styles.casino_containerGrey_padding
        )}
      >
        <div className={cn(styles.casino_section, styles.casino_section_5)}>
          <img
            src="/images/casino/screen-5.png"
            alt="Управление бонусными механиками"
            width={532}
            height={282}
          />
          <div className={styles.casino_textBlock}>
            <h3>{t('casino.screen5.title')}</h3>
            <article>
              <Trans
                i18nKey={'casino.screen5.description'}
                components={{ p: <p /> }}
              />
            </article>
          </div>
        </div>
      </div>
      <div className={styles.casino_container}>
        <h3 className={styles.casino_bottomTitle}>
          {t('casino.bottom.title')}
        </h3>
        <p className={styles.casino_bottomDescription}>
          {t('casino.bottom.description')}
        </p>
        <div className={styles.casino_statistic}>
          <div className={styles.casino_statisticItem}>
            <div className={styles.casino_statisticHeader}>
              {t('casino.statistic1.title')}
            </div>
            <div className={styles.casino_statisticBottom}>
              <div className={styles.casino_statisticBullet} />
              <span className={styles.casino_statisticValue}>
                {t('casino.statistic1.value')}
              </span>
            </div>
          </div>
          <div className={styles.casino_statisticItem}>
            <div className={styles.casino_statisticHeader}>
              {t('casino.statistic2.title')}
            </div>
            <div className={styles.casino_statisticBottom}>
              <div className={styles.casino_statisticBullet} />
              <span className={styles.casino_statisticValue}>
                {t('casino.statistic2.value')}
              </span>
            </div>
          </div>
          <div className={styles.casino_statisticItem}>
            <div className={styles.casino_statisticHeader}>
              {t('casino.statistic3.title')}
            </div>
            <div className={styles.casino_statisticBottom}>
              <div className={styles.casino_statisticBullet} />
              <span className={styles.casino_statisticValue}>
                {t('casino.statistic3.value')}
              </span>
            </div>
          </div>
        </div>
        <ProjectButtons leftDisabled />
      </div>
    </div>
  );
};
