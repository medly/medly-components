import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import { NavItemProps } from '../types';
import { NavItemStyled } from './NavItem.styled';

export const NavItem: SFC<NavItemProps> & WithStyle = props => {
    const { active, openSideNavOnClick, sidenavOpenHandler, onClick, ...restProps } = props;

    const onClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
        event.stopPropagation();
        onClick && onClick(event);
        openSideNavOnClick && sidenavOpenHandler();
    };
    return <NavItemStyled {...{ ...restProps, active: `${active}` }} onClick={onClickHandler} />;
};
NavItem.defaultProps = {
    active: false,
    openSideNavOnClick: false
};

NavItem.Style = NavItemStyled;
