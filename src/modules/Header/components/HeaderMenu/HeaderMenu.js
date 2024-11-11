import React from 'react';
import cn from 'classnames';
import { HEADER_MENU_ITEMS } from './HeaderMenu.constans';
import { CloseIcon, BurgerIcon } from '../../../Icons';
import { LocaleSwitcher } from '../LocaleSwitcher';
import { Link } from 'react-router-dom';
import { ModalOrder } from '../../../ModalOrder';
import { useBoolean } from '../../../../hooks';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';

export const HeaderMenu = ({
  isWhite,
  setModalState,
  modalIsOpen,
  setIsOpen,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useBoolean(false);
  const { t } = useTranslation();
  const openModal = () => {
    setIsOpen.on();
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav
        className={cn(
          styles.menu,
          { [styles.menu_open]: mobileMenuOpen },
          { [styles.menu_isWhite]: isWhite }
        )}
      >
        <button
          onClick={setMobileMenuOpen.off}
          className={styles.menu_closeBtn}
        >
          <CloseIcon />
        </button>
        <ul className={styles.menu_list}>
          {HEADER_MENU_ITEMS.map((item) => (
            <li className={styles.menu_item} key={item.id}>
              <Link onClick={setMobileMenuOpen.off} to={item?.href}>
                {t(item.name)}
              </Link>
            </li>
          ))}
        </ul>
        <LocaleSwitcher />
        <button
          onClick={openModal}
          className={styles.menu_submitBtn}
          type="button"
        >
          {t('header.orderBtn')}
        </button>
      </nav>
      <button
        onClick={setMobileMenuOpen.on}
        className={cn(styles.burgerBtn, { [styles.burgerBtn_white]: isWhite })}
        type="button"
      >
        <BurgerIcon />
      </button>
      <ModalOrder
        type={'orderForm'}
        modalIsOpen={modalIsOpen}
        closeModal={setIsOpen.off}
        setModalState={setModalState}
      />
    </>
  );
};
