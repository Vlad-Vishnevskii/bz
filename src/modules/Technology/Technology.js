import React from 'react';
import { TechnologyList } from './components';
import { BACKEND_TECHNOLOGY, FRONTEND_TECHNOLOGY } from './Technology.constans';
import styles from './styles.module.scss';

export const Technology = () => {
  return (
    <div className={styles.technology}>
      <h1 className={styles.technology_title}>Технологии</h1>
      <p className={styles.technology_description}>
        Bisonix специализируется на разработке сложных и крупных проектов.
        Различные функциональные особенности разработанных нами порталов и
        сервисов требуют тщательного изучения в процессе подготовки, выбора и
        реализации на проекте. С одинаковым вниманием мы подходим как к
        front-end, так и к back-end разработке. Наши специалисты пользуются
        наиболее перспективными и передовыми стеками технологий.
      </p>
      <TechnologyList
        title='Back-end разработка'
        listData={BACKEND_TECHNOLOGY}
      />
      <TechnologyList
        title='Front-end разработка'
        listData={FRONTEND_TECHNOLOGY}
      />
    </div>
  );
};
