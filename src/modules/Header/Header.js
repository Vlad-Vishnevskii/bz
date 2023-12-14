import React, { useState } from 'react';
//import cn from 'classnames';
import logo from '../../assets/logo.svg';
import whiteLogo from '../../assets/white-logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { HeaderMenu } from './components';
import { CASINO_BG_PAGE } from '../../AppContainer/AppContainer.constans';
import { useBoolean } from '../../hooks';
import styles from './styles.module.scss';

export const Header = () => {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useBoolean(false);
  const isCasinoPage = pathname.includes(CASINO_BG_PAGE);
  const currentLogo = isCasinoPage ? whiteLogo : logo;
  const [style, setStyle] = useState({ backdropFilter: 'blur(5px)' });

  return (
    <>
      <div className={styles.headerPadding} />
      <div className={styles.headerWrapper} style={style}>
        <header className={styles.header}>
          <Link to="/">
            <img
              className={styles.header_logo}
              src={currentLogo}
              alt="BISONIX"
            />
          </Link>
          <HeaderMenu
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            isWhite={isCasinoPage}
            setStyle={setStyle}
          />
        </header>
      </div>
    </>
  );
};
