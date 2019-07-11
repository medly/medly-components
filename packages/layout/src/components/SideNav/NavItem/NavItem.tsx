import { WithStyle } from '@medly-components/utils';
import React from 'react';
import { NavItemProps } from '../types';
import { NavItemStyled } from './NavItem.styled';

const NavItem: React.SFC<NavItemProps> & WithStyle = props => {
    const { active, sidenavOpenCloseOnClick, sidenavCloseHandler, ...restProps } = props;

    const onClickHandler = () => {
        sidenavOpenCloseOnClick && sidenavCloseHandler();
    };
    return <NavItemStyled {...{ ...restProps, isActive: active }} onClick={onClickHandler} />;
};

NavItem.Style = NavItemStyled;

export default NavItem;
