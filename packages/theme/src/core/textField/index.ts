import colors from '../colors';
import { TextFieldTheme } from './types';

const defaultBorderWidth = '0.15rem';

const defaultOutlined = {
    borderWidth: defaultBorderWidth,
    borderRadius: '0.4rem'
};

const defaultFusion = {
    borderWidth: defaultBorderWidth,
    borderRadius: '0.4rem'
};

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
            borderRadius: defaultOutlined.borderRadius,
            borderWidth: defaultOutlined.borderWidth,
            helperTextColor: colors.grey[700],
            iconColor: colors.grey[600],
            labelColor: colors.grey[600],
            textColor: colors.black
        },
        hover: {
            borderColor: colors.grey[600],
            borderWidth: defaultOutlined.borderWidth,
            shadowColor: colors.grey[600],
            iconColor: colors.grey[600]
        },
        disabled: {
            labelColor: colors.grey[400],
            textColor: colors.grey[800],
            borderColor: colors.grey[300],
            bgColor: colors.white,
            cursor: 'not-allowed',
            iconColor: colors.grey[400]
        },
        active: {
            bgColor: colors.white,
            borderColor: colors.blue[500],
            borderRadius: defaultOutlined.borderRadius,
            borderWidth: defaultOutlined.borderWidth,
            labelColor: colors.blue[500],
            placeholderColor: colors.grey[300],
            shadowColor: colors.blue[500],
            iconColor: colors.blue[500]
        },
        error: {
            bgColor: colors.white,
            caretColor: colors.red[500],
            placeholderColor: colors.grey[300],
            cursorColor: colors.red[500],
            borderColor: colors.red[500],
            labelColor: colors.red[500],
            helperTextColor: colors.red[500],
            shadowColor: colors.red[500],
            iconColor: colors.red[500]
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
            borderColor: colors.grey[700],
            iconColor: colors.grey[700]
        },
        disabled: {
            bgColor: colors.grey[50],
            labelColor: colors.grey[400],
            textColor: colors.grey[800],
            borderColor: colors.grey[300],
            cursor: 'not-allowed',
            iconColor: colors.grey[400]
        },
        active: {
            placeholderColor: 'rgba(0, 90, 238, .2)',
            bgColor: colors.blue[100],
            borderColor: colors.blue[500],
            labelColor: colors.blue[500],
            iconColor: colors.blue[500]
        },
        error: {
            caretColor: colors.red[500],
            placeholderColor: 'rgba(204, 0, 0, .2)',
            bgColor: colors.red[100],
            cursorColor: colors.red[500],
            borderColor: colors.red[500],
            labelColor: colors.red[500],
            helperTextColor: colors.red[500],
            iconColor: colors.red[500]
        }
    },
    fusion: {
        default: {
            bgColor: colors.grey[50],
            borderColor: colors.grey[400],
            borderRadius: defaultFusion.borderRadius,
            borderWidth: defaultFusion.borderWidth,
            helperTextColor: colors.grey[700],
            labelColor: colors.grey[700],
            textColor: colors.black,
            iconColor: colors.grey[400]
        },
        hover: {
            bgColor: colors.grey[50],
            borderColor: colors.grey[600],
            borderWidth: defaultFusion.borderWidth,
            iconColor: colors.grey[600]
        },
        disabled: {
            bgColor: colors.white,
            labelColor: colors.grey[400],
            textColor: colors.grey[700],
            borderColor: colors.grey[300],
            cursor: 'not-allowed',
            iconColor: colors.grey[400]
        },
        active: {
            bgColor: colors.white,
            borderColor: colors.blue[500],
            borderRadius: defaultFusion.borderRadius,
            borderWidth: defaultFusion.borderWidth,
            labelColor: colors.blue[500],
            placeholderColor: colors.grey[300],
            iconColor: colors.blue[500]
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
            activeTextColor: colors.black,
            iconColor: colors.red[500]
        }
    }
};

export default textField;
