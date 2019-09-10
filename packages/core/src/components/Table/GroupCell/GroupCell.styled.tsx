import { styled, WithThemeProp } from '@medly-components/utils';
import Text from '../../Text';
import { Props } from './types';

export const GroupCell = styled('div').attrs(({ gridTemplateColumns }: Props) => ({
    style: {
        gridTemplateColumns
    }
}))<Props>`
    display: grid;
    opacity: ${({ hide }) => (hide ? '0' : '1')};
    width: ${({ hide }) => (hide ? '0px' : '100%')};
    height: ${({ hide }) => (hide ? '0px' : '100%')};
`;

export const GroupCellTitle = styled(Text.Style)<WithThemeProp>`
    font-size: ${({ theme }) => theme.font.sizes.M3};
    font-weight: ${({ theme }) => theme.font.weights.Strong};
    text-align: center;
    padding: 5px 0px 5px 10px;
    grid-column: -1/1;
    text-overflow: initial;
    overflow: auto;
    white-space: normal;
    border-right: 1px solid ${({ theme }) => theme.table.borderColor};
    border-bottom: 1px solid ${({ theme }) => theme.table.borderColor};
`;
