import { Text } from '@medly-components/core';
import { WithStyle } from '@medly-components/utils';
import { FC, useContext } from 'react';
import NavList from '../NavList';
import SideNavContext from '../SideNav.context';
import { NavGroupStyled } from './NavGroup.styled';
import { NavGroupProps } from './types';

export const NavGroup: FC<NavGroupProps> & WithStyle = props => {
    const { isHovered, isExpanded } = useContext(SideNavContext),
        { title, children, ...restProps } = props;

    return (
        <NavGroupStyled {...restProps} showTitle={isHovered || isExpanded}>
            <Text textVariant="h5" uppercase>
                {title}
            </Text>
            <NavList>{children}</NavList>
        </NavGroupStyled>
    );
};

NavGroup.displayName = 'NavGroup';
NavGroup.Style = NavGroupStyled;
