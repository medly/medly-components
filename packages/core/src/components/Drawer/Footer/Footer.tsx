import { WithStyle } from '@medly-components/utils';
import React, { useContext } from 'react';
import { DrawerContext } from '../Drawer.context';
import { FooterStyled } from './Footer.styled';
import { DrawerFooterProps } from './types';

const Component: React.FC<DrawerFooterProps> = React.memo(props => {
    const { id, scrollState } = useContext(DrawerContext);
    return <FooterStyled showShadow={!scrollState.scrolledToBottom} {...props} id={`${id}-footer`} />;
});

Component.displayName = 'DrawerFooter';
export const Footer: React.FC<DrawerFooterProps> & WithStyle = Object.assign(Component, { Style: FooterStyled });
