import { Text } from '@medly-components/core';
import styled from 'styled-components';
import SidePanel from '../SidePanel';
import { NavGroupStyled } from './NavGroup/NavGroup.styled';
import NavList from './NavList';
import { SideNavStyledProps } from './types';

export const Aside = styled(SidePanel)<SideNavStyledProps>`
    position: inherit;
    transition: width 200ms ease-out;
    width: ${({ isExpanded, theme }) => (isExpanded ? theme.sideNav.openSize : theme.sideNav.closeSize)};
    box-shadow: ${({ isHovered, isExpanded, hideShadow }) =>
        !isExpanded && isHovered ? 'none' : !hideShadow && `0.2rem 0 8px rgba(96, 120, 144, 0.2) `};
`;

export const Nav = styled('nav')<SideNavStyledProps>`
    height: 100%;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    overflow: hidden;
    transition: all 200ms ease-out;
    background-color: ${({ theme }) => theme.sideNav.bgColor};
    width: ${({ isHovered, isExpanded, theme }) => (isHovered || isExpanded ? theme.sideNav.openSize : theme.sideNav.closeSize)};
    box-shadow: ${({ isExpanded, isHovered, hideShadow }) =>
        !isExpanded && isHovered && !hideShadow ? `0.2rem 0 1.6rem #B0BCC8` : 'none'};

    & > ${NavList}:first-of-type {
        padding-top: 3.7rem;
        & > ${NavGroupStyled}:first-of-type > ${Text.Style} {
            margin-top: 0.6rem;
        }
    }
`;
