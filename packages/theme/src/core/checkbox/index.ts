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
    fillColor: colors.violet[500],
    bgColor: colors.white,
    disabledBgcolor: colors.grey[300],
    borderColor: colors.grey[300],
    outlineColor: colors.violet[500]
};

export default checkbox;
