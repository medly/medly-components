import { css, styled } from '@medly-components/utils';
import { rgba } from 'polished';
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
`;

export const TitleCell = styled('td')<{ tableSize?: TableProps['size'] }>`
    width: 100%;
    height: 100%;
    grid-column: 3/-1;
    padding: ${({ hidden, tableSize }) => (hidden ? '0' : tableCellPaddings[tableSize])};
`;
