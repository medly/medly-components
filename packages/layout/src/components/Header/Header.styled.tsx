import { MenuIcon } from '@medly-components/icons';
import { breakpoints, media, styled } from '@medly-components/utils';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.header.backgroundColor};
    height: ${({ theme }) => theme.header.height};
    position: relative;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.header.maxContentWidth};
    color: ${({ theme }) => theme.header.fontColor};
    padding: 0 1.6rem;

    ${({ theme }) => media(breakpoints(theme.breakpoints).up('M'))`
            padding: 0 3.2rem;
        `}
`;

export const HamburgerIcon = styled(MenuIcon)`
    ${({ theme }) => media(breakpoints(theme.breakpoints).up('L'))`
            display: none;
        `}
`;
