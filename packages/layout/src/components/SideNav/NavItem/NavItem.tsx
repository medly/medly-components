import { WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback, useContext, useMemo } from 'react';
import SideNavContext from '../SideNav.context';
import { NavItemStyled } from './NavItem.styled';
import { NavItemProps } from './types';

export const NavItem: SFC<NavItemProps> & WithStyle = props => {
    const { activeItem, activeItemChangeHandler, isHovered, isExpanded } = useContext(SideNavContext),
        { path, onClick, to, ...restProps } = props;

    const isActive = useMemo(() => path === activeItem || to === activeItem, [to, path, activeItem]),
        onClickHandler = useCallback(
            (event: React.MouseEvent<HTMLLIElement>) => {
                event.stopPropagation();
                onClick && onClick(event);
                (path || to) && activeItemChangeHandler(path || to);
            },
            [onClick, path]
        );

    return <NavItemStyled {...{ ...restProps, isHovered, isExpanded, isActive }} onClick={onClickHandler} />;
};

NavItem.displayName = 'NavItem';
NavItem.Style = NavItemStyled;
