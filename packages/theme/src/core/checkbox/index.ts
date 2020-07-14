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
    defaultSize: 'S',
    borderRadius: '22.2%',
    labelColor: {
        default: 'inherit',
        disabled: colors.grey[500]
    },
    helperTextColor: {
        default: colors.black,
        disabled: colors.grey[500],
        error: colors.red[500]
    },
    borderColor: {
        default: colors.black,
        error: colors.red[500],
        active: colors.blue[500],
        disabled: colors.grey[500]
    },
    bgColor: {
        disabled: colors.grey[200],
        active: colors.blue[500],
        error: colors.red[500],
        hovered: {
            active: colors.blue[600],
            error: colors.red[600]
        }
    },
    iconColor: {
        disabled: colors.grey[500],
        active: colors.white,
        error: colors.white
    }
};

export default checkbox;
