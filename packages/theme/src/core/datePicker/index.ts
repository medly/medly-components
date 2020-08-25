import colors from '../colors';
import { DatePickerTheme } from './types';

const grey = colors.grey;
const red = colors.red;
const blue = colors.blue;

const iconStyles = {
    default: {
        hoverColor: grey[800],
        backgroundColor: grey[100]
    },
    active: {
        hoverColor: blue[500],
        backgroundColor: blue[100]
    },
    error: {
        hoverColor: red[500],
        backgroundColor: red[100]
    },
    disabled: {
        hoverColor: grey[400],
        backgroundColor: grey[100]
    }
};

const datePicker: DatePickerTheme = {
    selectedDateBgColor: colors.blue[500],
    selectedDateColor: colors.white,
    nonActiveMonthDateColor: colors.grey[400],
    outlined: {
        icon: iconStyles
    },
    filled: {
        icon: {
            ...iconStyles,
            default: {
                ...iconStyles.default,
                hoverColor: grey[900],
                backgroundColor: grey[200]
            },
            active: {
                ...iconStyles.active,
                backgroundColor: blue[200]
            },
            error: {
                ...iconStyles.error,
                backgroundColor: red[200]
            }
        }
    }
};

export default datePicker;
