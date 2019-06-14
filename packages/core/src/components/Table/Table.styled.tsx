import { styled } from '@medly-components/utils';
import Cell from './Cell';
import { GroupCell } from './GroupCell';
import Row from './Row';

export const TableStyled = styled('ol')`
    margin: 0px;
    padding: 0px;

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

            background-color: white;

            border: none;
        }

        &:nth-child(even) {
            background-color: #f7f7f7;
        }

        &:nth-child(odd) {
            background-color: white;
        }
    }
`;
