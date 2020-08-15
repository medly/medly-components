import { styled } from '@medly-components/utils';
import { StyledProps } from './types';

export const ContentRowStyled = styled('tr')<StyledProps>`
    display: grid;
    grid-template-columns: ${({ tableSize }) => (tableSize === 'L' ? '5.5rem' : '4.8rem')} auto;
    position: relative;
    align-items: center;
    min-width: fit-content;
    background-color: white;
    padding: 0;
    overflow: ${({ isRowExpanded }) => !isRowExpanded && 'hidden'};
    transition: max-height 200ms ${({ isRowExpanded }) => (isRowExpanded ? 'ease-in' : 'ease-out')};
    max-height: ${({ isRowExpanded }) => (isRowExpanded ? '100vh' : 0)};
    border-bottom: ${({ isRowExpanded, theme }) => isRowExpanded && `1px solid ${theme.table.borderColor}`};
`;
export const BlankCell = styled('td')<{ isRowExpanded: boolean }>`
    width: 100%;
    height: 100%;
    padding: 0;
    position: sticky;
    left: 0;
    background-color: white;
    z-index: ${({ isRowExpanded }) => isRowExpanded && 1};
    border-right: 1px solid ${({ theme }) => theme.table.borderColor};
`;

export const DataCell = styled('td')`
    grid-column: 2/-1;
    width: 100%;
    height: 100%;
    padding: 0;
    position: sticky;
    left: 4.8rem;
`;
