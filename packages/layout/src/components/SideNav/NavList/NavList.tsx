import { WithStyle } from '@medly-components/utils';
import React, { useState } from 'react';
import * as Styled from './NavList.styled';
import { NavListProps } from './types';

export const NavList: React.SFC<NavListProps> & WithStyle = props => {
    const { sidenavOpenHandler } = props,
        [openItem, setOpenItem] = useState();

    return (
        <Styled.NavList>
            {React.Children.map(props.children, child => {
                return React.cloneElement(child as any, { sidenavOpenHandler, openItem, setOpenItem });
            })}
        </Styled.NavList>
    );
};

NavList.Style = Styled.NavList;
