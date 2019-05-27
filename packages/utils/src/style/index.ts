import { css } from '../styled';

export const clearMarginPadding = () => css`
    margin: 0px;
    padding: 0px;
`;

export const fullWidth = () => css`
    width: 100%;
`;

export const centerAligned = () => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
