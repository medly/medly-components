import { styled } from '@medly-components/utils';
import { GridTemplateProps } from '../../../types';
import { StyledProps } from './types';

export const ContentRowStyled = styled('tr').attrs(({ gridTemplateColumns }: GridTemplateProps) => ({
    style: {
        gridTemplateColumns
    }
}))<StyledProps>`
    display: grid;
    position: relative;
    align-items: center;
    min-width: fit-content;
    background-color: white;
    padding: 0;
    overflow: ${({ isRowExpanded }) => !isRowExpanded && 'hidden'};
    transition: max-height 200ms ${({ isRowExpanded }) => (isRowExpanded ? 'ease-in' : 'ease-out')};
    max-height: ${({ isRowExpanded }) => (isRowExpanded ? '100vh' : 0)};
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
