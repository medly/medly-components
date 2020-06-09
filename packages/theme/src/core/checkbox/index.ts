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
            iconColor: colors.black,
            bgColor: colors.white
        },
        disabled: {
            borderColor: colors.grey[500],
            iconColor: colors.grey[500],
            bgColor: colors.white
        },
        hover: {
            borderColor: colors.communityBlue[400],
            iconColor: colors.white,
            bgColor: colors.communityBlue[400]
        },
        checkedDisabled: {
            borderColor: colors.grey[200],
            iconColor: colors.grey[500],
            bgColor: colors.grey[200]
        },
        active: {
            borderColor: colors.communityBlue[500],
            iconColor: colors.white,
            bgColor: colors.communityBlue[500]
        },
        error: {
            borderColor: colors.red[500],
            iconColor: colors.white,
            bgColor: colors.white
        },
        checkedError: {
            borderColor: colors.red[500],
            iconColor: colors.white,
            bgColor: colors.red[500]
        }
    },
    defaultSize: 'S'
};

export default checkbox;
