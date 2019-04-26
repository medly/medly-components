import colors from '../colors';
import { ButtonTheme } from './types';

const button: ButtonTheme = {
    flat: {
        textColor: colors.blue[300]
    },
    outlined: {
        textColor: colors.blue[300],
        borderColor: colors.blue[300]
    },
    solid: {
        textColor: colors.white,
        bgColor: colors.blue[300]
    }
};

export default button;
