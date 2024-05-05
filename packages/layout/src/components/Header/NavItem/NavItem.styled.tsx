import { breakpoints, media } from '@medly-components/utils';
import styled, { css } from 'styled-components';

const style = (state: 'default' | 'hovered' | 'pressed' | 'active') => css`
    color: ${({ theme }) => theme.header.navItem.textColor[state]};
    background: ${({ theme }) => theme.header.navItem.bgColor[state]};

    svg {
        * {
            fill: ${({ theme }) => theme.header.navItem.textColor[state]};
        }
    }
`;

export type NavItemProps = { isActive?: boolean };

export const NavItem = styled.button<NavItemProps>`
    color: ${({ theme }) => theme.header.navItem.textColor.default};
    padding: 0 1.2rem;
    border-radius: 0.4rem;
    border: none;
    font-family: inherit;
    text-decoration: none;
    font-size: 1.6rem;
    line-height: 2rem;
    position: relative;
    height: ${({ theme }) => theme.header.navItem.height.mobile};
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 1.8rem;
    align-items: center;
    text-align: left;
    grid-auto-columns: max-content;
    cursor: pointer;
    transition: all 100ms ease-out;

    ${({ isActive }) => style(isActive ? 'active' : 'default')};

    :hover {
        ${style('hovered')};
    }

    :active {
        ${style('pressed')};
    }

    &::after {
        content: '';
        position: absolute;
        display: ${({ isActive }) => (isActive ? 'block' : 'none')};
        background: ${({ theme }) => theme.header.navItem.activeIndicatorColor};
        width: 0.6rem;
        left: -1rem;
        height: 100%;
    }

    ${({ theme }) => media(breakpoints(theme.breakpoints).up('L'))`
        background: ${theme.header.backgroundColor};
        grid-column-gap: 0.8rem;
        height: ${theme.header.navItem.height.desktop};
        font-weight: ${theme.font.weights.Medium};
        padding: 0 1.6rem;

        &::after {
            bottom: calc((${theme.header.navItem.height.desktop} - ${theme.header.height.desktop}) / 2);
            width: calc(100% - 1.6rem * 2);
            left: 1.6rem;
            height: 0.6rem;
        }
    `}

    &:active {
        background-color: ${({ theme }) => theme.header.navItem.bgColor.active};
    }
`;
