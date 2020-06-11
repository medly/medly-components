import { defaultTheme, IconSizes, IconTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils/src';
import React from 'react';
import { SvgIconProps } from './SvgIcon';

export const sizes: IconSizes[] = ['XS', 'S', 'M', 'L', 'XL'];
export const variants: SvgIconProps['variant'][] = ['solid', 'flat'];

export const ThemeInterface: React.SFC<IconTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.icon
};

export const IconProps: React.SFC<SvgIconProps> = () => null;
IconProps.defaultProps = {
    size: 'M'
};

export const Wrapper = styled('div')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
`;
