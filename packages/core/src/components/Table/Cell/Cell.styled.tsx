import { styled } from '@medly-components/utils';

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

export const CellStyled = styled('div')`
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
    padding: 2px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;

    &:hover {
        ${ResizeHandlerStyled} {
            opacity: 0.3;
        }
    }
`;
