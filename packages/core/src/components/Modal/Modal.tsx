import { useCombinedRefs, useKeyPress, useWindowSize, WithStyle } from '@medly-components/utils';
import { FC, forwardRef, memo, useCallback, useEffect, useLayoutEffect, useReducer, useRef, useState } from 'react';
import Actions from './Actions';
import CloseIcon from './CloseIcon';
import Content from './Content';
import Header from './Header';
import { ModalContext } from './Modal.context';
import { InnerContainerStyled, ModalBackgroundStyled } from './Modal.styled';
import Popup from './Popup';
import { reducer } from './scrollStateReducer/scrollStateReducer';
import { ModalProps, ModalStaticProps } from './types';

const Component: FC<ModalProps> = memo(
    forwardRef((props, ref) => {
        const { open, onCloseModal, children, minWidth, shouldCloseOnOutsideClick, minHeight, ...restProps } = props,
            id = restProps.id || 'medly-modal',
            modalRef = useCombinedRefs<HTMLDivElement>(ref, useRef(null)),
            isEscPressed = useKeyPress('Escape', false, modalRef),
            innerContainerRef = useRef<HTMLDivElement>(null),
            [headerHeight, setHeaderHeight] = useState(0),
            [activeElement, setActiveElement] = useState<HTMLElement>(),
            [scrollState, dispatch] = useReducer(reducer, { scrolledToTop: true, scrolledToBottom: false, scrollPosition: 0 }),
            [shouldRender, setShouldRender] = useState(open),
            { width: windowWidth } = useWindowSize(),
            isSmallScreen = windowWidth < 768;

        const handleBackgroundClick = useCallback(() => {
                shouldCloseOnOutsideClick && onCloseModal && onCloseModal();
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
            open && isEscPressed && onCloseModal && onCloseModal();
        }, [open, isEscPressed]);

        useLayoutEffect(() => {
            open && setActiveElement(document.activeElement as HTMLElement);
        }, [open]);

        useEffect(() => {
            !shouldRender && activeElement?.focus();
        }, [shouldRender]);

        return shouldRender ? (
            <ModalBackgroundStyled {...{ ...restProps, id, open, isSmallScreen }} onClick={handleBackgroundClick}>
                <Popup ref={modalRef} id={`${id}-popup`} onAnimationEnd={handleAnimationEnd} {...{ minWidth, minHeight, open }}>
                    <CloseIcon id={`${id}-close-button`} title={`${id}-close-icon`} size="M" variant="solid" onClick={onCloseModal} />
                    <InnerContainerStyled
                        id={`${id}-inner-container`}
                        ref={innerContainerRef}
                        headerHeight={headerHeight}
                    >
                        <ModalContext.Provider value={{ headerHeight, setHeaderHeight, scrollState, dispatch, id, isSmallScreen }}>
                            {children}
                        </ModalContext.Provider>
                    </InnerContainerStyled>
                </Popup>
            </ModalBackgroundStyled>
        ) : null;
    })
);

Component.defaultProps = {
    open: false,
    shouldCloseOnOutsideClick: false
};
Component.displayName = 'Modal';
export const Modal: FC<ModalProps> & WithStyle & ModalStaticProps = Object.assign(Component, {
    Style: ModalBackgroundStyled,
    Header,
    Popup,
    Content,
    Actions
});
