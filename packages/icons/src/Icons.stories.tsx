import { defaultTheme, IconSizes, IconTheme } from '@medly-components/theme';
import React from 'react';
import { SvgIconProps } from './SvgIcon';

export const sizes: IconSizes[] = ['XS', 'S', 'M', 'L', 'XL'];
export const defaultColor = defaultTheme.icon.defaultIconColor;

export const ThemeInterface: React.SFC<IconTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.icon
};

export const IconProps: React.SFC<SvgIconProps> = () => null;
IconProps.defaultProps = {
    size: 'M'
};
