import React from 'react';
import ModalContainer from 'react-modal';
import { OrderForm } from '../OrderForm';
import { CloseIcon } from '../Icons';

import styles from './styles.module.scss';

ModalContainer.setAppElement('#root');

const handleDisableBodyScroll = () => {
  document.body.style.position = 'relative';
};

const handleEnableBodyScroll = () => {
  document.body.style.position = 'auto';
};

export const ModalOrder = ({ modalIsOpen, closeModal, type }) => {
  return (
    <ModalContainer
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      onAfterOpen={handleDisableBodyScroll}
      onAfterClose={handleEnableBodyScroll}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button className={styles.closeICon} onClick={closeModal}>
        <CloseIcon />
      </button>
      <OrderForm closeModal={closeModal} type={type} />
    </ModalContainer>
  );
};
