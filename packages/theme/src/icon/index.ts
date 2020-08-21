import colors from '../core/colors';
import { IconTheme } from './types';

const icon: IconTheme = {
    sizes: {
        XS: {
            iconSize: '1.6rem',
            padding: '0.8rem'
        },
        S: {
            iconSize: '2rem',
            padding: '1rem'
        },
        M: {
            iconSize: '2.4rem',
            padding: '0.8rem'
        },
        L: {
            iconSize: '3.2rem',
            padding: '0.8rem'
        },
        XL: {
            iconSize: '4rem',
            padding: '0.8rem'
        }
    },
    borderRadius: '50%',
    colors: {
        default: { iconColor: colors.grey[600], bgColor: colors.blue[100] },
        disabled: { iconColor: colors.grey[300], bgColor: 'transparent' },
        hovered: { iconColor: colors.white, bgColor: colors.blue[400] }
    }
};

export default icon;
