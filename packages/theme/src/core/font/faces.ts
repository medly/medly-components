// tslint:disable: max-line-length
import { FontFaceTheme } from './types';

const proximaNova: FontFaceTheme = {
    fontFamily: 'Roboto',
    fontFaces: [
        {
            primarySrc: `local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fCRc4AMP6lbBP.woff2) format('woff2')`,
            secondarySrc: '',
            fontWeight: 300,
            fontStyle: 'normal'
        },
        {
            primarySrc: `local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2) format('woff2')`,
            secondarySrc: '',
            fontWeight: 400,
            fontStyle: 'normal'
        },
        {
            primarySrc: `local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fCRc4AMP6lbBP.woff2) format('woff2')`,
            secondarySrc: '',
            fontWeight: 500,
            fontStyle: 'normal'
        },
        {
            primarySrc: `local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCRc4AMP6lbBP.woff2) format('woff2')`,
            secondarySrc: '',
            fontWeight: 700,
            fontStyle: 'normal'
        },
        {
            primarySrc: `local('Roboto Black'), local('Roboto-Black'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmYUtfCRc4AMP6lbBP.woff2) format('woff2')`,
            secondarySrc: '',
            fontWeight: 900,
            fontStyle: 'normal'
        }
    ]
};

const faces: FontFaceTheme[] = [proximaNova];

export default faces;
