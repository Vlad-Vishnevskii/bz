import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NameInput, ContactInput, AboutInput } from './components';

import styles from './styles.module.scss';

export const OrderForm = ({ closeModal, type }) => {
  const { t } = useTranslation();
  const [stateForm, setStateForm] = useState({
    name: '',
    conctact: '',
    about: '',
  });

  const onNameChange = (value) => {
    setStateForm((prev) => ({
      ...prev,
      name: value,
    }));
  };

  const onContactChange = (value) => {
    setStateForm((prev) => ({
      ...prev,
      conctact: value,
    }));
  };

  const onAboutChange = (value) => {
    setStateForm((prev) => ({
      ...prev,
      about: value,
    }));
  };

  return (
    <form onSubmit={closeModal} className={styles.orderForm}>
      <h2 className={styles.orderForm_title}>{t(`${type}.title`)}</h2>
      <p className={styles.orderForm_description}>{t(`${type}.description`)}</p>
      <NameInput
        value={stateForm.name}
        change={onNameChange}
        placeholderText={t(`${type}.placeholderName`)}
      />
      <ContactInput
        value={stateForm.conctact}
        change={onContactChange}
        placeholderText={t(`${type}.placeholderContact`)}
      />
      <AboutInput
        value={stateForm.about}
        change={onAboutChange}
        className={styles.aboutInput}
        placeholderText={t(`${type}.placeholderProject`)}
      />
      <p className={styles.orderForm_agreement}>{t(`${type}.agreement`)}</p>
      <button className={styles.orderForm_submitBtn} type="submit">
        {t(`${type}.submitBtn`)}
      </button>
    </form>
  );
};
