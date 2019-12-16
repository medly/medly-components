import { WithStyle } from '@medly-components/utils';
import React, { SFC, useContext } from 'react';
import OnChangeContext from '../OnChangeContext';
import { NavItemStyled } from './NavItem.styled';
import { NavItemProps } from './types';

export const NavItem: SFC<NavItemProps> & WithStyle = props => {
    const [activeItem, changeActiveItem] = useContext(OnChangeContext),
        { path, openSideNavOnClick, sidenavOpenHandler, onClick, openItem, leftPadding, setOpenItem, ...restProps } = props,
        containsSubList = !!React.Children.toArray(props.children).find((child: any) => child.type.displayName === 'SubNavList');

    const onClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
        event.stopPropagation();
        onClick && onClick(event);
        path && setOpenItem(path === openItem ? '' : path);
        path && !containsSubList && changeActiveItem(path);
        openSideNavOnClick && sidenavOpenHandler();
    };

    const isOpen = path === openItem,
        isActive = containsSubList && activeItem ? activeItem.startsWith(path) : path === activeItem;

    return (
        <NavItemStyled
            {...{ ...restProps, path, containsSubList }}
            open={isOpen}
            active={isActive}
            showPointer={!!(path || onClick)}
            onClick={onClickHandler}
        >
            {React.Children.map(props.children, child => {
                return React.cloneElement(child as any, { leftPadding, showDropdownIcon: containsSubList });
            })}
        </NavItemStyled>
    );
};
NavItem.defaultProps = {
    openSideNavOnClick: false
};

NavItem.Style = NavItemStyled;
