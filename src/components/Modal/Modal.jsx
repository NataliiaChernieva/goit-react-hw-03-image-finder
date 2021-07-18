import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { CurrentModal, Overlay } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackdropClick = e => {
        if (e.target === e.currentTarget) {
            console.log('e.target :>> ', e.target);
            console.log('e.currentTarget :>> ', e.currentTarget);
            this.props.onClose();
        }
    }

    render() {
        return(
            createPortal(
                <Overlay onClick={this.handleBackdropClick}>
                    <CurrentModal>{this.props.children}</CurrentModal>
                </Overlay>, modalRoot)
        )
    }
};
