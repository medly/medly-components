import { FontVariants, Theme } from '@medly-components/theme';
import { css } from '../styled';

export const getFontStyle = ({ fontVariant, theme }: { theme: Theme; fontVariant?: FontVariants }) => {
    const { variants, weights, defaults } = theme.font,
        { fontSize, fontWeight, letterSpacing, lineHeight } = variants[fontVariant || defaults.variant];

    return css`
        font-size: ${fontSize};
        font-weight: ${weights[fontWeight]};
        letter-spacing: ${letterSpacing};
        line-height: ${lineHeight};
        font-family: ${defaults.fontFamily};
    `;
};
