import { useKeyPress, WithStyle } from '@medly-components/utils';
import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { reducer } from '../Modal/scrollStateReducer';
import Content from './Content';
import { DrawerContext } from './Drawer.context';
import { DrawerBackground, DrawerStyled } from './Drawer.styled';
import Footer from './Footer';
import Header from './Header';
import { DrawerProps, DrawerStaticProps } from './types';

const Component: React.FC<DrawerProps> = React.memo(
    React.forwardRef(({ id = 'medly-drawer', onClose, open, width, children, withOverlay, position, ...props }, ref) => {
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

        return (
            shouldRender && (
                <DrawerBackground onClick={onClose} ref={ref} open={open} {...props} id={`${id}-overlay`} withOverlay={withOverlay}>
                    <DrawerStyled
                        id={id}
                        position={position}
                        onClick={stopPropagation}
                        width={width}
                        open={open}
                        onAnimationEnd={handleAnimationEnd}
                    >
                        <DrawerContext.Provider value={{ id, scrollState, dispatch, onClose }}>{children}</DrawerContext.Provider>
                    </DrawerStyled>
                </DrawerBackground>
            )
        );
    })
);

Component.displayName = 'Drawer';
Component.defaultProps = {
    open: false,
    position: 'right',
    width: '40rem',
    withOverlay: true
};
export const Drawer: React.FC<DrawerProps> & WithStyle & DrawerStaticProps = Object.assign(Component, {
    Style: DrawerBackground,
    Content,
    Footer,
    Header
});
