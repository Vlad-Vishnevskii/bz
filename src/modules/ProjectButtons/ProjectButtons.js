import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IconArrow } from '../Icons/IconArrow';
import cn from 'classnames';
import { PROJECTS_LIST } from '../Projects/Projects.constans';
import { getHrefForButtons } from './ProjectButtons.helpers';

import styles from './styles.module.scss';

export const ProjectButtons = ({
  leftDisabled = false,
  rightDisabled = false,
  leftHref = '/',
  rightHref = '/',
}) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const currentProjectIndex = PROJECTS_LIST.findIndex(
    (item) => item.href === pathname
  );
  const { prevHref, nextHref } = getHrefForButtons(
    currentProjectIndex,
    PROJECTS_LIST
  );

  return (
    <div className={styles.projectButtons}>
      <Link
        to={prevHref}
        className={cn(styles.projectButtons_item, {
          [styles.projectButtons_item_disabled]: !prevHref,
        })}
      >
        <div className={styles.projectButtons_iconLeft}>
          <IconArrow />
        </div>
        <span>{t('projectButtons.left')}</span>
      </Link>
      <Link
        to={nextHref}
        className={cn(styles.projectButtons_item, {
          [styles.projectButtons_item_disabled]: !nextHref,
        })}
      >
        <span>{t('projectButtons.right')}</span>
        <div className={styles.projectButtons_iconRight}>
          <IconArrow />
        </div>
      </Link>
    </div>
  );
};
