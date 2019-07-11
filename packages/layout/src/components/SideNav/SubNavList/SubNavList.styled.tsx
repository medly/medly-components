import { styled } from '@medly-components/utils';
import NavItem from '../NavItem';
import { NavListProps } from '../types';

export const SubNavListStyled = styled('ul')<NavListProps>`
    grid-area: submenu;
    padding: 0px;
    max-height: 0;
    overflow: hidden;
    box-sizing: border-box;

    ${NavItem.Style} {
        display: block;
    }
`;
