import { styled } from '@medly-components/utils';
import NavList from '../NavList';

export const ToggleContainer = styled(NavList)`
    min-height: ${({ theme }) => theme.sideNav.closeSize};
    flex: unset;
    display: flex;
    align-items: center;
    align-self: end;
    position: relative;
    width: 100%;
    margin-top: 2rem;

    &::before {
        content: '';
        width: calc(100% - ${({ theme }) => theme.spacing.M2});
        margin: 0 auto;
        display: block;
        position: absolute;
        border-top: 1px solid ${({ theme }) => theme.sideNav.separatorColor};
        top: 0;
        left: 0;
        right: 0;
    }
`;
