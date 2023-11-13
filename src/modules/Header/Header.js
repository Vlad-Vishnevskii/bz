import React from 'react';
import logo from '../../assets/logo.svg';
import { HeaderMenu } from './components';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.header_logo}
        src={logo}
        alt='BISONIX'
        width={121}
        height={24}
      />
      <HeaderMenu />
    </header>
  );
};
