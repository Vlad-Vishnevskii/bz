import React from 'react';
import ellipseBg from '../../assets/ellipse-bg.png';
import { OrderForm } from '../OrderForm';

import styles from './styles.module.scss';

export const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <img
        className={styles.contacts_bg}
        src={ellipseBg}
        alt='bg'
        width={635}
        height={636}
      />
      <h1 className={styles.contacts_title}>Контакты</h1>
      <div className={styles.contacts_filed}>
        <p className={styles.contacts_label}>E-mail</p>
        <a className={styles.contacts_value} href='mailto:info@bisonix.com'>
          info@bisonix.com
        </a>
      </div>
      <div className={styles.contacts_filed}>
        <p className={styles.contacts_label}>Телефон</p>
        <div className={styles.contacts_phoneContainer}>
          <a className={styles.contacts_value} href='tel:+375336670448'>
            +375 33 667 04 48
          </a>
          <a className={styles.contacts_value} href='tel:+48571053900'>
            +48 571 053 900
          </a>
        </div>
      </div>
      <div className={styles.contacts_filed}>
        <p className={styles.contacts_label}>Telegram</p>
        <a className={styles.contacts_value} href='https://t.me/+48571053900'>
          <img className={styles.contacts_tgImage} src='/telegram_white.png' alt='telegram'/>
          <span>+48 571 053 900</span>
        </a>
      </div>
      <div className={styles.contacts_filed}>
        <p className={styles.contacts_label}>Адрес</p>
        <p className={styles.contacts_value}>
          210027, Республика Беларусь, Витебск, П. Бровки 4б, офис 32г
        </p>
      </div>
      <div className={styles.contacts_frame}>
        <OrderForm/>
      </div>
      <p className={styles.contacts_copyright}>
        Все права защищены, ООО БИЗОНИКС, 2023
      </p>
    </div>
  );
};
