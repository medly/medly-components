import colors from '../colors';
import { CheckboxTheme } from './types';

const checkbox: CheckboxTheme = {
    sizes: {
        XS: '1.4rem',
        S: '1.8rem',
        M: '2.2rem',
        L: '2.6rem',
        XL: '3rem'
    },
    colors: {
        default: {
            borderColor: colors.black,
            labelColor: colors.black
        },
        disabled: {
            bgColor: colors.grey[200],
            labelColor: colors.grey[500],
            iconColor: colors.grey[500]
        },
        active: {
            bgColor: colors.communityBlue[500],
            iconColor: colors.white,
            hoverBgColor: colors.communityBlue[400]
        },
        error: {
            bgColor: colors.red[500],
            iconColor: colors.white,
            hoverBgColor: colors.red[400]
        }
    },
    defaultSize: 'S'
};

export default checkbox;
