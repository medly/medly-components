import colors from '../colors';
import { ButtonTheme } from './types';

const button: ButtonTheme = {
    solid: {
        textColor: { default: colors.white, hovered: colors.white, pressed: colors.white, disabled: colors.grey[500] },
        bgColor: { default: colors.blue[500], hovered: colors.blue[600], pressed: colors.blue[700], disabled: colors.grey[200] }
    },
    outlined: {
        textColor: { default: colors.blue[500], hovered: colors.blue[600], pressed: colors.blue[700], disabled: colors.grey[500] },
        borderColor: { default: colors.blue[500], hovered: colors.blue[600], pressed: colors.blue[700], disabled: colors.grey[500] },
        bgColor: { default: 'transparent', hovered: 'transparent', pressed: colors.blue[100], disabled: 'transparent' }
    },
    flat: {
        textColor: { default: colors.blue[500], hovered: colors.blue[600], pressed: colors.blue[700], disabled: colors.grey[500] }
    },
    padding: {
        XS: '0.7rem 1.6rem 0.9rem',
        S: '0.8rem 2.4rem 1rem',
        M: '1rem 2.4rem 1.2rem',
        L: '1.2rem 2.4rem 1.4rem'
    },
    textVariant: {
        XS: 'button2',
        S: 'button2',
        M: 'button1',
        L: 'button1'
    },
    borderRadius: {
        square: '0.8rem',
        rounded: '100rem',
        circle: '50%'
    }
};

export default button;
