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

export const HeadCellStyled = styled('th')`
    background: blanchedalmond;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-overflow: initial;
    overflow: auto;
    white-space: normal;
    border-bottom: 1px solid grey;
    border-right: 1px solid grey;
`;
