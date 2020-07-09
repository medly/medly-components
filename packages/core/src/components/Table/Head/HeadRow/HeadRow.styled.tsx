import { styled } from '@medly-components/utils';
import { GroupCell } from '../../GroupCell';
import { getBorder } from '../../Table.styled';
import { GridTemplateProps } from '../../types';
import HeadCell from '../HeadCell';
import { Props } from './types';

export const HeadRow = styled('tr').attrs(({ gridTemplateColumns }: GridTemplateProps) => ({
    style: {
        gridTemplateColumns
    }
}))<Props>`
    display: grid;
    align-items: end;
    user-select: none;
    
    & > * {
        background-color: ${({ theme }) => theme.table.header.bgColor};
        border-bottom: 1px solid ${({ theme }) => theme.table.borderColor};
    }


    ${GroupCell} + ${GroupCell},
    ${GroupCell} + ${HeadCell.Style} {
        &::before {
            ${getBorder('left')}
        }
    }
`;
