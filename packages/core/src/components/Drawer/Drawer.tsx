import { useKeyPress, WithStyle } from '@medly-components/utils';
import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { reducer } from '../Modal/scrollStateReducer';
import Content from './Content';
import { DrawerContext } from './Drawer.context';
import { DrawerBackground, DrawerStyled } from './Drawer.styled';
import Footer from './Footer';
import Header from './Header';
import { DrawerStaticProps, Props } from './types';

export const Drawer: React.FC<Props> & WithStyle & DrawerStaticProps = React.memo(
    React.forwardRef<HTMLDivElement, Props>(({ onClose, open, width, children, position, ...props }, ref) => {
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
                <DrawerBackground onClick={onClose} ref={ref} open={open} {...props}>
                    <DrawerStyled
                        position={position}
                        onClick={stopPropagation}
                        width={width}
                        open={open}
                        onAnimationEnd={handleAnimationEnd}
                    >
                        <DrawerContext.Provider value={{ scrollState, dispatch, onClose }}>{children}</DrawerContext.Provider>
                    </DrawerStyled>
                </DrawerBackground>
            )
        );
    })
);

Drawer.displayName = 'Drawer';
Drawer.defaultProps = {
    open: false,
    position: 'right',
    width: '40rem'
};
Drawer.Style = DrawerBackground;
Drawer.Content = Content;
Drawer.Footer = Footer;
Drawer.Header = Header;
