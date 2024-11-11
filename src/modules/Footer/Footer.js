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
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <Link className={styles.footer_toMainBtn} to="/">
          <img
            className={styles.footer_logo}
            src={logo}
            alt="BISONIX"
            width={121}
            height={24}
          />
        </Link>

        <a className={styles.footer_contact} href="mailto:info@bisonix.com">
          info@bisonix.com
        </a>
        <a
          className={cn(styles.footer_contact, styles.footer_contactPhone)}
          href="tel:+375339900990"
        >
         +375 33 990 09 90
        </a>
        <a
          className={cn(styles.footer_contact, styles.footer_contactPhone)}
          href="tel:+79203364985"
        >
          +7 920 336 49 85
        </a>
        <p className={styles.footer_copyright}>{t('contacts.copyright')}</p>
      </footer>
    </div>
  );
};
