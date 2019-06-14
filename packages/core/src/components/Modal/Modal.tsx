import { useOuterClickNotifier, WithStyle } from '@medly-components/utils';
import React, { useRef } from 'react';
import CloseModalContext from './CloseModalContext';
import { ModalBackgroundStyled, ModalStyled } from './Modal.styled';
import ModalActions from './ModalActions';
import ModalContent from './ModalContent';
import ModalHeader from './ModalHeader';
import { ModalStaticProps, Props } from './types';

export const Modal: React.SFC<Props> & WithStyle & ModalStaticProps = props => {
    const innerRef = useRef(null);
    useOuterClickNotifier(props.onCloseModal, innerRef);

    const { onCloseModal, children, ...restProps } = props;

    if (!props.open) return null;

    return (
        <ModalBackgroundStyled {...restProps}>
            <ModalStyled ref={innerRef}>
                <CloseModalContext.Provider value={onCloseModal}>{children}</CloseModalContext.Provider>
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
