import React from 'react';
import cn from 'classnames';
import logo from '../../assets/logo.svg';

import styles from './styles.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img
        className={styles.footer_logo}
        src={logo}
        alt='BISONIX'
        width={121}
        height={24}
      />
      <a className={styles.footer_contact} href='/'>info@bisonix.com</a>
      <a className={cn(styles.footer_contact, styles.footer_contactPhone )} href='/'>+48 571 053 900</a>
      <a className={cn(styles.footer_contact, styles.footer_contactPhone )} href='/'>+375 33 667 04 48</a>
      <p className={styles.footer_copyright}>Все права защищены, ООО БИЗОНИКС, 2023</p>

    </footer>
  );
};
