import { FontFaceItem, FontFaceTheme } from '@medly-components/theme';
import { css } from 'styled-components';

const formatFontFace = (fontFace: FontFaceItem, fontFamily: string) => `
    @font-face {
        font-family: '${fontFamily}';
        src: ${fontFace.primarySrc};
        src: ${fontFace.secondarySrc};
        font-weight: ${fontFace.fontWeight};
        font-style: ${fontFace.fontStyle};
        font-display: ${fontFace.fontDisplay};
    }`;

const formatFontFamily = (fontFamilyDetails: FontFaceTheme) => {
    return fontFamilyDetails.fontFaces.reduce(
        (templateLiteral: string, face: FontFaceItem) => templateLiteral + formatFontFace(face, fontFamilyDetails.fontFamily),
        ''
    );
};

const fonts = css`
    ${props => {
        return props.theme.font.faces.reduce(
            (templateLiteral: string, fontFamilyDetails: FontFaceTheme) => templateLiteral + formatFontFamily(fontFamilyDetails),
            ''
        );
    }}
`;

export default fonts;
