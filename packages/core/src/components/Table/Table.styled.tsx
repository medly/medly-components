import { styled } from '@medly-components/utils';
import Cell from './Cell';
import Row from './Row';

export const TableStyled = styled('ol')`
    margin: 0px;
    padding: 0px;
    border-top: 1px solid gray;

    ${Row} {
        &:first-child {
            background-color: blanchedalmond;

            ${Cell.Style} {
                display: flex;
                align-items: center;
                justify-content: center;
                text-overflow: initial;
                overflow: auto;
                white-space: normal;
            }
        }
    }

    * {
        box-sizing: border-box;
    }
`;
