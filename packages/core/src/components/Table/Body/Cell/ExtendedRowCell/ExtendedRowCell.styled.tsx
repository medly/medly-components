import { styled } from '@medly-components/utils';
import { TableProps } from '../../../types';

export const ExtendedRowCellStyled = styled('td')<{ tableSize: TableProps['size']; isRowExpanded?: boolean }>`
    grid-column: 2/-1;
    cursor: default;
    position: relative;
    overflow: hidden;
    padding: 0;
    transition: max-height 200ms ${({ isRowExpanded }) => (isRowExpanded ? 'ease-in' : 'ease-out')};
    max-height: ${({ isRowExpanded }) => (isRowExpanded ? '100vh' : 0)};
    &::before {
        content: '';
        top: 0;
        left: ${({ tableSize }) => (tableSize === 'L' ? '2.4rem' : '1.6rem')};
        position: absolute;
        width: calc(100% - ${({ tableSize }) => (tableSize === 'L' ? '4.8rem' : '3.2rem')});
        border-top: 1px solid ${({ theme }) => theme.table.borderColor};
    }
`;

export const Wrapper = styled('div')<{ tableSize: TableProps['size'] }>`
    padding: 1.2rem ${({ tableSize }) => (tableSize === 'L' ? '2.4rem' : '1.6rem')};
`;
