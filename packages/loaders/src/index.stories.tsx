import { defaultTheme, LoaderSizes } from '@medly-components/theme';
import { color, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { CircleLoader } from './loaders/CircleLoader';
import { ConcentricCircleLoader } from './loaders/ConcentricCircleLoader';
import { DotsBouncingLoader } from './loaders/DotsBouncingLoader';
import { DotsLoader } from './loaders/DotsLoader';

const size: LoaderSizes[] = ['XXS', 'XS', 'S', 'M', 'L', 'XL'];
const defaultColor = defaultTheme.loader.defaultColor;

storiesOf('Loaders', module)
    .add('CircleLoader', () => <CircleLoader size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('ConcentricCircleLoader', () => <ConcentricCircleLoader size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('DotsLoader', () => <DotsLoader size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('DotsBouncingLoader', () => <DotsBouncingLoader size={select('Size', size, 'S')} color={color('Color', defaultColor)} />);
