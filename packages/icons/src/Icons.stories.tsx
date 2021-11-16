import { defaultTheme, IconSizes, IconTheme } from '@medly-components/theme';
import { FC } from 'react';
import styled from 'styled-components';
import { SvgIconProps } from './SvgIcon';

export const sizes: IconSizes[] = ['XS', 'S', 'M', 'L', 'XL'];
export const variants: SvgIconProps['variant'][] = ['solid', 'flat'];

export const ThemeInterface: FC<IconTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.icon
};

export const IconProps: FC<SvgIconProps> = () => null;
IconProps.defaultProps = {
    size: 'M'
};

export const Wrapper = styled('div')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
`;
