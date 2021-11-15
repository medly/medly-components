import { WithStyle } from '@medly-components/utils';
import { useContext, memo } from 'react';
import { DrawerContext } from '../Drawer.context';
import { FooterStyled } from './Footer.styled';
import { DrawerFooterProps } from './types';
import type { FC } from 'react';

const Component: FC<DrawerFooterProps> = memo(props => {
    const { id, scrollState } = useContext(DrawerContext);
    return <FooterStyled showShadow={!scrollState.scrolledToBottom} {...props} id={`${id}-footer`} />;
});

Component.displayName = 'DrawerFooter';
export const Footer: FC<DrawerFooterProps> & WithStyle = Object.assign(Component, { Style: FooterStyled });
