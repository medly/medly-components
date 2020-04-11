import { css } from '../styled';

export const fullHeight = (margin = '0px') => css`
    height: calc(100% - ${margin});
`;
