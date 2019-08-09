import { styled } from '@medly-components/utils';
import { GridTemplateProps } from '../types';

export const RowStyled = styled('li').attrs(({ gridTemplateColumns }: GridTemplateProps) => ({
    style: {
        gridTemplateColumns
    }
}))<GridTemplateProps>`
    display: grid;
    position: relative;
    z-index: 0;
    grid-template-rows: minmax(30px, auto);
    align-items: center;

    border-bottom: 1px solid #ededed;

    &:hover {
        background-color: rgb(200, 227, 252);
    }
`;
