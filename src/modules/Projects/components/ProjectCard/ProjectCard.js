import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PROJECT_CARD_TYPES } from './ProjectCard.constans';
import { IconArrow } from '../../../Icons/IconArrow';

import styles from './styles.module.scss';

export const ProjectCard = ({
  type,
  title,
  imgPath,
  logo = '',
  description,
  href,
  width = '',
  height = '',
  isPngLogo = false,
}) => {
  const { t } = useTranslation();

  return (
    <li
      className={cn(styles.projectCard, {
        [styles.projectCard_long]: type === PROJECT_CARD_TYPES.long,
        [styles.projectCard_longReverse]:
          type === PROJECT_CARD_TYPES.longReverse,
      })}
    >
      <div className={styles.projectCard_bg}>
        <img className={styles.projectCard_imgBg} src={imgPath} />
        {logo && (
          <img
            src={logo}
            width={width}
            height={height}
            className={styles.projectCard_imgLogo}
          />
        )}
      </div>
      <div className={styles.projectCard_textContainer}>
        <h3 className={styles.projectCard_title}>
          <Link to={href}>{t(title)}</Link>
        </h3>
        <p className={styles.projectCard_description}>{t(description)}</p>
        <Link className={styles.projectCard_link} to={href}>
          <span>{t('projects.more_btn')}</span>
          <IconArrow />
        </Link>
      </div>
    </li>
  );
};
