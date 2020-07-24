import { styled } from '@medly-components/utils';
import { TableProps } from '../../../types';

export const ExtendedRowCellStyled = styled('td')<{ tableSize: TableProps['size'] }>`
    grid-column: 2/-1;
    cursor: default;
    padding: 1.2rem ${({ tableSize }) => (tableSize === 'L' ? '2.4rem' : '1.6rem')};
    position: relative;
    &::before {
        content: '';
        top: 0;
        left: ${({ tableSize }) => (tableSize === 'L' ? '2.4rem' : '1.6rem')};
        position: absolute;
        width: calc(100% - ${({ tableSize }) => (tableSize === 'L' ? '4.8rem' : '3.2rem')});
        border-top: 1px solid ${({ theme }) => theme.table.borderColor};
    }
`;
