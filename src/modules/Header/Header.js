import React from 'react';
import logo from '../../assets/logo.svg';
import whiteLogo from '../../assets/white-logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { HeaderMenu } from './components';
import { CASINO_BG_PAGE } from '../../AppContainer/AppContainer.constans';
import styles from './styles.module.scss';

export const Header = () => {
  const { pathname } = useLocation();
  const isCasinoPage = pathname.includes(CASINO_BG_PAGE);
  const currentLogo = isCasinoPage ? whiteLogo : logo;

  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.header_logo} src={currentLogo} alt="BISONIX" />
      </Link>
      <HeaderMenu isWhite={isCasinoPage} />
    </header>
  );
};
