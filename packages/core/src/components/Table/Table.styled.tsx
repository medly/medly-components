import { styled } from '@medly-components/utils';
import Row from './Row';
import { TableStyledProps } from './types';

export const TableStyled = styled('ol')<TableStyledProps>`
    margin: 0px;
    padding: 0px;
    overflow: auto;

    * {
        box-sizing: border-box;
    }

    ${Row} {
        cursor: ${({ isRowClickable }) => (isRowClickable ? 'pointer' : 'default')};
        &:first-of-type {
            user-select: none;
            position: sticky;
            top: 0;
            z-index: 2;
            align-items: end;
            background-color: white;
            border: none;
            cursor: default;
        }

        &:not(:first-of-type) > * {
            height: 100%;
        }

        &:nth-child(even) > * {
            background-color: #f7f7f7;
        }

        &:nth-child(odd) > * {
            background-color: white;
        }
    }
`;
