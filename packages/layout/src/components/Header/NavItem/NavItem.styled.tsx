import { breakpoints, media, styled } from '@medly-components/utils';

export type NavItemProps = { isActive?: boolean };
export const NavItem = styled.button<NavItemProps>`
    color: ${({ theme }) => theme.header.navItem.fontColor};
    padding: 0 1.2rem;
    border-radius: 1rem;
    background: ${({ theme, ...props }) => (props.isActive ? theme.header.navItem.activeColor : theme.header.backgroundColor)};
    border: none;
    font-family: inherit;
    text-decoration: none;
    font-size: 1.4rem;
    position: relative;
    height: ${({ theme }) => theme.header.navItem.height.mobile};
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 1.8rem;
    align-items: center;
    text-align: left;
    grid-auto-columns: max-content;
    cursor: pointer;

    ${({ theme, isActive }) => media(breakpoints(theme.breakpoints).up('L'))`
        background: ${theme.header.backgroundColor};
        grid-column-gap: 0.8rem;
        height: ${theme.header.navItem.height.desktop};
        letter-spacing: -0.04rem;
        font-weight: ${isActive ? theme.font.weights.Medium : theme.font.weights.Regular};
        padding: 0 1.6rem;

        &::before {
            display: ${isActive ? 'block' : 'none'};
            content: '';
            position: absolute;
            width: calc(100% - 1.6rem * 2);
            top: calc((${theme.header.navItem.height.desktop} - ${theme.header.height.desktop}) / 2);
            left: 1.6rem;
            background: ${theme.header.navItem.activeIndicatorColor};
            height: 4px;
            border-radius: 0 0 2px 2px;
        }

        &:hover {
            background-color: ${theme.header.navItem.hoverColor};
        }
    `}

    &:active {
        background-color: ${({ theme }) => theme.header.navItem.activeColor};
    }
`;
