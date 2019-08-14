import { Text } from '@medly-components/core';
import { BurgerIcon, SvgIcon } from '@medly-components/icons';
import { centerAligned, css, styled } from '@medly-components/utils';
import SidePanel from '../SidePanel';
import NavItem from './NavItem';
import NavList from './NavList';
import SubNavList from './SubNavList';
import { SideNavStyledProps } from './types';

export const Logo = styled('div')`
    padding-top: 11px;
`;

export const Icon = styled('div')`
    ${centerAligned()}
    
    min-width: ${({ theme }) => theme.sideNav.closeSize};
    min-height: ${({ theme }) => theme.sideNav.closeSize};
`;

export const BottomList = styled(NavList.Style)`
    flex: unset;
    overflow: unset;

    ${NavItem.Style} {
        overflow: unset;
    }

    ${Text.Style} {
        cursor: default;
    }
`;

const openState = () => css`
    ${Text.Style} , ${Logo}{
        opacity: 1;
        transition: opacity 0.4s;
    }

    ${SubNavList} {
        max-height: 500px;
        transition: all 0.4s;
    }
`;

const closeState = () => css`
    ${Text.Style}, ${Logo} {
        opacity: 0;
        transition: opacity 0.2s;
    }
    ${SubNavList} {
        max-height: 0px;
        transition: all 0.2s;
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

    ${BurgerIcon.Style} {
        * {
            background: ${({ theme }) => theme.sideNav.iconColor};
        }
    }

    ${({ open }) => (open ? openState() : closeState())}
`;
