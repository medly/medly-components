import styled from 'styled-components';
import { MenuIcon } from '@medly-components/icons';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.navBar.backgroundColor};
    height: ${({ theme }) => theme.navBar.height};
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.navBar.maxContentWidth};
    color: ${({ theme }) => theme.navBar.fontColor};
    padding: 0 3.5rem;
`;

export const HamburgerIcon = styled(MenuIcon)`
    @media (min-width: 960px) {
        display: none;
    }
`;
