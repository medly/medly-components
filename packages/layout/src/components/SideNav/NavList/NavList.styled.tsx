import { defaultTheme } from '@medly-components/theme';
import styled from 'styled-components';

export const NavList = styled('ul')`
    flex: 1;
    padding: 0;
    margin: 0;
    list-style-type: none;
    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 0.5rem;
        background-color: ${({ theme }) => theme.sideNav.bgColor};
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        background-color: ${({ theme }) => theme.sideNav.scrollBarColor};
    }
`;

NavList.displayName = 'NavList';
NavList.defaultProps = {
    theme: defaultTheme
};
