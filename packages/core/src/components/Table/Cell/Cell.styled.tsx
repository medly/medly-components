import { css, styled } from '@medly-components/utils';
import { CellStyledProps } from '../types';

const frozen = (isHeadCell: boolean) => css`
    position: sticky;
    left: 0;
    z-index: ${isHeadCell ? 4 : 2};
`;

export const ResizeHandlerStyled = styled('span')`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background: black;
    opacity: 0;
    width: 3px;
    cursor: ew-resize;
`;

export const CellStyled = styled('div')<CellStyledProps>`
    background: white;
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
    padding: 2px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;

    ${props => props.frozen && frozen(props.isHeadCell)}
`;
