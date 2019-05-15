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
    fillColor: colors.violet[500],
    bgColor: colors.white,
    borderColor: colors.grey[200]
};

export default radio;
