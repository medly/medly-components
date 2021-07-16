import colors from '../colors';
import { TextFieldTheme } from './types';

const textField: TextFieldTheme = {
    height: {
        S: '4rem',
        M: '5.6rem'
    },
    textVariant: {
        S: 'body2',
        M: 'body1'
    },
    outlined: {
        default: {
            bgColor: colors.white,
            borderColor: colors.grey[500],
            iconColor: colors.grey[600],
            textColor: colors.black,
            labelColor: colors.grey[600],
            helperTextColor: colors.grey[700]
        },
        hover: {
            borderColor: colors.grey[600],
            shadowColor: colors.grey[600]
        },
        disabled: {
            labelColor: colors.grey[400],
            textColor: colors.grey[800],
            borderColor: colors.grey[300],
            bgColor: colors.white,
            cursor: 'not-allowed'
        },
        active: {
            bgColor: colors.white,
            placeholderColor: colors.grey[300],
            borderColor: colors.blue[500],
            labelColor: colors.blue[500],
            shadowColor: colors.blue[500]
        },
        error: {
            bgColor: colors.white,
            caretColor: colors.red[500],
            placeholderColor: colors.grey[300],
            cursorColor: colors.red[500],
            borderColor: colors.red[500],
            labelColor: colors.red[500],
            helperTextColor: colors.red[500],
            shadowColor: colors.red[500]
        }
    },
    filled: {
        default: {
            borderColor: colors.grey[700],
            bgColor: colors.grey[100],
            iconColor: colors.grey[700],
            textColor: colors.black,
            labelColor: colors.grey[700],
            helperTextColor: colors.grey[700]
        },
        hover: {
            borderColor: colors.grey[700]
        },
        disabled: {
            bgColor: colors.grey[50],
            labelColor: colors.grey[400],
            textColor: colors.grey[800],
            borderColor: colors.grey[300],
            cursor: 'not-allowed'
        },
        active: {
            placeholderColor: 'rgba(0, 90, 238, .2)',
            bgColor: colors.blue[100],
            borderColor: colors.blue[500],
            labelColor: colors.blue[500]
        },
        error: {
            caretColor: colors.red[500],
            placeholderColor: 'rgba(204, 0, 0, .2)',
            bgColor: colors.red[100],
            cursorColor: colors.red[500],
            borderColor: colors.red[500],
            labelColor: colors.red[500],
            helperTextColor: colors.red[500]
        }
    },
    fusion: {
        default: {
            borderColor: colors.grey[400],
            bgColor: colors.grey[50],
            textColor: colors.black,
            labelColor: colors.grey[700],
            helperTextColor: colors.grey[700]
        },
        hover: {
            bgColor: colors.grey[50],
            borderColor: colors.grey[600]
        },
        disabled: {
            bgColor: colors.white,
            labelColor: colors.grey[400],
            textColor: colors.grey[700],
            borderColor: colors.grey[300],
            cursor: 'not-allowed'
        },
        active: {
            placeholderColor: colors.grey[300],
            bgColor: colors.white,
            borderColor: colors.blue[500],
            labelColor: colors.blue[500]
        },
        error: {
            caretColor: colors.black,
            placeholderColor: colors.grey[300],
            bgColor: '#FCF2F2',
            cursorColor: colors.red[500],
            borderColor: colors.red[500],
            labelColor: colors.red[500],
            helperTextColor: colors.red[500],
            defaultTextColor: colors.red[500],
            activeTextColor: colors.black
        }
    }
};

export default textField;
