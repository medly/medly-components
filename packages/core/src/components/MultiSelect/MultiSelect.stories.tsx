import { defaultTheme, MultiSelectTheme } from '@medly-components/theme';
import React from 'react';
import { MultiSelectProps } from './types';

export const variants: MultiSelectProps['variant'][] = ['outlined', 'filled'];
export const sizes: MultiSelectProps['size'][] = ['S', 'M'];

export const options = [
    { value: 'medly pharmacy', label: 'Medly Pharmacy' },
    { value: 'kala pharmacy', label: 'Kala Pharmacy' },
    {
        label: 'Group',
        value: [
            { value: 'a pharmacy', label: 'a Pharmacy' },
            { value: 'b pharmacy', label: 'b Pharmacy' },
            { value: 'c pharmacy', label: 'c Pharmacy' },
            { value: 'd pharmacy', label: 'd Pharmacy' }
        ]
    }
];

export const ThemeInterface: React.FC<MultiSelectTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.multiSelect
};
