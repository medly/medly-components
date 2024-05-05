import { defaultTheme, FontFaceTheme, FontTheme, FontVariantTheme, FontWeightTheme } from '@medly-components/theme';
import * as React from 'react';
import styled from 'styled-components';

export const VerticalAlign = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    & > * {
        margin-bottom: 8px;
    }
`;

export const FontVariantsThemeInterface: React.FCC<FontVariantTheme> = () => null;
FontVariantsThemeInterface.defaultProps = {
    ...defaultTheme.font.variants
};

export const FontWeightThemeInterface: React.FCC<FontWeightTheme> = () => null;
FontWeightThemeInterface.defaultProps = {
    ...defaultTheme.font.weights
};

export const FontThemeInterface: React.FCC<FontTheme> = () => null;
FontThemeInterface.defaultProps = {
    ...defaultTheme.font
};
export const FontFaceThemeInterface: React.FCC<FontFaceTheme> = () => null;
FontFaceThemeInterface.defaultProps = {
    ...defaultTheme.font.faces[0]
};
