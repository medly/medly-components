import { css } from '../styled';

export const clearMarginPadding = () => css`
    margin: 0px;
    padding: 0px;
`;

export const fullWidth = (margin: string = '0px') => css`
    width: calc(100% - ${margin});
`;

export const fullHeight = (margin: string = '0px') => css`
    height: calc(100% - ${margin});
`;

export const centerAligned = (display: 'flex' | 'inline-flex' = 'inline-flex') => css`
    display: ${display};
    justify-content: center;
    align-items: center;
`;
