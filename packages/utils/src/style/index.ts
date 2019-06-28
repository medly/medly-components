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

export const centerAligned = () => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
`;
