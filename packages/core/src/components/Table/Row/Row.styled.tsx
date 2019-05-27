import { styled, WithThemeProp } from '@medly-components/utils';
import { GridTemplateProps } from '../types';

export const RowStyled = styled('li').attrs(({ gridTemplateColumns }: GridTemplateProps) => ({
    style: {
        gridTemplateColumns
    }
}))<GridTemplateProps>`
    display: grid;
    position: relative;
    z-index: 0;

    &:hover {
        background-color: rgb(200, 227, 252);
    }
`;
