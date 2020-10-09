import { defaultTheme, SingleSelectTheme } from '@medly-components/theme';
import React from 'react';
import { Option, SelectProps } from './types';

export const variants: SelectProps['variant'][] = ['outlined', 'filled', 'flat', 'outlinedRounded'];
export const sizes: SelectProps['size'][] = ['S', 'M'];

export const options = [
    { value: 'all', label: 'All' },
    { value: 'Dummy1 option', label: 'Dummy1 option', disabled: true },
    { value: 'Dummy2 option', label: 'Dummy2 option' },
    {
        value: [
            { value: 'Some 1', label: 'Some 1' },
            {
                value: [
                    { value: 'Thing 1', label: 'Thing 1' },
                    { value: 'Thing 2', label: 'Thing 2' }
                ],
                label: 'Some 2'
            }
        ],
        label: 'Dummy3 option'
    },
    { value: 'Dummy4 option', label: 'Dummy4 option' },
    { value: 'Dummy5 option', label: 'Dummy5 option' },
    { value: 'Dummy6 option', label: 'Dummy6 option' }
];

export const ThemeInterface: React.FC<SingleSelectTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.singleSelect
};

export const OptionProps: React.FC<Option> = () => null;
