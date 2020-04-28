import { defaultTheme, SelectTheme } from '@medly-components/theme';
import React from 'react';
import { Option, SelectProps } from './types';

export const variants: SelectProps['variant'][] = ['outlined', 'filled'];

export const options = [
    { value: 'all', label: 'All' },
    { value: 'Dummy1 option', label: 'Dummy1 option', disabled: true },
    { value: 'Dummy2 option', label: 'Dummy2 option' },
    { value: 'Dummy3 option', label: 'Dummy3 option' },
    { value: 'Dummy4 option', label: 'Dummy4 option' },
    { value: 'Dummy5 option', label: 'Dummy5 option' },
    { value: 'Dummy6 option', label: 'Dummy6 option' }
];

export const ThemeInterface: React.SFC<SelectTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.select
};

export const OptionProps: React.SFC<Option> = () => null;
