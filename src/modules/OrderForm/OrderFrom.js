import React, { useState } from 'react';
import { NameInput, ContactInput, AboutInput } from './components';

import styles from './styles.module.scss';

export const OrderFrom = () => {
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

  console.log(stateForm);

  return (
    <form className={styles.orderForm}>
      <h2 className={styles.orderForm_title}>Начать проект</h2>
      <p className={styles.orderForm_description}>
        Заполните эту форму, и наш менеджер свяжется с Вами в течении 24 часов с
        момента отправки заявки
      </p>
      <NameInput value={stateForm.name} change={onNameChange} />
      <ContactInput value={stateForm.conctact} change={onContactChange} />
      <AboutInput
        value={stateForm.about}
        change={onAboutChange}
        className={styles.aboutInput}
      />
      <p className={styles.orderForm_agreement}>
        Заполняя данную форму вы принимаете условия Соглашения об использовании
        сайта, в том числе в части обработки использования персональных данных
      </p>
    </form>
  );
};
