import React, { useState } from 'react';
import cn from 'classnames';
import { HEADER_MENU_ITEMS } from './HeaderMenu.constans';
import { CloseIcon, BurgerIcon } from '../../../Icons';
import { LocaleSwitcher } from '../LocaleSwitcher';

import styles from './styles.module.scss';

export const HeaderMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const burgerMenuHanler = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    } else {
      setMobileMenuOpen(true);
    }
  };

  return (
    <>
      <nav className={cn(styles.menu, { [styles.menu_open]: mobileMenuOpen })}>
        <button onClick={burgerMenuHanler} className={styles.menu_closeBtn}>
          <CloseIcon />
        </button>
        <ul className={styles.menu_list}>
          {HEADER_MENU_ITEMS.map((item) => (
            <li className={styles.menu_item} key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
        <LocaleSwitcher />
        <button className={styles.menu_submitBtn} type='button'>
          Оставить заявку
        </button>
      </nav>
      <button
        onClick={burgerMenuHanler}
        className={styles.burgerBtn}
        type='button'
      >
        <BurgerIcon />
      </button>
    </>
  );
};
