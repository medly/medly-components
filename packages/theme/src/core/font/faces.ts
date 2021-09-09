// tslint:disable: max-line-length
import { FontFaceTheme } from './types';

const proximaNova: FontFaceTheme = {
    fontFamily: 'Open Sans',
    fontFaces: [
        {
            primarySrc: `local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v13/DXI1ORHCpsQm3Vp6mXoaTRampu5_7CjHW5spxoeN3Vs.woff2) format('woff2')`,
            secondarySrc: '',
            fontWeight: 300,
            fontStyle: 'normal',
            fontDisplay: 'auto'
        },
        {
            primarySrc: `local('Open Sans'), local('OpenSans'), url(https://fonts.gstatic.com/s/opensans/v13/cJZKeOuBrn4kERxqtaUH3ZBw1xU1rKptJj_0jans920.woff2) format('woff2')`,
            secondarySrc: '',
            fontWeight: 400,
            fontStyle: 'normal',
            fontDisplay: 'auto'
        },
        {
            primarySrc: `local('Open Sans Semibold'), local('OpenSans-Semibold'), url(https://fonts.gstatic.com/s/opensans/v13/MTP_ySUJH_bn48VBG8sNShampu5_7CjHW5spxoeN3Vs.woff2) format('woff2')`,
            secondarySrc: '',
            fontWeight: 600,
            fontStyle: 'normal',
            fontDisplay: 'auto'
        },
        {
            primarySrc: `local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v13/k3k702ZOKiLJc3WVjuplzBampu5_7CjHW5spxoeN3Vs.woff2) format('woff2')`,
            secondarySrc: '',
            fontWeight: 700,
            fontStyle: 'normal',
            fontDisplay: 'auto'
        },
        {
            primarySrc: `local('Open Sans Extrabold'), local('OpenSans-Extrabold'), url(https://fonts.gstatic.com/s/opensans/v13/EInbV5DfGHOiMmvb1Xr-hhampu5_7CjHW5spxoeN3Vs.woff2) format('woff2')`,
            secondarySrc: '',
            fontWeight: 800,
            fontStyle: 'normal',
            fontDisplay: 'auto'
        }
    ]
};

const faces: FontFaceTheme[] = [proximaNova];

export default faces;
