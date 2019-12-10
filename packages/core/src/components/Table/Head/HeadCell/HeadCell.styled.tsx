import { SvgIcon } from '@medly-components/icons';
import { clearMarginPadding, css, styled } from '@medly-components/utils';
import Text from '../../../Text';
import Cell from '../../Cell';

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
    padding: ${({ hide }) => (hide ? '0' : '5px 0px 5px 10px')};
    text-overflow: initial;
    white-space: normal;
    border-right: 1px solid ${({ theme }) => theme.table.borderColor};
    border-bottom: 1px solid ${({ theme }) => theme.table.borderColor};

    height: 100%;
    align-items: flex-end;

    *:first-child {
        margin-right: auto;
    }

    ${Text.Style} {
        overflow: auto;
        white-space: unset;
        text-overflow: unset;
    }

    ${SvgIcon} {
        cursor: pointer;
        margin-right: 5px;
    }

    ${props => props.frozen && frozen()}
`;
