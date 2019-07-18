import { WithStyle } from '@medly-components/utils';
import React from 'react';
import { NavItemProps } from '../types';
import { NavItemStyled } from './NavItem.styled';

const NavItem: React.SFC<NavItemProps> & WithStyle = props => {
    const { active, openSideNavOnClick, sidenavOpenHandler, onClick, ...restProps } = props;

    const onClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
        onClick && onClick(event);
        openSideNavOnClick && sidenavOpenHandler();
    };
    return <NavItemStyled {...{ ...restProps, active: `${active}` }} onClick={onClickHandler} />;
};

NavItem.Style = NavItemStyled;

export default NavItem;
