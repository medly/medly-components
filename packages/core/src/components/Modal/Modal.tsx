import { useCombinedRefs, useKeyPress, useWindowSize, WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useEffect, useReducer, useRef, useState } from 'react';
import Actions from './Actions';
import CloseIcon from './CloseIcon';
import Content from './Content';
import Header from './Header';
import { ContentHeaderStyled, ModalBackgroundStyled } from './Modal.styled';
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
            contentHeaderRef = useRef(),
            [headerHeight, setHeaderHeight] = useState(0),
            [scrollState, dispatch] = useReducer(reducer, { scrolledToTop: true, scrolledToBottom: false, scrollPosition: 0 }),
            [shouldRender, setShouldRender] = useState(open),
            windowSize = useWindowSize(),
            { width: windowWidth } = windowSize,
            isSmallScreen = windowWidth < 768,
            handleScroll = useScrollState({ ref: contentHeaderRef, scrollState, dispatch });

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
            if (open) setShouldRender(true);
            if (!isSmallScreen && !open) setShouldRender(false);
        }, [open]);

        const handleAnimationEnd = () => {
            if (!open) setShouldRender(false);
        };

        useEffect(() => {
            open && isEscPressed && onCloseModal();
        }, [open, isEscPressed]);

        return (
            shouldRender && (
                <ModalBackgroundStyled {...{ ...restProps, id, open, isSmallScreen }} onClick={handleBackgroundClick}>
                    <Popup
                        ref={modalRef}
                        id={`${id}-popup`}
                        onAnimationEnd={handleAnimationEnd}
                        {...{ minWidth, minHeight, isSmallScreen, open }}
                    >
                        <CloseIcon id={`${id}-close-button`} onClick={onCloseModal} />
                        <ContentHeaderStyled
                            id={`${id}-content-header`}
                            ref={contentHeaderRef}
                            onScroll={handleScroll}
                            headerHeight={headerHeight}
                        >
                            {ContentHeaderChildren.map((child: any) =>
                                React.cloneElement(child as any, {
                                    headerHeight,
                                    setHeaderHeight,
                                    scrollState,
                                    dispatch,
                                    id,
                                    isSmallScreen
                                })
                            )}
                        </ContentHeaderStyled>
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
