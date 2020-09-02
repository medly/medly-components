import colors from '../colors';
import { DatePickerTheme } from './types';

const grey = colors.grey;
const red = colors.red;
const blue = colors.blue;

const iconStyles = {
    default: {
        color: grey[600],
        hoverColor: grey[800],
        backgroundColor: grey[100]
    },
    active: {
        color: blue[500],
        hoverColor: blue[500],
        backgroundColor: blue[100]
    },
    error: {
        color: red[500],
        hoverColor: red[500],
        backgroundColor: red[100]
    },
    disabled: {
        color: grey[300],
        hoverColor: grey[300],
        backgroundColor: grey[100]
    }
};

const datePicker: DatePickerTheme = {
    selectedDateBgColor: colors.blue[500],
    selectedDateColor: colors.white,
    hoveredDateColor: colors.grey[100],
    nonActiveMonthDateColor: colors.grey[400],
    currentDateBorderColor: colors.grey[300],
    borderRadius: '50%',
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
