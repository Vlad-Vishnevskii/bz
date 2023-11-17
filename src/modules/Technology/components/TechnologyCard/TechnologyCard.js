import React from 'react';

import styles from './styles.module.scss';

export const TechnologyCard = ({ name, path }) => {
  return (
    <div className={styles.technologyCard}>
      <img src={path} alt={name} width={244} height={244}/>
      <p className={styles.technologyCard_name}>
        {name}
      </p>    
    </div>
  );
};
