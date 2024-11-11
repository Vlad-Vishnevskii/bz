import React from 'react';
import ModalContainer from 'react-modal';
import { CloseIcon } from '../Icons';
import { MODAL_STATE } from '../../constants';
import { ModalSucces } from '../SucessModal';
import { ErrorModal } from '../ErrorModal';
import styles from './styles.module.scss';

ModalContainer.setAppElement('#root');

const handleDisableBodyScroll = () => {
  document.body.style.position = 'relative';
};

const handleEnableBodyScroll = () => {
  document.body.style.position = 'auto';
};

export const SendStatusModal = ({ modalState, handleClose }) => {
  return (
    <ModalContainer
      isOpen={modalState.isOpen}
      onRequestClose={handleClose}
      onAfterOpen={handleDisableBodyScroll}
      onAfterClose={handleEnableBodyScroll}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button className={styles.closeICon} onClick={handleClose}>
        <CloseIcon />
      </button>
      {modalState.type === MODAL_STATE.SUCCESS && (
        <ModalSucces onClose={handleClose} />
      )}
      {modalState.type === MODAL_STATE.ERROR && (
        <ErrorModal onClose={handleClose} />
      )}
    </ModalContainer>
  );
};
