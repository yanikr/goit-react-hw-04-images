import { createPortal } from 'react-dom';
import { Modal, Overlay } from './Modal.styled';

import React, { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

export class ModalWindow extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <Modal>{this.props.children}</Modal>
      </Overlay>,
      modalRoot
    );
  }
}
