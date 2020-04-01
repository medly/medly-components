import { Text } from '@medly-components/core';
import { defaultTheme } from '@medly-components/theme';
import { css, styled } from '@medly-components/utils';
import Dropdown from '../DropdownIcon';
import { NavItemStyledProps } from './types';

export const NavItemStyled = styled('li').attrs(({ theme: { sideNav } }) => ({ ...sideNav }))<NavItemStyledProps>`
    width: 100%;
    text-decoration: none;
    box-sizing: border-box;
    background-color: ${({ active, activeColor }) => (active ? activeColor : 'inherit')};
    display: grid;
    grid-template-areas:
        'icon header dropdownIcon'
        'submenu submenu submenu';
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: ${({ itemMinHeight }) => itemMinHeight} min-content;
    align-content: center;
    align-items: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    cursor:  ${({ showPointer }) => (showPointer ? 'pointer' : 'default')};
    ${({ containsSubList, active, activeBorderColor, borderColor }) =>
        !containsSubList &&
        css`
            border-bottom: 1px solid ${active ? activeBorderColor : borderColor};
        `}

    ${({ open }) =>
        open &&
        css`
            & > ${Dropdown} {
                transform: rotate(180deg);
            }
            & > ul {
                max-height: 90vh;
                transition: max-height 1s ease-out;
            }
        `}

      
    ${({ active, activeBorderColor }) =>
        active &&
        css`
            ul,
            li {
                border-color: ${activeBorderColor};
            }
        `}
    

    & > ${Text.Style} {
        grid-area: header;
        font-size: ${({ theme: { font }, textSize }) => font.sizes[textSize]};
        color: ${({ textColor }) => textColor};
        font-weight: ${({ active, theme }) => (active ? theme.font.weights.Strong : theme.font.weights.Regular)};
    }
`;

NavItemStyled.defaultProps = {
    theme: defaultTheme
};
