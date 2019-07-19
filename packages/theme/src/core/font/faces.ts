// tslint:disable: max-line-length
import { FontFaceTheme } from './types';

const proximaNova: FontFaceTheme = {
    fontFamily: 'ProximaNova',
    fontFaces: [
        {
            primarySrc: `url('https://d1b6bucc9jhzue.cloudfront.net/at/fonts/ProximaNova/webfonts/ProximaNovaLight.eot?cloudFrontFixScheme=http&cloudFrontFixHost=www2.vauto.com') format('eot')`,
            secondarySrc: '',
            fontWeight: 200,
            fontStyle: 'normal'
        },
        {
            primarySrc: `url('https://d1b6bucc9jhzue.cloudfront.net/at/fonts/ProximaNova/webfonts/ProximaNovaRegular.eot?cloudFrontFixScheme=http&cloudFrontFixHost=www2.vauto.com') format('eot')`,
            secondarySrc: '',
            fontWeight: 400,
            fontStyle: 'normal'
        },
        {
            primarySrc: `url('https://d1b6bucc9jhzue.cloudfront.net/at/fonts/ProximaNova/webfonts/ProximaNovaBold.eot?cloudFrontFixScheme=http&cloudFrontFixHost=www2.vauto.com') format('eot')`,
            secondarySrc: '',
            fontWeight: 700,
            fontStyle: 'normal'
        }
    ]
};

const faces: FontFaceTheme[] = [proximaNova];

export default faces;
