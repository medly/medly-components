import { defaultTheme } from '@medly-components/theme';
import { css, styled } from '@medly-components/utils';
import { Props } from './types';

export const SideNavStyled = styled('ul')<Props>`
    height: 100%;
    list-style-type: none;
    color: ${({ theme }) => theme.sidenav.textColor};

    li {
        border: 1px solid ${({ theme }) => theme.sidenav.itemBorderColor};
        background-color: #012040;
    }

    li + li {
        border-top: none;
    }
`;

SideNavStyled.defaultProps = {
    theme: defaultTheme
};
