import { WithStyle } from '@medly-components/utils';
import React from 'react';
import { NavItemStyled } from './NavItem/NavItem.styled';
import { SideNavStyled } from './SideNav.styled';
import { Props, SideNaveStaticProps } from './types';

export const SideNav: React.SFC<Props> & WithStyle & SideNaveStaticProps = props => {
    return (
        <SideNavStyled {...props}>
            {React.Children.map(props.children, (c, i) => {
                return <li key={i}>{c}</li>;
            })}
        </SideNavStyled>
    );
};

SideNav.NavItem = NavItemStyled;
SideNav.displayName = 'SideNav';
SideNav.Style = SideNavStyled;

export default SideNav;
