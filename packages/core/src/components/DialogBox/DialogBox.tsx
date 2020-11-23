import { useCombinedRefs, useKeyPress, useWindowSize, WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useEffect, useReducer, useRef, useState } from 'react';
import Actions from './Actions';
import Content from './Content';
import { DialogBoxContext } from './DialogBox.context';
import { DialogBoxBackgroundStyled, InnerContainerStyled } from './DialogBox.styled';
import Header from './Header';
import Popup from './Popup';
import { reducer } from './scrollStateReducer/scrollStateReducer';
import { DialogBoxStaticProps, Props } from './types';
import { useScrollState } from './useScrollState';

export const DialogBox: FC<Props> & WithStyle & DialogBoxStaticProps = React.memo(
    React.forwardRef((props, ref) => {
        const { open, onCloseModal, children, minWidth, shouldCloseOnOutsideClick, minHeight, ...restProps } = props,
            id = restProps.id || 'medly-dialog-box',
            isEscPressed = useKeyPress('Escape'),
            dialogBoxRef = useCombinedRefs<HTMLDivElement>(ref, React.useRef(null)),
            innerContainerRef = useRef(),
            [headerHeight, setHeaderHeight] = useState(0),
            [scrollState, dispatch] = useReducer(reducer, { scrolledToTop: true, scrolledToBottom: false, scrollPosition: 0 }),
            [shouldRender, setShouldRender] = useState(open),
            { width: windowWidth } = useWindowSize(),
            isSmallScreen = windowWidth < 768,
            handleScroll = useScrollState({ ref: innerContainerRef, scrollState, dispatch });

        const handleBackgroundClick = useCallback(() => {
            shouldCloseOnOutsideClick && onCloseModal();
        }, [shouldCloseOnOutsideClick, onCloseModal]);

        useEffect(() => {
            if (open) setShouldRender(true);
            if (!isSmallScreen && !open) setShouldRender(false);
        }, [open]);

        const handleAnimationEnd = useCallback(() => {
            if (!open) setShouldRender(false);
        }, [open]);

        useEffect(() => {
            open && isEscPressed && onCloseModal();
        }, [open, isEscPressed]);

        return (
            shouldRender && (
                <DialogBoxBackgroundStyled {...{ ...restProps, id, open, isSmallScreen }} onClick={handleBackgroundClick}>
                    <Popup
                        ref={dialogBoxRef}
                        id={`${id}-popup`}
                        onAnimationEnd={handleAnimationEnd}
                        {...{ minWidth, minHeight, open }}
                    >
                        <InnerContainerStyled
                            id={`${id}-inner-container`}
                            ref={innerContainerRef}
                            onScroll={handleScroll}
                            headerHeight={headerHeight}
                        >
                            <DialogBoxContext.Provider value={{ headerHeight, setHeaderHeight, scrollState, dispatch, id, isSmallScreen }}>
                                {children}
                            </DialogBoxContext.Provider>
                        </InnerContainerStyled>
                    </Popup>
                </DialogBoxBackgroundStyled>
            )
        );
    })
);

DialogBox.defaultProps = {
    open: false,
    shouldCloseOnOutsideClick: false
};
DialogBox.displayName = 'DialogBox';
DialogBox.Style = DialogBoxBackgroundStyled;
DialogBox.Header = Header;
DialogBox.Popup = Popup;
DialogBox.Header = Header;
DialogBox.Content = Content;
DialogBox.Actions = Actions;
