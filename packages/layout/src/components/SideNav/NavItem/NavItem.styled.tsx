import { Text } from '@medly-components/core';
import { SvgIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { getFontStyle } from '@medly-components/utils';
import styled, { css } from 'styled-components';
import { NavItemStyledProps } from './types';

const getStyle = ({ navItem, state }: NavItemStyledProps & { state: 'default' | 'hovered' | 'pressed' | 'active' }) => css`
    background-color: ${navItem.bgColor[state]};
    ${SvgIcon} {
        * {
            fill: ${navItem.icon.color[state]};
        }
    }
    ${Text.Style} {
        color: ${navItem.text.color[state]};
    }
`;
export const NavItemStyled = styled('li').attrs(({ theme: { sideNav } }) => ({ ...sideNav }))<NavItemStyledProps>`
    text-decoration: none;
    box-sizing: border-box;
    display: grid;
    margin: 0 1.2rem;
    border-radius: ${({ navItem }) => navItem.borderRadius};
    box-shadow: ${({ theme, isActive }) => isActive && `0 0 2.4rem ${theme.colors.grey[100]}`};
    grid-template-columns: ${({ openSize, closeSize }) => `calc(${closeSize} - 1.2rem) calc(${openSize} - ${closeSize} - 1.2rem) `};
    justify-items: flex-start;
    align-items: center;
    user-select: none;
    min-height: ${({ navItem }) => navItem.minHeight};
    transition: all 100ms ease-out;
    cursor: pointer;

    ${SvgIcon} {
        overflow: visible;
        border-radius: ${({ navItem }) => navItem.borderRadius};
        padding: ${({ navItem, theme }) => `calc((${navItem.minHeight} - ${theme.icon.sizes[navItem.icon.size].iconSize}) / 2) `};
        font-size: ${({ theme, navItem }) => theme.icon.sizes[navItem.icon.size].iconSize};
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
