import { FontVariants, FontWeights, Theme } from '@medly-components/theme';
import { css } from 'styled-components';

export const getFontStyle = ({
    fontVariant,
    fontWeight,
    theme
}: {
    theme: Theme;
    fontVariant?: FontVariants;
    fontWeight?: FontWeights;
}) => {
    const { variants, weights, defaults } = theme.font,
        { fontSize, fontWeight: defaultFontWeight, letterSpacing, lineHeight } = variants[fontVariant || defaults.variant];

    return css`
        font-size: ${fontSize};
        font-weight: ${weights[fontWeight || defaultFontWeight]};
        letter-spacing: ${letterSpacing};
        line-height: ${lineHeight};
        font-family: ${defaults.fontFamily};
    `;
};
