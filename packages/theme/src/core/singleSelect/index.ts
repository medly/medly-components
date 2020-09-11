import colors from '../colors';
import { SingleSelectTheme } from './types';

const singleSelect: SingleSelectTheme = {
    shadowColor: '#B0BCC8',
    variant: {
        // outlined & filled variant theme is coming from textField
        flat: {
            height: '3.2rem',
            bgColor: {
                default: colors.white,
                hovered: colors.grey[50],
                pressed: colors.grey[100],
                activated: colors.grey[50],
                disabled: colors.white
            },
            labelColor: {
                default: colors.grey[900],
                hovered: colors.grey[900],
                pressed: colors.black,
                activated: colors.grey[900],
                disabled: colors.grey[400],
                error: colors.red[500]
            },
            valueColor: {
                default: colors.blue[500],
                hovered: colors.blue[600],
                pressed: colors.blue[700],
                activated: colors.blue[500],
                disabled: colors.grey[400],
                error: colors.red[500]
            }
        }
    },
    options: {
        borderRadius: {
            flat: '0.8rem',
            filled: '0 0 0.4rem 0.4rem',
            outlined: '0.4rem'
        }
    },
    option: {
        textVariant: {
            S: 'body2',
            M: 'body1'
        },
        minHeight: {
            flat: '3.2rem',
            filled: '4rem',
            outlined: '4rem'
        },
        bgColor: {
            default: colors.white,
            hovered: colors.grey[50],
            pressed: colors.grey[100],
            selected: colors.blue[100],
            error: colors.red[100]
        },
        textColor: {
            default: colors.black,
            selected: colors.blue[500],
            error: colors.red[500],
            disabled: colors.grey[500]
        }
    }
};

export default singleSelect;
