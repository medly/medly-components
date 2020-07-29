import { styled } from '@medly-components/utils';
import { GridTemplateProps } from '../../../types';
import { StyledProps } from './types';

export const ContentRowStyled = styled('tr').attrs(({ gridTemplateColumns }: GridTemplateProps) => ({
    style: {
        gridTemplateColumns
    }
}))<StyledProps>`
    display: grid;
    align-items: center;
    min-width: fit-content;
    overflow: hidden;
    background-color: white;
    transition: max-height 200ms ${({ isRowExpanded }) => (isRowExpanded ? 'ease-in' : 'ease-out')};
    max-height: ${({ isRowExpanded }) => (isRowExpanded ? '100vh' : 0)};
`;

export const DataCell = styled('td')`
    grid-column: 2/-1;
    width: 100%;
    height: 100%;
    padding: 0;
    border-left: 1px solid ${({ theme }) => theme.table.borderColor};
`;
