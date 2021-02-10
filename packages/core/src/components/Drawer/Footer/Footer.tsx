import React, { useContext } from 'react';
import { WithStyle } from '@medly-components/utils';
import { FooterStyled } from './Footer.styled';
import { DrawerContext } from '../Drawer.context';

export const Footer: React.FC & WithStyle = React.memo(({ children }) => {
    const { scrollState } = useContext(DrawerContext);
    return <FooterStyled showShadow={!scrollState.scrolledToBottom}>{children}</FooterStyled>;
});

Footer.displayName = 'DrawerFooter';
Footer.Style = FooterStyled;
