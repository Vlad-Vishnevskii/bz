import React from 'react';
import { TechnologyCard } from '../TechnologyCard';
import styles from './styles.module.scss';

export const TechnologyList = ({ title, listData }) => {
  return (
    <div className={styles.technologyList}>
      <h2 className={styles.technologyList_title}>{title}</h2>
      <ul className={styles.technologyList_list}>
        {listData.map((item) => (
          <li key={item.id}>
            <TechnologyCard name={item.name} path={item.src} />
          </li>
        ))}
      </ul>
    </div>
  );
};
