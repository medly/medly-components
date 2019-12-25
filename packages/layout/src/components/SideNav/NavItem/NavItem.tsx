import { WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback, useContext, useMemo } from 'react';
import OnChangeContext from '../OnChangeContext';
import { NavItemStyled } from './NavItem.styled';
import { NavItemProps } from './types';

export const NavItem: SFC<NavItemProps> & WithStyle = props => {
    const [activeItem, changeActiveItem] = useContext(OnChangeContext),
        { path, openSideNavOnClick, sidenavOpenHandler, onClick, openItem, leftPadding, setOpenItem, ...restProps } = props,
        containsSubList = useMemo(
            () => !!React.Children.toArray(props.children).find((child: any) => child.type.displayName === 'SubNavList'),
            [props.children]
        );

    const onClickHandler = useCallback(
        (event: React.MouseEvent<HTMLLIElement>) => {
            event.stopPropagation();
            onClick && onClick(event);
            path && setOpenItem(path === openItem ? '' : path);
            path && !containsSubList && changeActiveItem(path);
            openSideNavOnClick && sidenavOpenHandler();
        },
        [onClick, path, openItem, containsSubList, openSideNavOnClick, sidenavOpenHandler]
    );

    const isOpen = useMemo(() => path === openItem, [path, openItem]),
        showPointer = useMemo(() => !!(path || onClick), [path, onClick]),
        isActive = useMemo(() => (containsSubList && activeItem ? activeItem.startsWith(path) : path === activeItem), [
            path,
            activeItem,
            containsSubList
        ]);

    return (
        <NavItemStyled
            {...{ ...restProps, path, containsSubList }}
            open={isOpen}
            active={isActive}
            showPointer={showPointer}
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
NavItem.displayName = 'NavItem';
NavItem.Style = NavItemStyled;
