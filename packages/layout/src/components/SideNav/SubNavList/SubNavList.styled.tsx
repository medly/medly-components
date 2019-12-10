import { styled } from '@medly-components/utils';
import { NavListProps } from '../NavList/types';

export const SubNavList = styled('ul')<NavListProps & { leftPadding: number }>`
    grid-area: submenu;
    border-top: 1px solid;
    padding: 0;
    max-height: 0;
    overflow: hidden;
    box-sizing: border-box;
    transition: max-height 0.2s ease-out;
    border-color: ${({ theme }) => theme.sideNav.borderColor};

    & > li > :first-child {
        padding-left: ${({ leftPadding }) => `${leftPadding}px`};
    }
`;
