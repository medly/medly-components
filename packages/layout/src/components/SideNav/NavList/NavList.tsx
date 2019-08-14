import { WithStyle } from '@medly-components/utils';
import React from 'react';
import { NavListProps } from '../types';
import * as Styled from './NavList.styled';

const NavList: React.SFC<NavListProps> & WithStyle = props => {
    const { sidenavOpenHandler } = props;

    return (
        <Styled.NavList>
            {React.Children.map(props.children, child => {
                return React.cloneElement(child as any, { sidenavOpenHandler });
            })}
        </Styled.NavList>
    );
};

NavList.Style = Styled.NavList;

export default NavList;
