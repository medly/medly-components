import colors from '../colors';
import { RadioTheme } from './types';

const radio: RadioTheme = {
    sizes: {
        XS: '1.4rem',
        S: '1.8rem',
        M: '2.2rem',
        L: '2.6rem',
        XL: '3rem'
    },
    defaultSize: 'S',
    labelColor: {
        default: 'inherit',
        disabled: colors.grey[500]
    },
    labelPadding: {
        bottom: '1.6rem 0',
        left: '0 1.6rem',
        right: '0 1.6rem',
        top: '1.6rem 0',
    },
    helperTextColor: {
        default: colors.black,
        disabled: colors.grey[500],
        error: colors.red[500]
    },
    fillColor: {
        default: colors.black,
        active: colors.blue[500],
        error: colors.red[500],
        hovered: {
            default: colors.blue[500],
            error: colors.red[600]
        },
        disabled: colors.grey[500],
    },
    borderColor: {
        hovered: {
            error: colors.red[500],
            active: colors.blue[500]
        },
        pressed: {
            error: colors.red[600],
            active: colors.blue[600]
        }
    },
    boxShadow: {
        spreadRadius: '0',
        blurRadius: '0.8rem'
    }
};

export default radio;
