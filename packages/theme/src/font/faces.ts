import { FontFaceTheme } from './types';

const appleSdGothicNeo: FontFaceTheme = {
    fontFamily: 'apple SD gothic neo',
    fontFaces: [
        {
            primarySrc: `local('Apple SD Gothic Neo Light')`,
            secondarySrc: '',
            fontWeight: 200,
            fontStyle: 'normal'
        },
        {
            primarySrc: `local('Apple SD Gothic Neo Light')`,
            secondarySrc: '',
            fontWeight: 400,
            fontStyle: 'normal'
        },
        {
            primarySrc: `local('Apple SD Gothic Neo Bold')`,
            secondarySrc: '',
            fontWeight: 700,
            fontStyle: 'normal'
        }
    ]
};

const faces: FontFaceTheme[] = [appleSdGothicNeo];

export default faces;
