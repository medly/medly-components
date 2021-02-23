import { defaultTheme, ToggleTheme } from '@medly-components/theme';
import React from 'react';
import { Props } from './types';

export const labelPosition: Props['labelPosition'][] = ['left', 'right', 'top', 'bottom'];
export const size: Props['size'][] = ['XS', 'S', 'M', 'L', 'XL'];

export const ThemeInterface: React.FC<ToggleTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.toggle
};

// export const Basic = () => (
//     <Toggle
//         size={select('Size', size, 'S')}
//         label="Orange"
//         fullWidth={boolean('Full Width', false)}
//         disabled={boolean('Disabled', false)}
//         labelPosition={select('Label Position', labelPosition, 'right')}
//     />
// );
