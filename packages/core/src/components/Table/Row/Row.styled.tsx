import { styled } from '@medly-components/utils';
import { GridTemplateProps } from '../types';
import { Props } from './types';

export const Row = styled('tr').attrs(({ gridTemplateColumns }: GridTemplateProps) => ({
    style: {
        gridTemplateColumns
    }
}))<Props>`
    display: grid;
    position: relative;
    align-items: center;
    cursor: ${({ disabled, onClick }) => (disabled ? 'not-allowed' : onClick ? 'pointer' : 'inherit')};

    &:nth-child(odd) {
        & > * {
            background-color: ${({ theme }) => theme.table.row.bgColor.odd};
        }
    }

    &:nth-child(even) {
        & > * {
            background-color: ${({ theme }) => theme.table.row.bgColor.even};
        }
    }

    &:not(:last-child) {
        & > * {
            border-bottom: 1px solid ${({ theme }) => theme.table.borderColor};
        }
    }
`;

export const NoResult = styled(Row)`
    text-align: center;
    line-height: 30px;
`;
