import { styled } from '@medly-components/utils';
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
        &:first-of-type {
            user-select: none;
            position: sticky;
            top: 0;
            z-index: 2;

            * {
                background-color: blanchedalmond;
            }

            ${GroupCell} {
                border-top: 1px solid gray;
            }
        }
    }
`;
