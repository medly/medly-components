import { centerAligned, styled, WithThemeProp } from '@medly-components/utils';
import Text from '../../Text';
import { GridTemplateProps } from '../types';

export const GroupCellStyled = styled('div').attrs(({ gridTemplateColumns }: GridTemplateProps) => ({
    style: {
        gridTemplateColumns
    }
}))<GridTemplateProps>`
    display: grid;
`;

export const GroupCellTitleStyled = styled(Text.Style)<WithThemeProp>`
    font-size: ${({ theme }) => theme.font.sizes.M3};
    font-weight: ${({ theme }) => theme.font.weights.Strong};
    padding: 5px 0px;
    grid-column: -1/1;
    border-right: 1px solid grey;
    text-overflow: initial;
    overflow: auto;
    white-space: normal;

    ${centerAligned()}
`;
