import { defaultTheme } from '@medly-components/theme';
import { css, styled } from '@medly-components/utils';
import { Props } from './types';

export const SideNavStyled = styled('ul')<Props>`
    height: 100%;
    padding: 0px;
    margin: 0px;
    list-style-type: none;
    color: ${({ theme }) => theme.sidenav.textColor};

    li {
        border-bottom: 1px solid ${({ theme }) => theme.sidenav.itemBorderColor};
        background-color: #012040;
    }
`;

SideNavStyled.defaultProps = {
    theme: defaultTheme
};
