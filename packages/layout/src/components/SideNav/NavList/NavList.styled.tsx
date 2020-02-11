import { defaultTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import { NavListProps } from './types';

export const NavList = styled('ul')<NavListProps>`
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0px;
    margin: 0px;
    list-style-type: none;
    color: ${({ theme }) => theme.sideNav.textColor};
`;

NavList.defaultProps = {
    theme: defaultTheme
};
