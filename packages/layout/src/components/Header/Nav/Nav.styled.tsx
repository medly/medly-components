import { CloseIcon } from '@medly-components/icons';
import { breakpoints, media } from '@medly-components/utils';
import styled from 'styled-components';

export const BGOverlay = styled.div<{ isOpen: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    height: fill-available;
    background: ${({ theme }) => theme.colors.black};
    opacity: ${({ isOpen }) => (isOpen ? 0.5 : 0)};
    z-index: ${({ isOpen }) => (isOpen ? 1000 : -100)};
    transition: 0.5s;

    ${({ theme }) => media(breakpoints(theme.breakpoints).up('L'))`
        display: none;
    `}
`;

export const Container = styled.div<{ isOpen: boolean }>`
    position: absolute;
    height: 100vh;
    height: fill-available;
    width: 320px;
    top: 0;
    left: ${props => (props.isOpen ? 0 : '-320px')};
    transition: 0.5s;
    background: ${({ theme }) => theme.header.backgroundColor};
    padding: 1rem;
    z-index: 1001;
    box-sizing: border-box;

    ${({ theme }) => media(breakpoints(theme.breakpoints).up('L'))`
        padding: 0;
        width: auto;
        position: static;
        height: auto;
        z-index: auto;
    `}
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    ${({ theme }) => media(breakpoints(theme.breakpoints).up('L'))`
        display: inline-grid;
        grid-auto-flow: column;
        grid-column-gap: ${theme.header.nav.gutterSpace};
    `}
`;

export const NavCloseIcon = styled(CloseIcon)`
    margin: 0.6rem 0 4rem 0.6rem;

    ${({ theme }) => media(breakpoints(theme.breakpoints).up('L'))`
        display: none;
    `}
`;
