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
    defaultColor: 'rgba(0,0,0,0.54)',
    disabledColor: colors.grey[300],
    bgColor: colors.grey[100]
};

export default icon;
