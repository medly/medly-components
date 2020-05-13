import { useCombinedRefs, useKeyPress, WithStyle } from '@medly-components/utils';
import React, { SFC, useEffect, useReducer } from 'react';
import Actions from './Actions';
import CloseIcon from './CloseIcon';
import Content from './Content';
import Header from './Header';
import { ModalBackgroundStyled } from './Modal.styled';
import Popup from './Popup';
import { reducer } from './scrollStateReducer';
import { ModalStaticProps, Props } from './types';

export const Modal: SFC<Props> & WithStyle & ModalStaticProps = React.memo(
    React.forwardRef((props, ref) => {
        const { open, onCloseModal, children, minWidth, minHeight, ...restProps } = props,
            id = restProps.id || 'medly-modal',
            enterPress = useKeyPress('Escape'),
            modalRef = useCombinedRefs<HTMLDivElement>(ref, React.useRef(null)),
            [scrollState, dispatch] = useReducer(reducer, { scrolledToTop: true, scrolledToBottom: false });

        useEffect(() => {
            enterPress && onCloseModal();
        }, [enterPress]);

        return (
            open && (
                <ModalBackgroundStyled {...{ ...restProps, id }} onClick={onCloseModal}>
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
    open: false
};
Modal.displayName = 'Modal';
Modal.Style = ModalBackgroundStyled;
Modal.Header = Header;
Modal.Popup = Popup;
Modal.Header = Header;
Modal.Content = Content;
Modal.Actions = Actions;
