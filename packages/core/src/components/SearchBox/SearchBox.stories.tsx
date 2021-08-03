import { defaultTheme, SearchBoxTheme } from '@medly-components/theme';
import React from 'react';
import Text from '../Text';
import { Props } from './types';

export const placeholderComponent: React.FC = () => (
    <div>
        <h1>this is a placeholder</h1>
    </div>
);

export const optionsArray = [
    { value: 'Dummy1 option', label: 'Dummy1 option' },
    { value: 'Some 1', label: 'Dummy2 option' },
    { value: 'Dummy3 option', label: 'Dummy3 option' },
    { value: 'Dummy4 option', label: 'Dummy4 option' },
    { value: 'Dummy5 option', label: 'Dummy5 option' },
    { value: 'Dummy6 option', label: 'Dummy6 option' },
    { value: 'Dummy7 option', label: 'Dummy7 option' },
    { value: <Text>Custom component</Text>, label: 'Custom component' }
];

export const size: Props['size'][] = ['S', 'M'];

export const ThemeInterface: React.FC<SearchBoxTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.searchBox
};
