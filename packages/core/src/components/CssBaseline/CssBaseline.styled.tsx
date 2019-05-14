import { defaultTheme } from '@medly-components/theme';
import { createGlobalStyle } from '@medly-components/utils';

import fonts from './fonts';

export const CssBaseline = createGlobalStyle`
    ${fonts} 
    html {
        height: 100%;
        width: 100%;
    }
    body {
        font-family: ${props => props.theme.font.defaultFontFamily || 'sans-serif'};
        color:  ${props => props.theme.font.defaultColor};
        margin: 0px;
        height: 100%;
        width: 100%;

        #root, .root{
            height: 100%;
            width: 100%;
        }
    }
`;
CssBaseline.displayName = 'CssBaseline';
CssBaseline.defaultProps = {
    theme: defaultTheme
};
