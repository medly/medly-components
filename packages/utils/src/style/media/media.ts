import { css } from 'styled-components';

export const media =
    (mediaQuery: string) =>
    (first: TemplateStringsArray, ...interpolations: Array<string | number>) => {
        return css`
            ${mediaQuery} {
                ${css(first, ...interpolations)}
            }
        `;
    };
