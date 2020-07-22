import { defaultTheme, SelectTheme } from '@medly-components/theme';
import React from 'react';
import { SelectProps } from './types';

export const variants: SelectProps['variant'][] = ['outlined', 'filled'];

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

export const ThemeInterface: React.FC<SelectTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.select
};
