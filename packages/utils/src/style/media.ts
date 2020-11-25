import { css } from '../styled';

export const media = (mediaQuery: string) => (first: TemplateStringsArray, ...interpolations: Array<string | number>) => {
    return css`
        ${mediaQuery} {
            ${css(first, ...interpolations)}
        }
    `;
};
