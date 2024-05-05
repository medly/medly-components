import { WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { memo, useContext } from 'react';
import { DrawerContext } from '../Drawer.context';
import { FooterStyled } from './Footer.styled';
import { DrawerFooterProps } from './types';

const Component: FCC<DrawerFooterProps> = memo(props => {
    const { id, scrollState } = useContext(DrawerContext);
    return <FooterStyled showShadow={!scrollState.scrolledToBottom} {...props} id={`${id}-footer`} />;
});

Component.displayName = 'DrawerFooter';
export const Footer: FCC<DrawerFooterProps> & WithStyle = Object.assign(Component, { Style: FooterStyled });
