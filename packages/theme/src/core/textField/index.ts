import colors from '../colors';
import { TextFieldTheme } from './types';

const textField: TextFieldTheme = {
    outlined: {
        default: {
            borderColor: colors.grey[500],
            iconColor: colors.grey[600],
            textColor: colors.black,
            labelColor: colors.grey[600],
            helperTextColor: colors.grey[700]
        },
        hover: {
            borderColor: colors.grey[600]
        },
        disabled: { labelColor: colors.grey[400], textColor: colors.grey[800], borderColor: colors.grey[300] },
        active: {
            placeholderColor: colors.grey[300],
            borderColor: colors.blue[500],
            labelColor: colors.blue[500]
        },
        error: {
            caretColor: colors.red[500],
            placeholderColor: colors.grey[300],
            cursorColor: colors.red[500],
            borderColor: colors.red[500],
            labelColor: colors.red[500],
            helperTextColor: colors.red[500]
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
        disabled: { bgColor: colors.grey[50], labelColor: colors.grey[400], textColor: colors.grey[800], borderColor: colors.grey[300] },
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
    }
};

export default textField;
