import { styled } from '@medly-components/utils';
import NavList from '../NavList';

export const BottomList = styled(NavList)`
    flex: unset;
    overflow: unset;
    background-color: ${({ theme }) => theme.sideNav.bottomListBgColor};
`;
