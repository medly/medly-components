import { Text } from '@medly-components/core';
import { BurgerIcon, SvgIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { centerAligned, styled } from '@medly-components/utils';
import SidePanel from '../SidePanel';
import { SideNavStyledProps } from './types';

export const SideNavStyled = styled(SidePanel)<SideNavStyledProps>`
    width: ${({ open, theme }) => (open ? theme.sideNav.openSize : theme.sideNav.closeSize)};
    background-color: ${({ theme }) => theme.sideNav.bgColor};

    ${SvgIcon} {
        * {
            fill: ${({ theme }) => theme.sideNav.iconColor};
        }
    }

    ${BurgerIcon.Style} {
        * {
            background: ${({ theme }) => theme.sideNav.iconColor};
        }
    }

    ${Text.Style} {
        opacity: ${({ open }) => (open ? 1 : 0)};
        transition: 0.2s;
    }
`;
SideNavStyled.defaultProps = {
    theme: defaultTheme
};

export const SideNavIconStyled = styled('div')`
    ${centerAligned()}
    
    min-width: ${({ theme }) => theme.sideNav.closeSize};
    min-height: ${({ theme }) => theme.sideNav.closeSize};
`;
SideNavIconStyled.defaultProps = {
    theme: defaultTheme
};
