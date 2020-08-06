import { SvgIcon } from '@medly-components/icons';
import { centerAligned, styled } from '@medly-components/utils';
import { rgba } from 'polished';
import Text from '../../../../Text';
import { TableProps } from '../../../types';
import { tableCellPaddings } from '../../Cell/Styled';
import { StyledProps } from './types';

export const Row = styled('tr')<StyledProps>`
    display: grid;
    grid-template-columns: ${({ tableSize, isRowExpandable, isRowSelectable }) =>
        `${tableSize === 'L' ? '6.4rem' : '4.8rem'} ${
            isRowExpandable && isRowSelectable
                ? tableSize === 'L'
                    ? '11.6rem'
                    : '8.4rem'
                : (isRowExpandable || isRowSelectable) && (tableSize === 'L' ? '6.4rem' : '4.8rem')
        } auto`};
    position: sticky;
    left: 0;
    align-items: center;
    min-width: fit-content;
    cursor: ${({ isLoading }) => (isLoading ? 'default' : 'pointer')};
    max-width: ${({ tableWidth }) => `${tableWidth}px` || '100vw'};

    &,
    & > * {
        background-color: ${({ theme, isRowSelected, isRowExpanded }) =>
            theme.table.titleRow.bgColor[isRowSelected ? 'selected' : isRowExpanded ? 'expanded' : 'default']};
    }

    &:hover {
        z-index: 2;
        box-shadow: ${({ disabled, onClick, theme }) => !disabled && onClick && `0 0.2rem 0.4rem ${rgba(theme.table.shadowColor, 0.2)} `};
    }

    &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.table.borderColor};
    }
`;

export const TitleCell = styled('td')<{ tableSize?: TableProps['size']; isRowExpandable?: boolean; isRowSelectable?: boolean }>`
    height: 100%;
    display: flex;
    align-items: center;
    padding: ${({ hidden, tableSize }) => (hidden ? '0' : tableCellPaddings[tableSize])};
    grid-column: ${({ isRowExpandable, isRowSelectable }) => (isRowExpandable || isRowSelectable ? '3/-1' : '2/-1')};
`;

export const CountChip = styled('span')<{ isRowSelected?: boolean }>`
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 2rem;
    padding: 0 0.8rem;
    border-radius: 100rem;
    margin-left: 1.6rem;
    user-select: none;
    color: ${({ theme }) => theme.table.titleRow.countChip.textColor};
    background-color: ${({ theme, isRowSelected }) => theme.table.titleRow.countChip.bgColor[isRowSelected ? 'selected' : 'default']};
`;

export const SecondaryContent = styled(Text)`
    flex: 1;
    text-align: end;
    color: ${({ theme }) => theme.table.titleRow.secondaryContent.textColor};
`;

export const ExpansionCell = styled('td')<{
    isRowExpanded?: boolean;
    isRowSelected?: boolean;
    showPadding?: boolean;
    tableSize?: TableProps['size'];
}>`
    height: 100%;
    position: sticky;
    left: 0;
    padding: ${({ showPadding, tableSize }) => showPadding && tableCellPaddings[tableSize]};
    ${centerAligned()}
    border-right: 1px solid ${({ theme }) => theme.table.borderColor};
    & > ${SvgIcon} {
        padding: 0.6rem;
        border-radius: 50%;
        * {
            fill: ${({ theme, isRowExpanded, isRowSelected }) =>
                theme.table.titleRow.accordionIcon.color[isRowExpanded || isRowSelected ? 'expanded' : 'default']};
        }
        transition: ${({ isRowExpanded }) =>
            `transform 200ms ${isRowExpanded ? 'ease-in' : 'ease-out'}, background-color 100ms ${isRowExpanded ? 'ease-in' : 'ease-out'}`} ;
        transform: ${props => props.isRowExpanded && `rotate(180deg) `};

        &:hover {
            background-color: ${({ theme, isRowSelected, isRowExpanded }) =>
                theme.table.titleRow.accordionIcon.bgColor.hover[isRowSelected ? 'selected' : isRowExpanded ? 'expanded' : 'default']};
        }

        &:active {
            background-color: ${({ theme, isRowSelected, isRowExpanded }) =>
                theme.table.titleRow.accordionIcon.bgColor.pressed[isRowSelected ? 'selected' : isRowExpanded ? 'expanded' : 'default']};
        }
    }
`;
