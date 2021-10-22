import { css } from 'styled-components';

export const fullHeight = (margin = '0px') => css`
    height: calc(100% - ${margin});
`;
