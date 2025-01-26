import { scrollStateReducer, useKeyPress, WithStyle } from '@medly-components/utils';
import type { FC, MouseEvent } from 'react';
import { forwardRef, memo, useCallback, useEffect, useReducer, useState } from 'react';
import Content from './Content';
import { DrawerContext } from './Drawer.context';
import { DrawerBackground, DrawerStyled } from './Drawer.styled';
import Footer from './Footer';
import Header from './Header';
import { DrawerProps, DrawerStaticProps } from './types';

const Component: FC<DrawerProps> = memo(
    forwardRef(({ id, onClose, open, width, children, withOverlay, position, shouldCloseOnOutsideClick, ...props }, ref) => {
        const isEscPressed = useKeyPress('Escape'),
            [shouldRender, setRenderState] = useState(open),
            [scrollState, dispatch] = useReducer(scrollStateReducer, { scrolledToTop: true, scrolledToBottom: false, scrollPosition: 0 });

        const handleBackgroundClick = useCallback(
                (event: MouseEvent<HTMLDivElement>) =>
                    event.currentTarget === event.target && shouldCloseOnOutsideClick && onClose && onClose(),
                [onClose]
            ),
            handleAnimationEnd = useCallback(() => !open && setRenderState(false), [open]);

        useEffect(() => {
            open && isEscPressed && onClose();
        }, [open, isEscPressed]);

        useEffect(() => {
            open && setRenderState(true);
        }, [open]);

        return shouldRender ? (
            <DrawerBackground
                ref={ref}
                open={open}
                {...props}
                id={`${id}-overlay`}
                withOverlay={withOverlay}
                onClick={handleBackgroundClick}
            >
                <DrawerStyled id={id!} position={position!} width={width!} open={open} onAnimationEnd={handleAnimationEnd}>
                    <DrawerContext.Provider value={{ id: id!, scrollState, dispatch, onClose }}>{children}</DrawerContext.Provider>
                </DrawerStyled>
            </DrawerBackground>
        ) : null;
    })
);

Component.displayName = 'Drawer';
Component.defaultProps = {
    id: 'medly-drawer',
    open: false,
    position: 'right',
    width: '40rem',
    withOverlay: true,
    shouldCloseOnOutsideClick: true
};
export const Drawer: FC<DrawerProps> & WithStyle & DrawerStaticProps = Object.assign(Component, {
    Style: DrawerBackground,
    Content,
    Footer,
    Header
});
