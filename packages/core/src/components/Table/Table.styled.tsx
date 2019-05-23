import { styled } from '@medly-components/utils';
import Cell from './Cell';
import { GroupCell } from './GroupCell';
import Row from './Row';

export const TableStyled = styled('ol')`
    margin: 0px;
    padding: 0px;
    border-left: 1px solid gray;

    * {
        box-sizing: border-box;
    }

    ${Row} {
        &:first-child {
            * {
                background-color: blanchedalmond;
            }

            ${GroupCell} {
                border-top: 1px solid gray;
            }

            ${Cell.Style} {
                border-top: 1px solid gray;
                display: flex;
                align-items: center;
                justify-content: center;
                text-overflow: initial;
                overflow: auto;
                white-space: normal;
            }
        }
    }
`;
