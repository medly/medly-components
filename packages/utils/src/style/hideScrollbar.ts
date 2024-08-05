import { css } from 'styled-components';

export const hideScrollbar = css`
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;
