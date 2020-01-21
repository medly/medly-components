import { WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback, useEffect } from 'react';
import CloseModalContext from './CloseModalContext';
import { ModalBackgroundStyled } from './Modal.styled';
import ModalActions from './ModalActions';
import ModalContent from './ModalContent';
import ModalHeader from './ModalHeader';
import ModalPopup from './ModalPopup';
import { ModalStaticProps, Props } from './types';

export const Modal: SFC<Props> & WithStyle & ModalStaticProps = React.memo(
    React.forwardRef((props, ref) => {
        const { open, onCloseModal, children, minWidth, minHeight, ...restProps } = props,
            id = restProps.id || 'medly-modal';

        const handleEscPress = useCallback((e: any) => e.keyCode === 27 && onCloseModal(), []);

        useEffect(() => {
            document.addEventListener('keydown', handleEscPress);
            return () => document.removeEventListener('keydown', handleEscPress);
        }, []);

        return (
            open && (
                <ModalBackgroundStyled {...restProps} id={id} onClick={onCloseModal}>
                    <CloseModalContext.Provider value={onCloseModal}>
                        <ModalPopup ref={ref} id={`${id}-popup`} {...{ minWidth, minHeight }}>
                            {children}
                        </ModalPopup>
                    </CloseModalContext.Provider>
                </ModalBackgroundStyled>
            )
        );
    })
);

Modal.defaultProps = {
    open: false
};
Modal.displayName = 'Modal';
Modal.Style = ModalBackgroundStyled;
Modal.Header = ModalHeader;
Modal.Popup = ModalPopup;
Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Actions = ModalActions;
