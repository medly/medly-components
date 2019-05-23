import { styled, WithThemeProp } from '@medly-components/utils';
import { GridTemplateProps } from '../types';

export const RowStyled = styled('li').attrs({
    style: ({ gridTemplateColumns }: WithThemeProp & GridTemplateProps) => ({ gridTemplateColumns })
})<GridTemplateProps>`
    display: grid;

    &:hover {
        background-color: rgb(200, 227, 252);
    }
`;
