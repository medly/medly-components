import { styled } from '@medly-components/utils';
import { TableStyledProps } from '../types';

export const RowStyled = styled('li').attrs({ style: ({ gridTemplateColumns }) => ({ gridTemplateColumns }) })<TableStyledProps>`
    display: grid;

    &:hover {
        background-color: rgb(200, 227, 252);
    }
`;
