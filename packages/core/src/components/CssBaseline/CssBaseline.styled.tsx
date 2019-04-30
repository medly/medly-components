import { defaultTheme } from '@medly-components/theme';
import { createGlobalStyle } from '@medly-components/utils';

import fonts from './fonts';

export const CssBaseline = createGlobalStyle`
    ${fonts} 
    body {
        font-family: ${props => props.theme.font.defaultFontFamily || 'sans-serif'};
    }
`;
CssBaseline.displayName = 'CssBaseline';
CssBaseline.defaultProps = {
    theme: defaultTheme
};
