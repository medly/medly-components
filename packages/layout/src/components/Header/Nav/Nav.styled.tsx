import { CloseIcon } from '@medly-components/icons';
import styled from 'styled-components';

export const BGOverlay = styled.div<{ isOpen: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.colors.black};
    opacity: ${({ isOpen }) => (isOpen ? 0.5 : 0)};
    z-index: ${({ isOpen }) => (isOpen ? 1000 : -100)};
    transition: 0.5s;

    /* stylelint-disable */
    @media (min-width: ${({ theme }) => theme.header.breakpoints.desktop}) {
        /* stylelint-enable */
        display: none;
    }
`;

export const Container = styled.div<{ isOpen: boolean }>`
    position: absolute;
    height: 100vh;
    width: 320px;
    top: 0;
    left: ${props => (props.isOpen ? 0 : '-320px')};
    transition: 0.5s;
    background: ${({ theme }) => theme.header.backgroundColor};
    padding: 1rem;
    z-index: 1001;
    box-sizing: border-box;

    /* stylelint-disable */
    @media (min-width: ${({ theme }) => theme.header.breakpoints.desktop}) {
        /* stylelint-enable */
        padding: 0;
        width: auto;
        position: static;
        height: auto;
        z-index: auto;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    /* stylelint-disable */
    @media (min-width: ${({ theme }) => theme.header.breakpoints.desktop}) {
        /* stylelint-enable */
        display: grid;
        grid-auto-flow: column;
        grid-column-gap: ${({ theme }) => theme.header.nav.gutterSpace};
    }
`;

export const NavCloseIcon = styled(CloseIcon)`
    margin: 0.6rem 0 4rem 0.6rem;

    /* stylelint-disable */
    @media (min-width: ${({ theme }) => theme.header.breakpoints.desktop}) {
        /* stylelint-enable */
        display: none;
    }
`;
