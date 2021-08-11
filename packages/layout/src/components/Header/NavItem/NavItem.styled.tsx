import styled from 'styled-components';

export type NavItemProps = { isActive?: boolean };
export const NavItem = styled.button<NavItemProps>`
    color: ${({ theme }) => theme.header.navItem.fontColor};
    padding: 0 1.6rem;
    border-radius: 1rem;
    background: ${({ theme, ...props }) => (props.isActive ? theme.header.navItem.activeColor : theme.header.backgroundColor)};
    border: none;
    font-family: inherit;
    text-decoration: none;
    font-size: 1.4rem;
    position: relative;
    height: ${({ theme }) => theme.header.navItem.height};
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 1.8rem;
    align-items: center;
    text-align: left;
    grid-auto-columns: max-content;

    @media (min-width: 960px) {
        background: ${({ theme }) => theme.header.backgroundColor};
        grid-column-gap: 0.8rem;

        &::before {
            display: ${props => (props.isActive ? 'block' : 'none')};
            content: '';
            position: absolute;
            width: 100%;
            top: calc((${({ theme }) => theme.header.navItem.height} - ${({ theme }) => theme.header.height}) / 2);
            left: 0;
            background: ${({ theme }) => theme.header.navItem.activeIndicatorColor};
            height: 4px;
            border-radius: 0 0 2px 2px;
        }

        &:hover {
            background-color: ${({ theme }) => theme.header.navItem.hoverColor};
        }
    }

    &:active {
        background-color: ${({ theme }) => theme.header.navItem.activeColor};
    }
`;
