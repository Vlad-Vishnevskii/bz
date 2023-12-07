import React from 'react';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';
import { LIGHT_GREY_BG_PAGES, CASINO_BG_PAGE } from './AppContainer.constans';
import { checkRout } from './AppContainer.helpers';

import styles from './styles.module.scss';

export const AppContainer = ({ children }) => {
  const { pathname } = useLocation();
  const isLightGreyBg = checkRout(LIGHT_GREY_BG_PAGES, pathname);

  return (
    <div
      className={cn(styles.appContainer, {
        [styles.appContainer_grey]: isLightGreyBg,
        [styles.appContainer_casino]: pathname.includes(CASINO_BG_PAGE),
      })}
    >
      {children}
    </div>
  );
};
