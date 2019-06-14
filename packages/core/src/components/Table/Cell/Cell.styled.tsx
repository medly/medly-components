import { css, styled } from '@medly-components/utils';
import { CellStyledProps } from '../types';

const frozen = () => css`
    position: sticky;
    left: 0;
    z-index: 2;
    background-color: inherit;
`;

export const CellStyled = styled('div')<CellStyledProps>`
    opacity: ${({ hide }) => (hide ? 0 : 1)};
    padding: 5px 0px 5px 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;

    ${props => props.frozen && frozen()}
`;
