import colors from '../colors';
import { CheckboxTheme } from './types';

const checkbox: CheckboxTheme = {
    sizes: {
        XS: '12px',
        S: '16px',
        M: '24px',
        L: '36px',
        XL: '48px'
    },
    defaultSize: '16px',
    fillColor: colors.professionalNavy,
    bgColor: colors.white,
    disabledBgColor: colors.grey[300],
    borderColor: colors.grey[300],
    outlineColor: colors.professionalNavy
};

export default checkbox;
