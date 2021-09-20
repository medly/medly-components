import { Theme } from '@medly-components/theme';
import { createGlobalStyle, css, getFontStyle } from '@medly-components/utils';
import fonts from './fonts';

const getTextStyled = ({ theme }: { theme: Theme }) => {
    const { defaults } = theme.font;

    return css`
        font-family: ${defaults.fontFamily};
        color: ${defaults.color};
        ${getFontStyle}
    `;
};

export const CssBaseline = createGlobalStyle`
    ${fonts} 
    html {
        height: 100%;
        width: 100%;
        font-size: 62.5%;
        scroll-behavior: smooth;
    }
    body {
        margin: 0;
        height: 100%;
        width: 100%;
       
       ${getTextStyled}

        #root, .root{
            height: 100%;
            width: 100%;
        }
    }
`;
CssBaseline.displayName = 'CssBaseline';
