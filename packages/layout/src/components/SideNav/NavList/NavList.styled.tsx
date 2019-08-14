import { SvgIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import { NavListProps } from '../types';

export const NavList = styled('ul')<NavListProps>`
    flex: 1;
    overflow: auto;
    padding: 0px;
    margin: 0px;
    list-style-type: none;
    color: ${({ theme }) => theme.sideNav.textColor};

    ${SvgIcon} {
        font-size: ${({ theme: { icon, sideNav } }) => icon.sizes[sideNav.iconSize]};
    }
`;

NavList.defaultProps = {
    theme: defaultTheme
};
