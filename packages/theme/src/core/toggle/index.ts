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
    outlineColor: colors.violet[500],
    checkedBgColor: colors.violet[500],
    bgColor: colors.grey[300],
    disabledBgColor: colors.grey[400]
};

export default toggle;
