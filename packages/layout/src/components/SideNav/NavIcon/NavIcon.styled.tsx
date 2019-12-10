import { SvgIcon } from '@medly-components/icons';
import { centerAligned, styled } from '@medly-components/utils';

export const NavIcon = styled('div')`
    ${centerAligned()}
    grid-area: icon;
    min-width: ${({ theme }) => theme.sideNav.closeSize};
    min-height: ${({ theme }) => theme.sideNav.itemMinHeight};
    ${SvgIcon} {
        font-size: ${({ theme: { icon, sideNav } }) => icon.sizes[sideNav.iconSize]};
    }
`;
