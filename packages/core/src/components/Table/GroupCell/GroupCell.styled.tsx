import { styled, WithThemeProp } from '@medly-components/utils';
import Text from '../../Text';
import Cell from '../Cell';
import { getBorder } from '../Table.styled';
import { Props } from './types';

export const GroupCell = styled('div').attrs(({ gridTemplateColumns, showBorders }: Props) => ({
    style: {
        gridTemplateColumns
    }
}))<Props>`
    display: grid;
    position: relative;
    opacity: ${({ hide }) => (hide ? '0' : '1')};
    width: ${({ hide }) => (hide ? '0px' : '100%')};
    height: ${({ hide }) => (hide ? '0px' : '100%')};
    & + &,
    & + ${Cell.Style} {
        &::before {
            ${({ showBorders }) => showBorders && getBorder('left')}
        }
    }
`;
GroupCell.defaultProps = {
    showBorders: false
};

export const GroupCellTitle = styled(Text.Style)<WithThemeProp>`
    position: relative;
    text-align: center;
    padding: 5px 0 5px 10px;
    grid-column: -1/1;
    text-overflow: initial;
    overflow: auto;
    white-space: normal;
    &::after {
        ${getBorder('bottom')}
    }
`;
