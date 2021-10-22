import { css } from 'styled-components';

export const centerAligned = (display: 'flex' | 'inline-flex' = 'inline-flex') => css`
    display: ${display};
    justify-content: center;
    align-items: center;
`;
