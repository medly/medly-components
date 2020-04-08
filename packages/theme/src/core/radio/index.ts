import colors from '../colors';
import { RadioTheme } from './types';

const radio: RadioTheme = {
    sizes: {
        XS: '12px',
        S: '16px',
        M: '24px',
        L: '36px',
        XL: '48px'
    },
    defaultSize: '16px',
    bgColor: colors.white,
    fillColor: colors.professionalNavy,
    borderColor: colors.grey[300],
    disabledBgcolor: colors.grey[300],
    outlineColor: colors.professionalNavy
};

export default radio;
