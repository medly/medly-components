import { useCombinedRefs, useKeyPress, WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useEffect, useReducer } from 'react';
import Actions from './Actions';
import CloseIcon from './CloseIcon';
import Content from './Content';
import Header from './Header';
import { ModalBackgroundStyled } from './Modal.styled';
import Popup from './Popup';
import { reducer } from './scrollStateReducer';
import { ModalStaticProps, Props } from './types';

export const Modal: FC<Props> & WithStyle & ModalStaticProps = React.memo(
    React.forwardRef((props, ref) => {
        const { open, onCloseModal, children, minWidth, shouldCloseOnOutsideClick, minHeight, ...restProps } = props,
            id = restProps.id || 'medly-modal',
            isEscPressed = useKeyPress('Escape'),
            modalRef = useCombinedRefs<HTMLDivElement>(ref, React.useRef(null)),
            [scrollState, dispatch] = useReducer(reducer, { scrolledToTop: true, scrolledToBottom: false });

        const handleBackgroundClick = useCallback(() => {
            shouldCloseOnOutsideClick && onCloseModal();
        }, [shouldCloseOnOutsideClick, onCloseModal]);

        useEffect(() => {
            open && isEscPressed && onCloseModal();
        }, [open, isEscPressed]);

        return (
            open && (
                <ModalBackgroundStyled {...{ ...restProps, id }} onClick={handleBackgroundClick}>
                    <Popup ref={modalRef} id={`${id}-popup`} {...{ minWidth, minHeight }}>
                        <CloseIcon id={`${id}-close-button`} onClick={onCloseModal} />
                        {React.Children.map(children, (child: any) =>
                            React.cloneElement(child as any, {
                                scrollState,
                                dispatch,
                                id
                            })
                        )}
                    </Popup>
                </ModalBackgroundStyled>
            )
        );
    })
);

Modal.defaultProps = {
    open: false,
    shouldCloseOnOutsideClick: false
};
Modal.displayName = 'Modal';
Modal.Style = ModalBackgroundStyled;
Modal.Header = Header;
Modal.Popup = Popup;
Modal.Header = Header;
Modal.Content = Content;
Modal.Actions = Actions;
