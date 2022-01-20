import { defaultTheme, SearchBoxTheme } from '@medly-components/theme';
import type { FC } from 'react';
import Button from '../Button';
import Text from '../Text';
import TextField from '../TextField';
import { SearchBoxProps } from './types';

export const PlaceholderComponent: FC = () => (
    <div>
        <TextField fullWidth variant="outlined" size="S" label="Organization" />
        <Button size="S">Submit</Button>
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

export const size: SearchBoxProps['size'][] = ['S', 'M'];

export const ThemeInterface: FC<SearchBoxTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.searchBox
};
