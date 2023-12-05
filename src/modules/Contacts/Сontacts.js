import React from 'react';
import ellipse from '../../assets/ellipse-bg.png';
import { OrderForm } from '../OrderForm';
import { useBoolean } from '../../hooks';
import { ModalOrder } from '../ModalOrder';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';

export const Contacts = () => {
  const [modalIsOpen, setIsOpen] = useBoolean(false);
  const { t } = useTranslation();

  return (
    <div className={styles.contacts}>
      <img
        className={styles.contacts_bg}
        src={ellipse}
        alt="bg"
        width={777}
        height={777}
      />
      <h1 className={styles.contacts_title}>{t('contacts.title')}</h1>
      <div className={styles.contacts_filed}>
        <p className={styles.contacts_label}>E-mail</p>
        <a className={styles.contacts_value} href="mailto:info@bisonix.com">
          info@bisonix.com
        </a>
      </div>
      <div className={styles.contacts_filed}>
        <p className={styles.contacts_label}>{t('contacts.phoneLabel')}</p>
        <div className={styles.contacts_phoneContainer}>
          <a className={styles.contacts_value} href="tel:+375336670448">
            +375 33 667 04 48
          </a>
          <a className={styles.contacts_value} href="tel:+48571053900">
            +48 571 053 900
          </a>
        </div>
      </div>
      <div className={styles.contacts_filed}>
        <p className={styles.contacts_label}>Telegram</p>
        <a className={styles.contacts_value} href="https://t.me/+48571053900">
          +48 571 053 900
        </a>
      </div>
      <div className={styles.contacts_filed}>
        <p className={styles.contacts_label}>{t('contacts.addresLabel')}</p>
        <p className={styles.contacts_value}>{t('contacts.addresValue')}</p>
      </div>
      <div className={styles.contacts_frame}>
        <OrderForm type={'orderForm'} />
      </div>
      <button
        onClick={setIsOpen.on}
        className={styles.contacts_orderBtn}
        type="button"
      >
        {t('contacts.orderBtn')}
      </button>
      <p className={styles.contacts_copyright}>{t('contacts.copyright')}</p>
      <ModalOrder
        type={'orderForm'}
        modalIsOpen={modalIsOpen}
        closeModal={setIsOpen.off}
      />
    </div>
  );
};
