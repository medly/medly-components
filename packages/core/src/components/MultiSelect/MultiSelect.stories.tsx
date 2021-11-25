import { defaultTheme, MultiSelectTheme } from '@medly-components/theme';
import { MultiSelectProps } from './types';
import type { FC } from 'react';

export const variants: Required<MultiSelectProps>['variant'][] = ['outlined', 'filled', 'fusion'];
export const sizes: Required<MultiSelectProps>['size'][] = ['S', 'M'];

export const options = [
        { value: 'lorem pharmacy', label: 'Lorem Pharmacy' },
        { value: 'ipsum pharmacy', label: 'Ipsum Pharmacy' },
        {
            label: 'Group',
            value: [
                { value: 'a pharmacy', label: 'a Pharmacy with some big label' },
                { value: 'b pharmacy', label: 'b Pharmacy' },
                { value: 'c pharmacy', label: 'c Pharmacy' },
                { value: 'd pharmacy', label: 'd Pharmacy' }
            ]
        }
    ],
    disabledOptions = [{ value: 'disabled pharmacy', label: 'Disabled Pharmacy', disabled: true }, ...options];

export const ThemeInterface: FC<MultiSelectTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.multiSelect
};
