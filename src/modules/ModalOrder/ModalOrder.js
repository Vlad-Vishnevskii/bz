import React from 'react';
import ModalContainer from 'react-modal';
import { OrderForm } from '../OrderForm';
import { CloseIcon } from '../Icons';

import styles from './styles.module.scss';

ModalContainer.setAppElement('#root');

const handleDisableBodyScroll = () => {
  document.body.style.overflow = 'hidden';
};

const handleEnableBodyScroll = () => {
  document.body.style.overflow = 'unset';
};

export const ModalOrder = ({ modalIsOpen, closeModal }) => {
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
      <OrderForm closeModal={closeModal} />
    </ModalContainer>
  );
};
