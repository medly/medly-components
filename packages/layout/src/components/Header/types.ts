import React from 'react';
import { NavProps } from './Nav/Nav';
import { Context } from './Header.context';
import { StyledComponent } from 'styled-components';
import { Theme } from '@medly-components/theme';
import { NavItemProps } from './NavItem/NavItem.styled';

export type HeaderProps = { children?: React.ReactNode };
export type HeaderStaticProps = {
    Context: React.Context<Context>,
    Nav: React.FC<NavProps>,
    NavItem: StyledComponent<'button', Theme, NavItemProps>,
};
