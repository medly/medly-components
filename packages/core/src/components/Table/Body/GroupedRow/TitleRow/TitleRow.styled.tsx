import { css, styled } from '@medly-components/utils';
import { rgba } from 'polished';
import Text from '../../../../Text';
import { GridTemplateProps, TableProps } from '../../../types';
import { tableCellPaddings } from '../../Cell/Styled';
import { StyledProps } from './types';

const normalStyle = css<StyledProps>`
    &,
    & > * {
        background-color: ${({ theme, isSelected }) => theme.table.titleRow.bgColor[isSelected ? 'selected' : 'default']};
    }

    &:hover {
        z-index: 2;
        box-shadow: ${({ disabled, onClick, theme }) => !disabled && onClick && `0 0.2rem 0.4rem ${rgba(theme.table.shadowColor, 0.2)} `};
    }

    &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.table.borderColor};
    }
`;

export const Row = styled('tr').attrs(({ gridTemplateColumns }: GridTemplateProps) => ({
    style: {
        gridTemplateColumns
    }
}))<StyledProps>`
    display: grid;
    position: relative;
    align-items: center;
    min-width: fit-content;
    cursor: pointer;
    ${normalStyle}

    & > td:nth-child(2) {
        border-left: 1px solid ${({ theme }) => theme.table.borderColor};
    }
`;

export const TitleCell = styled('td')<{ tableSize?: TableProps['size'] }>`
    width: 100%;
    height: 100%;
    grid-column: 3/-1;
    display: flex;
    align-items: center;
    padding: ${({ hidden, tableSize }) => (hidden ? '0' : tableCellPaddings[tableSize])};
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
