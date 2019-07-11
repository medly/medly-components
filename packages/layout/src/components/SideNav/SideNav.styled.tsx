import { Text } from '@medly-components/core';
import { BurgerIcon, SvgIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { centerAligned, css, styled } from '@medly-components/utils';
import SidePanel from '../SidePanel';
import SubNavList from './SubNavList';
import { SideNavStyledProps } from './types';

const openState = () => css`
    ${Text.Style} {
        opacity: 1;
        transition: opacity 0.3s;
    }
    ${SubNavList} {
        max-height: 500px;
        transition: all 0.3s;
    }
`;

const closeState = () => css`
    ${Text.Style} {
        opacity: 0;
        transition: opacity 02s;
    }
    ${SubNavList} {
        max-height: 0px;
        transition: all 0.2s;
    }
`;

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

    ${({ open }) => (open ? openState() : closeState())}
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
