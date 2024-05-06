import { WithStyle } from '@medly-components/utils';
import { FCC, MouseEvent, useCallback, useContext, useMemo } from 'react';
import SideNavContext from '../SideNav.context';
import { NavItemStyled } from './NavItem.styled';
import { NavItemProps } from './types';

export const NavItem: FCC<NavItemProps> & WithStyle = props => {
    const { activeItem, activeItemChangeHandler, isHovered, isExpanded } = useContext(SideNavContext),
        { path, onClick, to, ...restProps } = props;

    const isActive = useMemo(() => path === activeItem || to === activeItem, [to, path, activeItem]),
        onClickHandler = useCallback(
            (event: MouseEvent<HTMLLIElement>) => {
                const newItem = path || to;
                event.stopPropagation();
                onClick && onClick(event);
                newItem && activeItemChangeHandler(newItem);
            },
            [onClick, path]
        );

    return <NavItemStyled {...{ ...restProps, isHovered, isExpanded, isActive }} onClick={onClickHandler} />;
};

NavItem.displayName = 'NavItem';
NavItem.Style = NavItemStyled;
