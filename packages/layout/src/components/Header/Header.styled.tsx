import { MenuIcon } from '@medly-components/icons';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.header.backgroundColor};
    height: ${({ theme }) => theme.header.height};
    position: relative;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.header.maxContentWidth};
    color: ${({ theme }) => theme.header.fontColor};
    padding: 0 3.5rem;
`;

export const HamburgerIcon = styled(MenuIcon)`
    @media (min-width: 960px) {
        display: none;
    }
`;
