import { styled } from '@medly-components/utils';
import Text from '../../Text';
import { getBorder } from '../Table.styled';
import { Props } from './types';

export const GroupCell = styled('div').attrs(({ gridTemplateColumns }: Props) => ({
    style: {
        gridTemplateColumns
    }
}))<Props>`
    display: grid;
    position: relative;
    opacity: ${({ hidden }) => (hidden ? '0' : '1')};
    width: ${({ hidden }) => (hidden ? '0' : '100%')};
    height: ${({ hidden }) => (hidden ? '0' : '100%')};
    &::after {
        ${({ isTitleCell }) => isTitleCell && getBorder('right')}
    }
    padding: 0;
`;

export const GroupCellTitle = styled(Text.Style)`
    position: relative;
    text-align: center;
    padding: 0.9rem 1.6rem 1rem;
    grid-column: -1/1;
    text-overflow: initial;
    overflow: auto;
    white-space: normal;
    color: ${({ theme }) => theme.table.header.cell.textColor.default};
    &::after {
        ${getBorder('bottom')}
    }
`;
