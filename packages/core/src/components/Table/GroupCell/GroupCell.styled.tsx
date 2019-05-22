import { styled } from '@medly-components/utils';
import { GridTemplateProps } from '../types';

export const GroupCellStyled = styled('div').attrs({
    style: ({ gridTemplateColumns }) => ({ gridTemplateColumns })
})`
    display: grid;
`;

export const GroupCellTitleStyled = styled('span')`
    grid-column: -1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid gray;
    border-right: 1px solid;
`;
