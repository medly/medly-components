import colors from '../colors';
import { ToggleTheme } from './types';

const toggle: ToggleTheme = {
    sizes: {
        XS: '20px',
        S: '24px',
        M: '28px',
        L: '32px',
        XL: '40px'
    },
    defaultSize: 'S',
    outlineColor: colors.professionalNavy,
    checkedBgColor: colors.professionalNavy,
    bgColor: colors.grey[200],
    disabledBgColor: colors.grey[300]
};

export default toggle;
