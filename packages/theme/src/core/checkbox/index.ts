import colors from '../colors';
import { CheckboxTheme } from './types';

const checkbox: CheckboxTheme = {
    sizes: {
        XS: '14px',
        S: '18px',
        M: '22px',
        L: '26px',
        XL: '30px'
    },
    colors: {
        default: {
            borderColor: colors.black,
            labelColor: colors.black
        },
        disabled: {
            bgColor: colors.grey[200],
            labelColor: colors.grey[200],
            iconColor: colors.grey[500],
            hoverBgColor: colors.grey[200]
        },
        confirmation: {
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
