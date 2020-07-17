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
    colors: {
        default: { iconColor: colors.grey[600], bgColor: colors.blue[100] },
        disabled: { iconColor: colors.grey[300], bgColor: 'transparent' },
        hovered: { iconColor: colors.white, bgColor: colors.blue[400] }
    }
};

export default icon;
