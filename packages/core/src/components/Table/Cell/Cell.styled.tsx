import { css, styled } from '@medly-components/utils';
import { CellStyledProps } from '../types';

const frozen = () => css`
    position: sticky;
    left: 0;
    z-index: 2;
`;

export const CellStyled = styled('div')<CellStyledProps>`
    opacity: ${({ hide }) => (hide ? 0 : 1)};
    background: white;
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
    padding: 2px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;

    ${props => props.frozen && frozen()}
`;
