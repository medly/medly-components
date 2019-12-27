import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CloseModalContext from './CloseModalContext';
import { ModalBackgroundStyled } from './Modal.styled';
import ModalActions from './ModalActions';
import ModalContent from './ModalContent';
import ModalHeader from './ModalHeader';
import ModalPopup from './ModalPopup';
import { ModalStaticProps, Props } from './types';

export const Modal: SFC<Props> & WithStyle & ModalStaticProps = React.memo(props => {
    const { open, onCloseModal, children, minWidth, minHeight, ...restProps } = props;

    return (
        open && (
            <ModalBackgroundStyled {...restProps}>
                <CloseModalContext.Provider value={onCloseModal}>
                    <ModalPopup {...{ minWidth, minHeight }}>{children}</ModalPopup>
                </CloseModalContext.Provider>
            </ModalBackgroundStyled>
        )
    );
});

Modal.defaultProps = {
    open: false
};
Modal.displayName = 'Modal';
Modal.Style = ModalBackgroundStyled;

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Actions = ModalActions;
