import { defaultTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import { NavListProps } from '../types';

export const NavListStyled = styled('ul')<NavListProps>`
    height: 100%;
    padding: 0px;
    margin: 0px;
    list-style-type: none;
    color: ${({ theme }) => theme.sideNav.textColor};
`;

NavListStyled.defaultProps = {
    theme: defaultTheme
};
