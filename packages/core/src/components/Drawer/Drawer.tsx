import React, { useCallback, useReducer } from 'react';
import { WithStyle, useOuterClickNotifier, useCombinedRefs } from '@medly-components/utils';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { DrawerStyled } from './Drawer.styled';
import { DrawerContext } from './Drawer.context';
import { DrawerStaticProps, Props } from './types';
import { reducer } from '../Modal/scrollStateReducer';

export const Drawer: React.FC<Props> & WithStyle & DrawerStaticProps = React.memo(
    React.forwardRef(({ onClose, open, width, children, position }, ref) => {
        const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []),
            drawerRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null)),
            [scrollState, dispatch] = useReducer(reducer, { scrolledToTop: true, scrolledToBottom: false, scrollPosition: 0 });

        useOuterClickNotifier(() => onClose(), drawerRef);

        return (
            open && (
                <DrawerStyled position={position} onClick={stopPropagation} width={width} ref={drawerRef}>
                    <DrawerContext.Provider value={{ scrollState, dispatch, onClose }}>{children}</DrawerContext.Provider>
                </DrawerStyled>
            )
        );
    })
);

Drawer.displayName = 'Drawer';
Drawer.defaultProps = {
    open: false,
    position: 'right',
    width: '32rem'
};
Drawer.Style = DrawerStyled;
Drawer.Content = Content;
Drawer.Footer = Footer;
Drawer.Header = Header;
