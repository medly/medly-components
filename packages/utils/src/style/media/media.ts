import { css, Keyframes } from 'styled-components';

export const media =
    (mediaQuery: string) =>
    (first: TemplateStringsArray, ...interpolations: Array<string | number | Keyframes>) => {
        return css`
            ${mediaQuery} {
                ${css(first, ...interpolations)}
            }
        `;
    };
