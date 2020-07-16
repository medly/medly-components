import { defaultTheme, SearchBoxTheme } from '@medly-components/theme/src';
import { Props } from './types';

export const optionsArray = [
    { value: 'Dummy1 option', label: 'Dummy1 option' },
    { value: 'Some 1', label: 'Dummy2 option' },
    { value: 'Dummy3 option', label: 'Dummy3 option' },
    { value: 'Dummy4 option', label: 'Dummy4 option' },
    { value: 'Dummy5 option', label: 'Dummy5 option' },
    { value: 'Dummy6 option', label: 'Dummy6 option' },
    { value: 'Dummy7 option', label: 'Dummy7 option' }
];

export const size: Props['size'][] = ['S', 'M'];

export const ThemeInterface: React.FC<SearchBoxTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.searchBox
};
