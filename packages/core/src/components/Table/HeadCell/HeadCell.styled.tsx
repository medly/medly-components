import { css, styled } from '@medly-components/utils';
import { CellStyled } from '../Cell/Cell.styled';

const frozen = () => css`
    z-index: 4;
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

export const HeadCellStyled = styled(CellStyled)`
    border-top: 1px solid gray;
    display: flex;
    align-items: center;
    justify-content: center;
    text-overflow: initial;
    overflow: auto;
    white-space: normal;

    ${props => props.frozen && frozen()}
`;
