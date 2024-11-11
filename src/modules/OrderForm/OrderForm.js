import React, { useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { NameInput, ContactInput, AboutInput } from './components';
import { MODAL_STATE } from '../../constants';

import styles from './styles.module.scss';

const createSearchParams = (obj) => {
  return `?${Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')}`;
};

export const OrderForm = ({
  type,
  forContactsFrame = false,
  setModalState,
  closeModal = () => {},
}) => {
  const { t } = useTranslation();
  const [stateForm, setStateForm] = useState({
    name: '',
    contact: '',
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
      contact: value,
    }));
  };

  const onAboutChange = (value) => {
    setStateForm((prev) => ({
      ...prev,
      about: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('lod', () => {
      console.log(xhr.responseText);
    });

    xhr.open(
      'GET',
      `${window.location.origin}/mail.php${createSearchParams(stateForm)}`
    );

    xhr.send();

    xhr.onerror = function () {
      setModalState({
        isOpen: true,
        type: MODAL_STATE.ERROR,
      });
    };

    xhr.onload = function () {
      if (xhr.status === 200 || xhr.status === 302) {
        setModalState({
          isOpen: true,
          type: MODAL_STATE.SUCCESS,
        });
      } else {
        setModalState({
          isOpen: true,
          type: MODAL_STATE.ERROR,
        });
      }
      closeModal();
    };
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(styles.orderForm, {
        [styles.orderFormForContactFrame]: forContactsFrame,
      })}
    >
      {!forContactsFrame && (
        <h2 className={styles.orderForm_title}>{t(`${type}.title`)}</h2>
      )}
      <p
        className={cn(styles.orderForm_description, {
          [styles.orderForm_descriptionOrange]: forContactsFrame,
        })}
      >
        {t(`${type}.description`)}
      </p>
      <NameInput
        value={stateForm.name}
        change={onNameChange}
        placeholderText={t(`${type}.placeholderName`)}
      />
      <ContactInput
        value={stateForm.contact}
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
