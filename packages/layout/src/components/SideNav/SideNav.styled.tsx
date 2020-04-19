import { styled } from '@medly-components/utils';
import SidePanel from '../SidePanel';
import { SideNavStyledProps } from './types';

export const Aside = styled(SidePanel)<SideNavStyledProps>`
    position: inherit;
    width: ${({ isExpanded, theme }) => (isExpanded ? theme.sideNav.openSize : theme.sideNav.closeSize)};
    box-shadow: ${({ isHovered, isExpanded }) => (isHovered && !isExpanded ? 'none' : `0.2rem 0 8px rgba(96, 120, 144, 0.2) `)};
`;

export const Nav = styled('nav')<SideNavStyledProps>`
    height: 100%;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    transition: width 200ms, box-shadow 200ms;
    background-color: ${({ theme }) => theme.sideNav.bgColor};
    padding-right: ${({ isHovered, theme }) => (isHovered ? theme.spacing.S4 : 0)};
    width: ${({ isHovered, theme }) => (isHovered ? theme.sideNav.openSize : theme.sideNav.closeSize)};
    box-shadow: ${({ isExpanded, isHovered }) => (!isExpanded && isHovered ? `0.2rem 0 1.6rem #B0BCC8` : 'none')};
`;
