import colors from '../colors';
import { CheckboxTheme } from './types';

const checkbox: CheckboxTheme = {
    sizes: {
        XS: '12px',
        S: '16px',
        M: '24px',
        L: '36px',
        XL: '48px'
    },
    colors: {
        default: {
            borderColor: colors.black,
            iconColor: colors.black,
            bgColor: colors.white,
            outlineColor: '',
            textColor: colors.black
        },
        hover: {
            borderColor: colors.communityBlue[400],
            iconColor: colors.white,
            bgColor: colors.communityBlue[400],
            outlineColor: '',
            textColor: colors.black
        },
        disabled: {
            borderColor: colors.grey[500],
            iconColor: colors.grey[500],
            bgColor: colors.grey[200],
            outlineColor: '',
            textColor: colors.grey[500]
        },
        active: {
            borderColor: colors.communityBlue[500],
            iconColor: colors.white,
            bgColor: colors.communityBlue[500],
            outlineColor: '',
            textColor: colors.black
        },
        error: {
            borderColor: colors.red[500],
            iconColor: colors.white,
            bgColor: colors.red[500],
            outlineColor: '',
            textColor: colors.black
        }
    },
    defaultSize: 'S'
};

export default checkbox;
