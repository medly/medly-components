import { styled } from '@medly-components/utils';
import BurgerIcon from '../BurgerIcon';
import NavItem from '../NavItem';

export const Logo = styled('div')``;

export const TopNavItem = styled(NavItem.Style)`
    background-color: ${({ theme }) => theme.sideNav.logoBgColor};
    border: 0;

    ${BurgerIcon.Style} {
        * {
            background: ${({ theme }) => theme.sideNav.iconColor};
        }
    }
`;
