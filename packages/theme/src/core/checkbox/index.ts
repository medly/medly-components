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
    defaultSize: '24px',
    fillColor: colors.violet[500],
    bgColor: colors.white,
    borderColor: colors.grey[200]
};

export default checkbox;
