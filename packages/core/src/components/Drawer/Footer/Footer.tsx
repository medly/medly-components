import { WithStyle } from '@medly-components/utils';
import React, { useContext } from 'react';
import { DrawerContext } from '../Drawer.context';
import { FooterStyled } from './Footer.styled';
import { Props } from './type';

export const Footer: React.FC<Props> & WithStyle = React.memo(props => {
    const { scrollState } = useContext(DrawerContext);
    return <FooterStyled showShadow={!scrollState.scrolledToBottom} {...props} />;
});

Footer.displayName = 'DrawerFooter';
Footer.Style = FooterStyled;
