import { useCombinedRefs, useKeyPress, WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useEffect, useReducer, useRef } from 'react';
import Actions from './Actions';
import CloseIcon from './CloseIcon';
import Content from './Content';
import Header from './Header';
import { HeaderContentStyled, ModalBackgroundStyled } from './Modal.styled';
import Popup from './Popup';
import { reducer } from './scrollStateReducer';
import { ModalStaticProps, Props } from './types';

export const Modal: FC<Props> & WithStyle & ModalStaticProps = React.memo(
    React.forwardRef((props, ref) => {
        const { open, onCloseModal, children, minWidth, shouldCloseOnOutsideClick, minHeight, ...restProps } = props,
            id = restProps.id || 'medly-modal',
            isEscPressed = useKeyPress('Escape'),
            modalRef = useCombinedRefs<HTMLDivElement>(ref, React.useRef(null)),
            headerContentRef = useRef(),
            [scrollState, dispatch] = useReducer(reducer, { scrolledToTop: true, scrolledToBottom: false, scrollPosition: 0 });

        const ContentHeaderChildren = React.Children.toArray(children).filter((child: any) => {
            return child.type.displayName === 'Header' || child.type.displayName === 'Content';
        });

        const ActionsChild = React.Children.toArray(children).filter((child: any) => {
            return child.type.displayName === 'Actions';
        });

        const handleBackgroundClick = useCallback(() => {
            shouldCloseOnOutsideClick && onCloseModal();
        }, [shouldCloseOnOutsideClick, onCloseModal]);

        useEffect(() => {
            const element = headerContentRef.current as HTMLElement;
            headerContentRef.current && dispatch({ type: 'scrolledToBottom', value: element.clientHeight === element.scrollHeight });
        }, [headerContentRef.current]);

        const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
            e.stopPropagation();
            const element = e.target as HTMLElement,
                isScrolledToTop = element.scrollTop === 0,
                isScrolledToBottom = Math.ceil(element.scrollTop + element.clientHeight) === element.scrollHeight;

            scrollState.scrolledToTop !== isScrolledToTop && dispatch({ type: 'scrolledToTop', value: isScrolledToTop });
            scrollState.scrolledToBottom !== isScrolledToBottom && dispatch({ type: 'scrolledToBottom', value: isScrolledToBottom });
            dispatch({ type: 'scrollPosition', value: element.scrollTop });
        };

        useEffect(() => {
            open && isEscPressed && onCloseModal();
        }, [open, isEscPressed]);

        return (
            open && (
                <ModalBackgroundStyled {...{ ...restProps, id }} onClick={handleBackgroundClick}>
                    <Popup ref={modalRef} id={`${id}-popup`} {...{ minWidth, minHeight }}>
                        <CloseIcon id={`${id}-close-button`} onClick={onCloseModal} />
                        <HeaderContentStyled ref={headerContentRef} onScroll={handleScroll}>
                            {ContentHeaderChildren.map((child: any) =>
                                React.cloneElement(child as any, {
                                    scrollState,
                                    dispatch,
                                    id
                                })
                            )}
                        </HeaderContentStyled>
                        {ActionsChild[0] &&
                            React.cloneElement(ActionsChild[0] as any, {
                                scrollState,
                                dispatch,
                                id
                            })}
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
