import { Text } from '@medly-components/core';
import { SvgIcon } from '@medly-components/icons';
import { styled } from '@medly-components/utils';
import NavItem from '../NavItem';
import { NavListProps } from '../types';

export const SubNavListStyled = styled('ul')<NavListProps>`
    grid-area: submenu;
    padding: 0px;
    margin: 0px;
    max-height: 0;
    overflow: hidden;
    box-sizing: border-box;

    ${NavItem.Style} {
        min-height: 30px;

        ${SvgIcon} + ${Text.Style}{
            margin-left: 5px;
        }

        ${Text.Style} + ${SvgIcon}{
            margin-left: 5px;
        }
    }

    ul {
        margin-top: 10px;
        padding-left: 15px;
    }
`;
