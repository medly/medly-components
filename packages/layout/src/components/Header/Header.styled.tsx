import { Logo } from '@medly-components/core';
import { MenuIcon } from '@medly-components/icons';
import { breakpoints, media } from '@medly-components/utils';
import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.header.backgroundColor};
    height: ${({ theme }) => theme.header.height.mobile};
    position: relative;

    ${({ theme }) => media(breakpoints(theme.breakpoints).up('M'))`
        height: ${theme.header.height.desktop};
    `}
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    position: relative;
    max-width: ${({ theme }) => theme.header.maxContentWidth};
    color: ${({ theme }) => theme.header.navItem.textColor.default};
    padding: 0 1.6rem;

    ${Logo.Style} {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    ${({ theme }) => media(breakpoints(theme.breakpoints).up('M'))`
        padding: 0 3.2rem;
    `}

    ${({ theme }) => media(breakpoints(theme.breakpoints).up('L'))`
         ${Logo.Style} {
            position: static;
            left: unset;
            transform: none;
        }
    `}
`;

export const HamburgerIcon = styled(MenuIcon)`
    ${({ theme }) => media(breakpoints(theme.breakpoints).up('L'))`
        display: none;
    `}
`;
