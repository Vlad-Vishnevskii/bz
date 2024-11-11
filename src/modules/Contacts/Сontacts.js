import React, { useEffect } from 'react';
import ellipse from '../../assets/ellipse-bg.png';
import { OrderForm } from '../OrderForm';
import { useBoolean } from '../../hooks';
import { ModalOrder } from '../ModalOrder';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';

export const Contacts = ({ setModalState }) => {
  const [modalIsOpen, setIsOpen] = useBoolean(false);
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.contacts}>
      <div className={styles.contacts_frame}>
        <div className={styles.contacts_frameLeft}>
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
              <a className={styles.contacts_value} href="tel:+375339900990">
                +375 33 990 09 90
              </a>
              <a className={styles.contacts_value} href="tel:+79203364985">
                +7 920 336 49 85
              </a>
            </div>
          </div>
          <div className={styles.contacts_filed}>
            <p className={styles.contacts_label}>Telegram/WhatsApp/Viber</p>
            <a className={styles.contacts_value} href="+375339900990">
              +375 33 990 09 90
            </a>
          </div>
          <div className={styles.contacts_filed}>
            <p className={styles.contacts_label}>{t('contacts.addresLabel')}</p>
            <p className={styles.contacts_value}>{t('contacts.addresValue')}</p>
          </div>
        </div>
        <div className={styles.contacts_formWrapper}>
          <OrderForm type={'orderForm'} setModalState={setModalState} />
        </div>
      </div>
      <button
        onClick={setIsOpen.on}
        className={styles.contacts_orderBtn}
        type="button"
      >
        {t('contacts.orderBtn')}
      </button>
      <ModalOrder
        type={'orderForm'}
        modalIsOpen={modalIsOpen}
        closeModal={setIsOpen.off}
        setModalState={setModalState}
      />
    </div>
  );
};
