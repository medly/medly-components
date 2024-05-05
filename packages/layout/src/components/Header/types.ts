import { FC, Context as ReactContext } from 'react';
import { IStyledComponent } from 'styled-components';
import { Context } from './Header.context';
import { NavProps } from './Nav/Nav';
import { NavItemProps } from './NavItem/NavItem.styled';

export type HeaderProps = {
    withNav?: boolean;
};

export type HeaderStaticProps = {
    Context: ReactContext<Context>;
    Nav: FC<NavProps>;
    NavItem: IStyledComponent<'web', NavItemProps>;
};
