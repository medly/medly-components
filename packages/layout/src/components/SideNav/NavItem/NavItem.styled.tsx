import { Text } from '@medly-components/core';
import { SvgIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import { NavItem } from '../types';

export const NavItemStyled = styled('li')<NavItem>`
    width: 100%;
    text-decoration: none;
    height: ${({ theme }) => theme.sideNav.closeSize};
    display: inline-flex;
    align-items: center;
    background-color: ${({ active, theme }) => (active ? theme.sideNav.activeColor : 'transparent')};
    cursor: pointer;

    ${SvgIcon} {
        font-size: ${({ theme: { icon, sideNav } }) => icon.sizes[sideNav.iconSize]};
    }

    ${Text.Style} {
        font-size: ${({ theme: { font, sideNav } }) => font.sizes[sideNav.textSize]};
        color: ${({ theme: { sideNav } }) => sideNav.textColor};
    }
`;

NavItemStyled.defaultProps = {
    theme: defaultTheme
};
