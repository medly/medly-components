import { useCombinedRefs, useKeyPress, useWindowSize, WithStyle } from '@medly-components/utils';
import { FC, forwardRef, memo, MouseEvent, useCallback, useEffect, useLayoutEffect, useReducer, useRef, useState } from 'react';
import Actions from './Actions';
import CloseIcon from './CloseIcon';
import Content from './Content';
import Header from './Header';
import { ModalContext } from './Modal.context';
import { InnerContainerStyled, ModalBackgroundStyled } from './Modal.styled';
import ModalManager from './ModalManager';
import Popup from './Popup';
import { reducer } from './scrollStateReducer/scrollStateReducer';
import { ModalProps, ModalStaticProps } from './types';
import { useScrollState } from './useScrollState';

const manager = new ModalManager();

const Component: FC<ModalProps> = memo(
    forwardRef((props, ref) => {
        const {
                open,
                onCloseModal,
                overflowVisible,
                children,
                minWidth,
                shouldCloseOnOutsideClick,
                minHeight,
                disableEscapeKeyDown,
                ...restProps
            } = props,
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

        const handleCloseModal = useCallback(() => {
                if (modalRef.current) manager.remove(modalRef.current);
                onCloseModal && onCloseModal();
            }, [onCloseModal, manager]),
            handleBackgroundClick = useCallback(
                (event: MouseEvent<HTMLDivElement>) =>
                    event.currentTarget === event.target && shouldCloseOnOutsideClick && handleCloseModal(),
                [shouldCloseOnOutsideClick, handleCloseModal]
            ),
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
            !disableEscapeKeyDown && open && isEscPressed && modalRef.current && manager.isTopModal(modalRef.current) && handleCloseModal();
        }, [open, isEscPressed, disableEscapeKeyDown, handleCloseModal, manager]);

        useLayoutEffect(() => {
            open && setActiveElement(document.activeElement as HTMLElement);
        }, [open]);

        useEffect(() => {
            !shouldRender && activeElement?.focus();
            if (shouldRender && modalRef.current) manager.add(modalRef.current);
        }, [shouldRender, manager]);

        const handleScroll = useScrollState({ ref: innerContainerRef, scrollState, dispatch });

        return shouldRender ? (
            <ModalBackgroundStyled {...{ ...restProps, id, open }} onClick={handleBackgroundClick}>
                <Popup
                    ref={modalRef}
                    id={`${id}-popup`}
                    onAnimationEnd={handleAnimationEnd}
                    {...{ minWidth, minHeight, open, overflowVisible }}
                >
                    <CloseIcon id={`${id}-close-button`} title={`${id}-close-icon`} size="M" variant="solid" onClick={handleCloseModal} />
                    <InnerContainerStyled
                        id={`${id}-inner-container`}
                        ref={innerContainerRef}
                        headerHeight={headerHeight}
                        overflowVisible={overflowVisible}
                        onScroll={handleScroll}
                    >
                        <ModalContext.Provider
                            value={{ headerHeight, setHeaderHeight, scrollState, dispatch, id, isSmallScreen, overflowVisible }}
                        >
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
    shouldCloseOnOutsideClick: false,
    disableEscapeKeyDown: false
};
Component.displayName = 'Modal';
export const Modal: FC<ModalProps> & WithStyle & ModalStaticProps = Object.assign(Component, {
    Style: ModalBackgroundStyled,
    Header,
    Popup,
    Content,
    Actions
});
