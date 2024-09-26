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
    iconColor: colors.white,
    bgColor: {
        default: colors.grey[200],
        checked: colors.professionalNavy,
        disabledDefault: colors.grey[300],
        disabledChecked: colors.grey[800]
    },
    textColor: {
        default: colors.professionalNavy,
        disabled: colors.grey[400]
    }
};

export default toggle;
