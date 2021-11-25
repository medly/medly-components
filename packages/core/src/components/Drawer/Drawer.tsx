import { useKeyPress, WithStyle } from '@medly-components/utils';
import { forwardRef, memo, useCallback, useEffect, useReducer, useState } from 'react';
import { reducer } from '../Modal/scrollStateReducer';
import Content from './Content';
import { DrawerContext } from './Drawer.context';
import { DrawerBackground, DrawerStyled } from './Drawer.styled';
import Footer from './Footer';
import Header from './Header';
import { DrawerProps, DrawerStaticProps } from './types';
import type { FC } from 'react';

const Component: FC<DrawerProps> = memo(
    forwardRef(({ id, onClose, open, width, children, withOverlay, position, ...props }, ref) => {
        const isEscPressed = useKeyPress('Escape'),
            [shouldRender, setRenderState] = useState(open),
            [scrollState, dispatch] = useReducer(reducer, { scrolledToTop: true, scrolledToBottom: false, scrollPosition: 0 });

        const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []),
            handleAnimationEnd = useCallback(() => !open && setRenderState(false), [open]);

        useEffect(() => {
            open && isEscPressed && onClose();
        }, [open, isEscPressed]);

        useEffect(() => {
            open && setRenderState(true);
        }, [open]);

        return shouldRender ? (
            <DrawerBackground onClick={onClose} ref={ref} open={open} {...props} id={`${id}-overlay`} withOverlay={withOverlay}>
                <DrawerStyled
                    id={id!}
                    position={position!}
                    onClick={stopPropagation}
                    width={width!}
                    open={open}
                    onAnimationEnd={handleAnimationEnd}
                >
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
    withOverlay: true
};
export const Drawer: FC<DrawerProps> & WithStyle & DrawerStaticProps = Object.assign(Component, {
    Style: DrawerBackground,
    Content,
    Footer,
    Header
});
