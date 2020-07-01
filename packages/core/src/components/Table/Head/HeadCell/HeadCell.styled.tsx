import { SvgIcon } from '@medly-components/icons';
import { clearMarginPadding, css, styled } from '@medly-components/utils';
import Text from '../../../Text';
import Cell from '../../Cell';
import { getBorder } from '../../Table.styled';

const frozen = () => css`
    z-index: 4;
`;

export const ResizeHandlerStyled = styled('span')`
    ${clearMarginPadding()};
    width: 3px;
    height: 100%;
    min-height: 25px;
    cursor: ew-resize;
`;

export const HeadCellStyled = styled(Cell.Style)`
    padding: ${({ hidden }) => (hidden ? '0' : '5px 0px 5px 10px')};
    text-overflow: initial;
    white-space: normal;
    align-items: flex-end;

    ${Text.Style} {
        overflow: auto;
        white-space: unset;
        text-overflow: unset;
        width: 100%;
        text-align: center;
    }

    ${SvgIcon} {
        cursor: pointer;
        margin-right: 5px;
    }

    ${props => props.frozen && frozen()}

    &:not(:last-child) {
        &::after {
            ${getBorder('right')}
        }
    }
`;
