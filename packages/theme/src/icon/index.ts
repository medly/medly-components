import colors from '../core/colors';
import { IconTheme } from './types';

const icon: IconTheme = {
    sizes: {
        XS: '1.6rem',
        S: '2.0rem',
        M: '2.4rem',
        L: '3.2rem',
        XL: '4.0rem'
    },
    defaultIconColor: colors.grey[600],
    disabledIconColor: colors.grey[300],
    hoverIconColor: colors.grey[800],
    bgColor: colors.grey[100]
};

export default icon;
