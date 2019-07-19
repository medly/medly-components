import { Text } from '@medly-components/core';
import { SvgIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import { NavItemStyledProps } from '../types';

export const NavItemStyled = styled('li')<NavItemStyledProps>`
    width: 100%;
    text-decoration: none;
    box-sizing: border-box;
    background-color: ${({ active, theme }) => (active === 'true' ? theme.sideNav.activeColor : 'transparent')};

    display: grid;
    grid-template-areas:
        'icon header'
        'icon submenu';
    grid-template-rows: ${({ theme }) => theme.sideNav.closeSize} auto;
    grid-template-columns: ${({ theme }) => theme.sideNav.closeSize} auto;
    align-items: center;
    min-height: 35px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    user-select: none;
    cursor: pointer;

    ${SvgIcon} {
        grid-area: icon;
        font-size: ${({ theme: { icon, sideNav } }) => icon.sizes[sideNav.iconSize]};
    }

    & > ${Text.Style} {
        grid-area: header;
        font-size: ${({ theme: { font, sideNav } }) => font.sizes[sideNav.textSize]};
        color: ${({ theme: { sideNav } }) => sideNav.textColor};
        font-weight: ${({ active, theme }) => (active === 'true' ? theme.font.weights.Strong : theme.font.weights.Normal)};
    }
`;

NavItemStyled.defaultProps = {
    theme: defaultTheme
};
