import { css } from 'styled-components';

export const fullWidth = (margin = '0px') => css`
    width: calc(100% - ${margin});
`;
