import { Text } from '@medly-components/core';
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

export const FontVariants: React.SFC<FontVariantTheme> = () => (
    <VerticalAlign>
        <Text textVariant="h1">Header 1 / Open Sans - Medium</Text>
        <Text textVariant="h2">Header 2 / Open Sans - Medium</Text>
        <Text textVariant="h3">Header 3 / Open Sans - Regular</Text>
        <Text textVariant="h4">Header 4 / Open Sans - Strong</Text>
        <Text textVariant="h5">HEADER 5 / Open Sans - Strong</Text>
        <Text textVariant="body1">Body 1 / Open Sans - Regular</Text>
        <Text textVariant="body2">Body 2 / Open Sans - Regular</Text>
    </VerticalAlign>
);
FontVariants.defaultProps = {
    ...defaultTheme.font.variants
};

export const FontWeights: React.SFC<FontWeightTheme> = () => (
    <VerticalAlign>
        <Text textWeight="Light">Body 2 / Open Sans - Light</Text>
        <Text textWeight="Regular">Body 2 / Open Sans - Regular</Text>
        <Text textWeight="Medium">Body 2 / Open Sans - Medium</Text>
        <Text textWeight="Strong">Body 2 / Open Sans - Strong</Text>
        <Text textWeight="ExtraStrong">Body 2 / Open Sans - Extra Strong</Text>
    </VerticalAlign>
);
FontWeights.defaultProps = {
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
