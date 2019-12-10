import { Text } from '@medly-components/core';
import { defaultTheme } from '@medly-components/theme';
import { css, styled } from '@medly-components/utils';
import SidePanel from '../SidePanel';
import SubNavList from './SubNavList';
import { Logo } from './TopNavItem/TopNavItem.styled';
import { SideNavStyledProps } from './types';

const openState = () => css`
    ${Text.Style} , ${Logo}{
        opacity: 1;
        transition: opacity 0.4s;
    }
`;

const closeState = () => css`
    ${Text.Style}, ${Logo} {
        opacity: 0;
        transition: opacity 0.2s;
    }

    ${SubNavList.Style} {
        max-height: 0px;
        transition: max-height 0.2s ease-out;
    }
`;

export const SideNav = styled(SidePanel)<SideNavStyledProps>`
    width: ${({ open, theme }) => (open ? theme.sideNav.openSize : theme.sideNav.closeSize)};
    background-color: ${({ theme }) => theme.sideNav.bgColor};
    display: flex;
    flex-direction: column;

    ul::-webkit-scrollbar {
        width: 5px;
        background-color: ${({ theme }) => theme.sideNav.bgColor};
    }

    ul::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: ${({ theme }) => theme.sideNav.scrollbarColor};
    }

    svg {
        * {
            fill: ${({ theme }) => theme.sideNav.iconColor};
        }
    }

    ${({ open }) => (open ? openState() : closeState())}
`;
SideNav.defaultProps = { theme: defaultTheme };
