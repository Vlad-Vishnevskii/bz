import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PROJECT_CARD_TYPES } from './ProjectCard.constans';
import { IconArrow } from '../../../Icons/IconArrow';

import styles from './styles.module.scss';

export const ProjectCard = ({ type, title, imgPath, description, href }) => {
  const { t } = useTranslation();

  return (
    <li
      className={cn(styles.projectCard, {
        [styles.projectCard_long]: type === PROJECT_CARD_TYPES.long,
        [styles.projectCard_longReverse]:
          type === PROJECT_CARD_TYPES.longReverse,
      })}
    >
      <img src={imgPath} alt={title} />
      <div className={styles.projectCard_textContainer}>
        <p className={styles.projectCard_label}>{t('projects.title')}</p>
        <h3 className={styles.projectCard_title}>{t(title)}</h3>
        <p className={styles.projectCard_description}>{t(description)}</p>
        <Link className={styles.projectCard_link} to={href}>
          <span>{t('projects.more_btn')}</span>
          <IconArrow />
        </Link>
      </div>
    </li>
  );
};
