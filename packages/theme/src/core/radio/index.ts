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
    helperTextColor: {
        default: colors.black,
        disabled: colors.grey[500],
        error: colors.red[500]
    },
    borderColor: {
        default: colors.black,
        active: colors.blue[500],
        error: colors.red[500]
    },
    disabledBorderColor: {
        active: colors.grey[200],
        default: colors.grey[500]
    },
    hoveredBorderColor: {
        active: colors.blue[400],
        error: colors.red[400]
    }
};

export default radio;
