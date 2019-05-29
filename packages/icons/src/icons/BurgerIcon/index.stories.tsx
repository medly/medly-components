import { defaultTheme, IconSizesType } from '@medly-components/theme';
import { color, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React from 'react';
import BurgerIcon from './BurgerIcon';

const size: IconSizesType[] = ['XS', 'S', 'M', 'L', 'XL'];
const defaultColor = defaultTheme.icon.defaultColor;

storiesOf('Icons', module).add('BurgerIcon', () => <BurgerIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />);
