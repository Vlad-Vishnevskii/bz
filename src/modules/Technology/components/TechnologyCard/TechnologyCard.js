import React from 'react';

import styles from './styles.module.scss';

export const TechnologyCard = ({ name, path }) => {
  return (
    <div className={styles.technologyCard}>
      <div className={styles.technologyCard_imgFrame}>
        <img src={path} alt={name} />
      </div>
      <p className={styles.technologyCard_name}>{name}</p>
    </div>
  );
};
