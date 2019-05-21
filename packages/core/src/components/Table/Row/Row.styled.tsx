import { styled } from '@medly-components/utils';
import Cell from '../Cell';

export const RowStyled = styled('tr')`
    display: contents;

    &:hover ${Cell} {
        background-color: rgb(200, 227, 252);
    }
`;
