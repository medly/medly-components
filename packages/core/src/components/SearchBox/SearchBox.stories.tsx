import { defaultTheme, SearchBoxTheme } from '@medly-components/theme';
import React from 'react';
import { Props } from './types';

export const optionsArray = [
    { value: 'Dummy1 option', label: 'Dummy1 option' },
    { value: 'Some 1', label: 'Dummy2 option' },
    { value: 'Dummy3 option', label: 'Dummy3 option' }
];

export const boxSize: Props['boxSize'][] = ['S', 'M'];

export const ThemeInterface: React.SFC<SearchBoxTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.select
};
