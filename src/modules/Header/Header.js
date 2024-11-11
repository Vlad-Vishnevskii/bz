import React from 'react';
import cn from 'classnames';
import logo from '../../assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { HeaderMenu } from './components';
import { CASINO_BG_PAGE } from '../../AppContainer/AppContainer.constans';
import styles from './styles.module.scss';

export const Header = ({ setModalState, modalIsOpen, setIsOpen }) => {
  const { pathname } = useLocation();
  const isCasinoPage = pathname.includes(CASINO_BG_PAGE);

  return (
    <>
      <div className={styles.headerPadding} />
      <div
        className={cn(styles.headerWrapper, {
          [styles.headerWrapper_transparent]: isCasinoPage,
        })}
      >
        <header className={styles.header}>
          <Link className={styles.header_logo} to="/">
            <img src={logo} alt="BISONIX" />
          </Link>
          <HeaderMenu
            modalIsOpen={modalIsOpen}
            setIsOpen={setIsOpen}
            setModalState={setModalState}
          />
        </header>
      </div>
    </>
  );
};
