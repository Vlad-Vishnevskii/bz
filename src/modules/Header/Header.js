import React from 'react';
import cn from 'classnames';
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
    <>
      <div className={styles.headerPadding} />
      <div
        className={cn(styles.headerWrapper, {
          [styles.headerWrapper_transparent]: isCasinoPage,
        })}
      >
        <header className={styles.header}>
          <Link to="/">
            <img
              className={styles.header_logo}
              src={logo} // вернуть currentLogo
              alt="BISONIX"
            />
          </Link>
          <HeaderMenu
          //isWhite={isCasinoPage}
          />
        </header>
      </div>
    </>
  );
};
