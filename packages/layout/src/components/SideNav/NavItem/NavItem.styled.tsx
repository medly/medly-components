import { Text } from '@medly-components/core';
import { defaultTheme } from '@medly-components/theme';
import { css, styled } from '@medly-components/utils';
import { NavItem } from '../types';

const isActive = () => css`
    margin-left: 8px;
    padding: 20px 24px;

    ${Text.Style} {
        font-weight: ${({ theme }) => theme.font.weights.Strong};
    }
`;

export const NavItemStyled = styled('div')<NavItem>`
    padding: 20px 32px;
    background-color: ${({ theme }) => theme.sidenav.bgColor};

    ${props => props.active && isActive()}
`;

NavItemStyled.defaultProps = {
    theme: defaultTheme
};
