import { styled } from '@medly-components/utils';
import { TableStyledProps } from './types';

export const TableStyled = styled('table').attrs({ style: ({ gridTemplateColumns }) => ({ gridTemplateColumns }) })<TableStyledProps>`
    margin: 0px;
    padding: 0px;
    display: grid;
    min-width: 100%;
    border-top: 1px solid grey;
    border-left: 1px solid grey;

    * {
        box-sizing: border-box;
    }
`;
