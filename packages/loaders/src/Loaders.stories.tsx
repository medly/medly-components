import { defaultTheme, LoaderSizes, LoaderTheme } from '@medly-components/theme';
import { color, select } from '@storybook/addon-knobs';
import { FC } from 'react';
import LoaderContainer from './LoaderContainer';
import { CircleLoader } from './loaders/CircleLoader';
import { ConcentricCircleLoader } from './loaders/ConcentricCircleLoader';
import { DotsBouncingLoader } from './loaders/DotsBouncingLoader';
import { DotsLoader } from './loaders/DotsLoader';
import { SvgLoaderProps, SVGProp } from './SvgLoader/types';

const size: LoaderSizes[] = ['XXS', 'XS', 'S', 'M', 'L', 'XL'];
const { defaultColor } = defaultTheme.loader;

export const ThemeInterface: FC<LoaderTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.loader
};

export const Basic: FC<Omit<SvgLoaderProps, keyof SVGProp>> = () => (
    <LoaderContainer>
        <CircleLoader size={select('Size', size, 'S')} color={color('Color', defaultColor)} />
        <ConcentricCircleLoader size={select('Size', size, 'S')} color={color('Color', defaultColor)} />
        <DotsBouncingLoader size={select('Size', size, 'S')} color={color('Color', defaultColor)} />
        <DotsLoader size={select('Size', size, 'S')} color={color('Color', defaultColor)} />
    </LoaderContainer>
);
