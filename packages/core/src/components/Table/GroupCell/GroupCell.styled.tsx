import styled from 'styled-components';
import Text from '../../Text';
import { getBorder } from '../Table.styled';
import { GroupCellProps } from './types';

export const GroupCell = styled('div').attrs(({ gridTemplateColumns }: GroupCellProps) => ({
    style: {
        gridTemplateColumns
    }
}))<GroupCellProps>`
    display: grid;
    position: relative;
    opacity: ${({ hidden }) => (hidden ? '0' : '1')};
    width: ${({ hidden }) => (hidden ? '0' : '100%')};
    height: ${({ hidden }) => (hidden ? '0' : '100%')};
    &::after {
        ${({ isTitleCell, tableSize }) => isTitleCell && getBorder('right', tableSize)}
    }
    padding: 0;
`;

export const GroupCellTitle = styled(Text)`
    position: relative;
    text-align: center;
    padding: 0.9rem 1.6rem 1rem;
    grid-column: -1/1;
    text-overflow: initial;
    overflow: auto;
    white-space: normal;
    color: ${({ theme }) => theme.table.header.cell.textColor.default};
    &::after {
        ${getBorder('bottom')}
    }
`;
