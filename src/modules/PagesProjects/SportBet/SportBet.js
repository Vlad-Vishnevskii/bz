import React from 'react';
import IframeResizer from 'iframe-resizer-react';
import { ProjectButtons } from '../../ProjectButtons';
import $ from 'jquery';
import styles from './styles.module.scss';

export const SportBet = () => {
  const timer = window.setInterval(function () {
    const ifr = document.getElementById('ifr');
    const loading = document.getElementById('loading');


    if (ifr !== null) {
      if (ifr.clientHeight > 10) {
        loading.style.transform = 'translateY(-60rem)';
        loading.style.transitionDuration = '2s';

        function hideLoading() {
          loading.style.display = 'none';
        }

        setTimeout(hideLoading, 2000);
      }
    }
  }, 500);

  $('html, body').animate({ scrollTop: 0 }, 'fast');

  return (

    <div className={styles.container}>
      <IframeResizer
        id='ifr'
        title=""
        autoResize
        src="http://dev.bisonix.com/ru/projects/bookmaker"
        style={{ width: '1px', minWidth: '100%' }}
      />
      <div id="loading" className={styles.loading}><svg className={styles.spinner} viewBox="0 0 50 50">
        <circle className={styles.path} cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
      </svg></div>
      <ProjectButtons />
    </div>
  );
};

