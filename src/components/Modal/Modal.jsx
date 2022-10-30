import { createPortal } from 'react-dom';
import { Modal, Overlay } from './Modal.styled';

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
const modalRoot = document.querySelector('#modal-root');

export const ModalWindow = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <Modal>{children}</Modal>
    </Overlay>,
    modalRoot
  );
};

ModalWindow.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};
