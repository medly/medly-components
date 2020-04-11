import { css } from '../styled';

export const fullWidth = (margin = '0px') => css`
    width: calc(100% - ${margin});
`;
