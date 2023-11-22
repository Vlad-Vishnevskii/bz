import React from 'react';
import cn from 'classnames';
import logo from '../../assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { checkFooterHidden } from './Footer.helpers';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';

export const Footer = () => {
  const { pathname } = useLocation();
  const isFooterHidden = checkFooterHidden(pathname);
  const { t } = useTranslation();

  if (isFooterHidden) {
    return null;
  }

  return (
    <footer className={styles.footer}>
      <Link className={styles.footer_toMainBtn} to='/'>
        <img
          className={styles.footer_logo}
          src={logo}
          alt='BISONIX'
          width={121}
          height={24}
        />
      </Link>

      <a className={styles.footer_contact} href='mailto:info@bisonix.com'>
        info@bisonix.com
      </a>
      <a
        className={cn(styles.footer_contact, styles.footer_contactPhone)}
        href='tel:+48571053900'
      >
        +48 571 053 900
      </a>
      <a
        className={cn(styles.footer_contact, styles.footer_contactPhone)}
        href='tel:+375336670448'
      >
        +375 33 667 04 48
      </a>
      <p className={styles.footer_copyright}>
        {t('contacts.copyright')}
      </p>
    </footer>
  );
};
