import { defaultTheme, FontVariants, LabelTheme } from '@medly-components/theme';
import { boolean, color, select } from '@storybook/addon-knobs';
import React from 'react';
import { Label } from './Label';

const variantOptions: FontVariants[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'body1', 'body2'];
const defaultColor = defaultTheme.font.defaults.color;

export const ThemeInterface: React.FC<LabelTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.label
};

export const Basic = () => (
    <Label
        required={boolean('Show Required asterisk', false)}
        labelColor={color('Color', defaultColor)}
        labelVariant={select('Label Variant', variantOptions, 'body2')}
    >
        Top 5
    </Label>
);
