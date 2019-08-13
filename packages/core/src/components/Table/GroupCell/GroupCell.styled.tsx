import { centerAligned, styled, WithThemeProp } from '@medly-components/utils';
import Text from '../../Text';
import { GridTemplateProps } from '../types';

export const GroupCellStyled = styled('div').attrs(({ gridTemplateColumns }: GridTemplateProps) => ({
    style: {
        gridTemplateColumns
    }
}))<GridTemplateProps>`
    display: grid;
    width: 100%;
    height: 100%;
`;

export const GroupCellTitleStyled = styled(Text.Style)<WithThemeProp>`
    font-size: ${({ theme }) => theme.font.sizes.M3};
    font-weight: ${({ theme }) => theme.font.weights.Strong};
    padding: 5px 0px 5px 10px;
    grid-column: -1/1;
    text-overflow: initial;
    overflow: auto;
    white-space: normal;
`;
