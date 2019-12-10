import { Text } from '@medly-components/core';
import { styled } from '@medly-components/utils';
import NavItem from '../NavItem';
import NavList from '../NavList';

export const BottomList = styled(NavList)`
    flex: unset;
    overflow: unset;

    background-color: ${({ theme }) => theme.sideNav.bottomListBgColor};

    ${NavItem.Style} {
        overflow: unset;
    }

    ${Text.Style} {
        cursor: default;
    }
`;
