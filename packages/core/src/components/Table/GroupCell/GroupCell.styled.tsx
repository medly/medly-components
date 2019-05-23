import { styled, WithThemeProp } from '@medly-components/utils';
import { GridTemplateProps } from '../types';

export const GroupCellStyled = styled('div').attrs({
    style: ({ gridTemplateColumns }: WithThemeProp & GridTemplateProps) => ({ gridTemplateColumns })
})<GridTemplateProps>`
    display: grid;
`;

export const GroupCellTitleStyled = styled('span')`
    grid-column: -1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid;
`;
