import { Text } from '@medly-components/core';
import { SvgIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { getFontStyle } from '@medly-components/utils';
import styled, { css } from 'styled-components';
import { NavItemStyledProps } from './types';

const getStyle = ({ state }: NavItemStyledProps & { state: 'default' | 'hovered' | 'pressed' | 'active' }) => css`
    background-color: ${({ theme }) => theme.sideNav.navItem.bgColor[state]};
    ${SvgIcon} {
        * {
            fill: ${({ theme }) => theme.sideNav.navItem.icon.color[state]};
        }
    }
    ${Text.Style} {
        color: ${({ theme }) => theme.sideNav.navItem.text.color[state]};
    }
`;
export const NavItemStyled = styled('li')<NavItemStyledProps>`
    text-decoration: none;
    box-sizing: border-box;
    display: grid;
    margin: 0 1.2rem;
    border-radius: ${({ theme }) => theme.sideNav.navItem.borderRadius};
    box-shadow: ${({ theme, isActive }) => isActive && `0 0 2.4rem ${theme.colors.grey[100]}`};
    grid-template-columns: ${({ theme }) =>
        `calc(${theme.sideNav.closeSize} - 1.2rem) calc(${theme.sideNav.openSize} - ${theme.sideNav.closeSize} - 1.2rem) `};
    justify-items: flex-start;
    align-items: center;
    user-select: none;
    min-height: ${({ theme }) => theme.sideNav.navItem.minHeight};
    transition: all 100ms ease-out;
    cursor: pointer;

    ${SvgIcon} {
        overflow: visible;
        border-radius: ${({ theme }) => theme.sideNav.navItem.borderRadius};
        padding: ${({ theme }) =>
            `calc((${theme.sideNav.navItem.minHeight} - ${theme.icon.sizes[theme.sideNav.navItem.icon.size].iconSize}) / 2) `};
        font-size: ${({ theme }) => theme.icon.sizes[theme.sideNav.navItem.icon.size].iconSize};
    }

    ${Text.Style} {
        text-overflow: ellipsis;
        white-space: nowrap;
        justify-self: left;
        overflow: hidden;
        transition: opacity 200ms ease-out, color 100ms ease-out;
        opacity: ${({ isHovered, isExpanded }) => (isHovered || isExpanded ? 1 : 0)};
        ${({ theme, isActive }) =>
            getFontStyle({ theme, fontVariant: theme.sideNav.navItem.text.textVariant, fontWeight: isActive ? 'Medium' : 'Regular' })}
    }

    ${props => getStyle({ ...props, state: props.isActive ? 'active' : 'default' })};
    &:hover {
        ${props => !props.isActive && getStyle({ ...props, state: 'hovered' })};
    }
    &:active {
        ${props => !props.isActive && getStyle({ ...props, state: 'pressed' })};
    }
`;

NavItemStyled.defaultProps = {
    theme: defaultTheme
};
