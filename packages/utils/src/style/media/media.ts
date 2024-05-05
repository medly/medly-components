import { css, CSSKeyframes } from 'styled-components';

export const media =
    (mediaQuery: string) =>
    (first: TemplateStringsArray, ...interpolations: Array<string | number | CSSKeyframes>) => {
        return css`
            ${mediaQuery} {
                ${css(first, ...interpolations)}
            }
        `;
    };
