import { css } from '../styled';

export const clearMarginPadding = () => css`
    margin: 0;
    padding: 0;
`;

export const fullWidth = (margin = '0px') => css`
    width: calc(100% - ${margin});
`;

export const fullHeight = (margin = '0px') => css`
    height: calc(100% - ${margin});
`;

export const centerAligned = (display: 'flex' | 'inline-flex' = 'inline-flex') => css`
    display: ${display};
    justify-content: center;
    align-items: center;
`;
