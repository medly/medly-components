import { WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback, useEffect } from 'react';
import CloseModalContext from './CloseModalContext';
import { ModalBackgroundStyled } from './Modal.styled';
import ModalActions from './ModalActions';
import ModalContent from './ModalContent';
import ModalHeader from './ModalHeader';
import ModalPopup from './ModalPopup';
import { ModalStaticProps, Props } from './types';

export const Modal: SFC<Props> & WithStyle & ModalStaticProps = React.memo(props => {
    const { open, onCloseModal, children, minWidth, minHeight, ...restProps } = props;

    const handleEscPress = useCallback((e: any) => e.keyCode === 27 && onCloseModal(), []);

    useEffect(() => {
        document.addEventListener('keydown', handleEscPress);
        return () => document.removeEventListener('keydown', handleEscPress);
    }, []);

    return (
        open && (
            <ModalBackgroundStyled {...restProps} onClick={onCloseModal}>
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
