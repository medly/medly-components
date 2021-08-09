import styled from 'styled-components';

const navItemGap = '18px';

export type NavItemProps = { isActive?: boolean };
export const NavItem = styled.button<NavItemProps>`
    color: ${({ theme }) => theme.navBar.navItem.fontColor};
    padding: 0 1.6rem;
    border-radius: 1rem;
    background: ${({ theme, ...props }) => props.isActive ? theme.navBar.navItem.activeColor : 'transparent'};
    border: none;
    font-family: inherit;
    text-decoration: none;
    font-size: 1.4rem;
    position: relative;
    height: calc(${({ theme }) => theme.navBar.height} - ${navItemGap});
    display: flex;
    align-items: center;

    @media (min-width: 960px) {
        background: transparent;

        &::before {
            display: ${props => props.isActive ? 'block' : 'none'};
            content: '';
            position: absolute;
            width: 100%;
            top: calc(-${navItemGap} / 2);
            left: 0;
            background: ${({ theme }) => theme.navBar.navItem.activeIndicatorColor};
            height: 4px;
            border-radius: 0 0 2px 2px;
        }

        &:hover {
            background-color: ${({ theme }) => theme.navBar.navItem.hoverColor};
        }
    }

    &:active {
        background-color: ${({ theme }) => theme.navBar.navItem.activeColor};
    }
`;
