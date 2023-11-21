import React from 'react';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';
import { LIGHT_GREY_BG_PAGES } from './AppContainer.constans';
import { checkRout } from './AppContainer.helpers';

import styles from './styles.module.scss';

export const AppContainer = ({ children }) => {
  const { pathname } = useLocation();
  const isLightGreyBg = checkRout(LIGHT_GREY_BG_PAGES, pathname);

  return (
    <div
      className={cn(styles.appContainer, {
        [styles.appContainer_grey]: isLightGreyBg,
      })}
    >
      {children}
    </div>
  );
};
