import { defaultTheme, FontFaceTheme, FontTheme, FontVariantTheme, FontWeightTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import * as React from 'react';

export const VerticalAlign = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    & > * {
        margin-bottom: 8px;
    }
`;

export const FontVariantsThemeInterface: React.SFC<FontVariantTheme> = () => null;
FontVariantsThemeInterface.defaultProps = {
    ...defaultTheme.font.variants
};

export const FontWeightThemeInterface: React.SFC<FontWeightTheme> = () => null;
FontWeightThemeInterface.defaultProps = {
    ...defaultTheme.font.weights
};

export const FontThemeInterface: React.SFC<FontTheme> = () => null;
FontThemeInterface.defaultProps = {
    ...defaultTheme.font
};
export const FontFaceThemeInterface: React.SFC<FontFaceTheme> = () => null;
FontFaceThemeInterface.defaultProps = {
    ...defaultTheme.font.faces[0]
};
