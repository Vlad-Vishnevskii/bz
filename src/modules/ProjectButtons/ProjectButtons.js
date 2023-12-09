import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { IconArrow } from '../Icons/IconArrow';
import cn from 'classnames';

import styles from './styles.module.scss';

export const ProjectButtons = ({
  leftDisabled = false,
  rightDisabled = false,
  leftHref = '/',
  rightHref = '/',
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.projectButtons}>
      <Link
        to={leftHref}
        className={cn(styles.projectButtons_item, {
          [styles.projectButtons_item_disabled]: leftDisabled,
        })}
      >
        <div className={styles.projectButtons_iconLeft}>
          <IconArrow />
        </div>
        {t('projectButtons.left')}
      </Link>
      <Link
        to={rightHref}
        className={cn(styles.projectButtons_item, {
          [styles.projectButtons_item_disabled]: rightDisabled,
        })}
      >
        {t('projectButtons.right')}
        <div className={styles.projectButtons_iconRight}>
          <IconArrow />
        </div>
      </Link>
    </div>
  );
};
