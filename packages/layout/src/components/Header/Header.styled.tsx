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
    padding: 0 1.6rem;

    /* stylelint-disable */
    @media (min-width: ${({ theme }) => theme.header.breakpoints.mobile}) {
        /* stylelint-enable */
        padding: 0 3.2rem;
    }
`;

export const HamburgerIcon = styled(MenuIcon)`
    /* stylelint-disable */
    @media (min-width: ${({ theme }) => theme.header.breakpoints.desktop}) {
        /* stylelint-enable */
        display: none;
    }
`;
