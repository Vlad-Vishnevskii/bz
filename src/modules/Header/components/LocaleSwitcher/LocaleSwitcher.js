import React, { useState, useRef } from 'react';
import cn from 'classnames';
import { LocaleIcon } from '../../../Icons';
import { useClickAway } from '../../../../hooks';
import { LOCALE_LIST } from './LocaleSwitcher.constans';

import styles from './styles.module.scss';

export const LocaleSwitcher = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(LOCALE_LIST[0].value);
  const dropdownRef = useRef(null);

  const dropdownHandler = () => {
    setDropdownOpen(true);
  };

  const optionClick = (e, value) => {
    e.stopPropagation();
    setActiveItem(value);
    setDropdownOpen(false);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const setMobileActiveItem = (value) => {
    setActiveItem(value);
  };

  useClickAway(dropdownRef, closeDropdown);

  return (
    <>
      <div
        onClick={dropdownHandler}
        className={styles.localeSwitcherDesktop}
        ref={dropdownRef}
      >
        <span>{activeItem}</span>
        <div
          className={cn(styles.localeSwitcherDesktop_icon, {
            [styles.localeSwitcherDesktop_icon_open]: dropdownOpen,
          })}
        >
          <LocaleIcon />
        </div>
        <div
          className={cn(styles.localeSwitcherDesktop_options, {
            [styles.localeSwitcherDesktop_options_open]: dropdownOpen,
          })}
        >
          {LOCALE_LIST.filter((item) => item.value !== activeItem).map(
            (item) => (
              <div
                key={item.id}
                onClick={(e) => optionClick(e, item.value)}
                className={styles.localeSwitcherDesktop_optionsItem}
              >
                {item.value}
              </div>
            )
          )}
        </div>
      </div>
      <div className={styles.localeSwitcherMobile}>
        {LOCALE_LIST.map((item) => (
          <button
            key={item.id}
            onClick={() => setMobileActiveItem(item.value)}
            className={cn(styles.localeSwitcherMobile_item, {
              [styles.localeSwitcherMobile_item_active]: activeItem === item.value,
            })}
            type='button'
          >
            {item.value}
          </button>
        ))}
      </div>
    </>
  );
};
