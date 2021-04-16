import { useCombinedRefs, useKeyPress, useWindowSize, WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useEffect, useReducer, useRef, useState } from 'react';
import Actions from './Actions';
import CloseIcon from './CloseIcon';
import Content from './Content';
import Header from './Header';
import { ModalContext } from './Modal.context';
import { InnerContainerStyled, ModalBackgroundStyled } from './Modal.styled';
import Popup from './Popup';
import { reducer } from './scrollStateReducer/scrollStateReducer';
import { ModalStaticProps, Props } from './types';
import { useScrollState } from './useScrollState';

export const Modal: FC<Props> & WithStyle & ModalStaticProps = React.memo(
    React.forwardRef((props, ref) => {
        const { open, onCloseModal, children, minWidth, shouldCloseOnOutsideClick, minHeight, ...restProps } = props,
            id = restProps.id || 'medly-modal',
            isEscPressed = useKeyPress('Escape'),
            modalRef = useCombinedRefs<HTMLDivElement>(ref, React.useRef(null)),
            innerContainerRef = useRef(),
            [headerHeight, setHeaderHeight] = useState(0),
            [scrollState, dispatch] = useReducer(reducer, { scrolledToTop: true, scrolledToBottom: false, scrollPosition: 0 }),
            [shouldRender, setShouldRender] = useState(open),
            { width: windowWidth } = useWindowSize(),
            isSmallScreen = windowWidth < 768,
            handleScroll = useScrollState({ ref: innerContainerRef, scrollState, dispatch });

        const handleBackgroundClick = useCallback(() => {
                shouldCloseOnOutsideClick && onCloseModal();
            }, [shouldCloseOnOutsideClick, onCloseModal]),
            handleAnimationEnd = useCallback(() => {
                if (!open) {
                    setShouldRender(false);
                    document.body.style.overflow = 'unset';
                }
            }, [open]);

        useEffect(() => {
            if (open) {
                setShouldRender(true);
                document.body.style.overflow = 'hidden';
            }
            return () => {
                document.body.style.overflow = 'unset';
            };
        }, [open]);

        useEffect(() => {
            open && isEscPressed && onCloseModal();
        }, [open, isEscPressed]);

        return (
            shouldRender && (
                <ModalBackgroundStyled {...{ ...restProps, id, open, isSmallScreen }} onClick={handleBackgroundClick}>
                    <Popup ref={modalRef} id={`${id}-popup`} onAnimationEnd={handleAnimationEnd} {...{ minWidth, minHeight, open }}>
                        <CloseIcon id={`${id}-close-button`} onClick={onCloseModal} size="M" variant="solid" />
                        <InnerContainerStyled
                            id={`${id}-inner-container`}
                            ref={innerContainerRef}
                            onScroll={handleScroll}
                            headerHeight={headerHeight}
                        >
                            <ModalContext.Provider value={{ headerHeight, setHeaderHeight, scrollState, dispatch, id, isSmallScreen }}>
                                {children}
                            </ModalContext.Provider>
                        </InnerContainerStyled>
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
