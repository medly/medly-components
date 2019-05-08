import { useOuterClickNotifier, WithStyle } from '@medly-components/utils';
import React, { useRef } from 'react';
import { ModalBackgroundStyled, ModalStyled } from './Modal.styled';
import ModalActions from './ModalActions';
import ModalContent from './ModalContent';
import ModalHeader from './ModalHeader';
import { ModalStaticProps, Props } from './types';

export const CloseModalContext = React.createContext(null);

export const Modal: React.SFC<Props> & WithStyle & ModalStaticProps = props => {
    const innerRef = useRef(null);
    useOuterClickNotifier(props.onCloseModal, innerRef);

    return (
        <ModalBackgroundStyled {...props}>
            <ModalStyled ref={innerRef}>
                <CloseModalContext.Provider value={props.onCloseModal}>{props.children}</CloseModalContext.Provider>
            </ModalStyled>
        </ModalBackgroundStyled>
    );
};

Modal.defaultProps = {
    open: false
};
Modal.displayName = 'Modal';
Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Actions = ModalActions;
Modal.Style = ModalStyled;

export default Modal;
