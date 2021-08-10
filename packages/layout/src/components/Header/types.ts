import { Theme } from '@medly-components/theme';
import React from 'react';
import { StyledComponent } from 'styled-components';
import { Context } from './Header.context';
import { NavProps } from './Nav/Nav';
import { NavItemProps } from './NavItem/NavItem.styled';

export type HeaderProps = {
    children?: React.ReactNode;
    withNav?: boolean;
};

export type HeaderStaticProps = {
    Context: React.Context<Context>;
    Nav: React.FC<NavProps>;
    NavItem: StyledComponent<'button', Theme, NavItemProps>;
};
