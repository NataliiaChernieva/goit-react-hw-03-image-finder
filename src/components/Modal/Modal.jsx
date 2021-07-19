import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { MdClose } from 'react-icons/md';
import { CurrentModal, Overlay, Img, CloseBtn } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component {

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
    }

    handleBackdropClick = e => {
        if (e.target === e.currentTarget) {
            // console.log('e.target :>> ', e.target);
            // console.log('e.currentTarget :>> ', e.currentTarget);
            this.props.onClose();
        }
    }

    closeModal = () => {
        this.props.onClose();
    }

    render() {
        return(
            createPortal(
                <Overlay onClick={this.handleBackdropClick}>
                    <CurrentModal>
                        <Img src={this.props.src }/>
                        <CloseBtn type='button'onClick={this.closeModal}><MdClose size='2em' /></CloseBtn>
                    </CurrentModal>
                </Overlay>, modalRoot)
        )
    }
};
