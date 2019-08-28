import { styled } from '@medly-components/utils';
import Row from './Row';
import { TableStyledProps } from './types';

export const TableStyled = styled('ol')<TableStyledProps>`
    margin: 0px;
    padding: 0px;
    overflow: auto;
    border: 1px solid ${({ theme }) => theme.table.borderColor};

    * {
        box-sizing: border-box;
    }

    ${Row} {
        &:first-of-type {
            user-select: none;
            position: sticky;
            top: 0;
            z-index: 2;
            align-items: end;
            background-color: ${({ theme }) => theme.table.oddLiBgColor};
            border: none;
        }

        &:not(:first-of-type) {
            cursor: ${({ isRowClickable }) => (isRowClickable ? 'pointer' : 'default')};

            & > * {
                height: 100%;
            }
        }

        &:nth-child(even) > * {
            background-color: ${({ theme }) => theme.table.evenLiBgColor};
        }

        &:nth-child(odd) > * {
            background-color: ${({ theme }) => theme.table.oddLiBgColor};
        }
    }
`;
