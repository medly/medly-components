import { Theme } from '@medly-components/theme';
import { Context as ReactContext, FC } from 'react';
import { StyledComponent } from 'styled-components';
import { Context } from './Header.context';
import { NavProps } from './Nav/Nav';
import { NavItemProps } from './NavItem/NavItem.styled';

export type HeaderProps = {
    withNav?: boolean;
};

export type HeaderStaticProps = {
    Context: ReactContext<Context>;
    Nav: FC<NavProps>;
    NavItem: StyledComponent<'button', Theme, NavItemProps>;
};
