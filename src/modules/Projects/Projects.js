import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectCard } from './components';
import { PROJECTS_LIST } from './Projects.constans';

import styles from './styles.module.scss';

export const Projects = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.projects}>
      <h1 className={styles.projects_title}>{t('projects.title')}</h1>
      {/* <p className={styles.projects_description}>{t('projects.description')}</p> */}
      <ul className={styles.projects_list}>
        {PROJECTS_LIST.map((item) => (
          <ProjectCard key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};
