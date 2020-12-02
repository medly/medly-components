import colors from '../colors';
import { DateRangePickerTheme } from './types';

const dateRangePicker: DateRangePickerTheme = {
    inputSeparatorColor: {
        filled: {
            default: `rgba(84, 106, 127, 0.2)`,
            active: colors.blue[500],
            error: colors.red[500],
            disabled: colors.grey[300]
        },
        outlined: { default: `rgba(84, 106, 127, 0.2)`, active: colors.blue[500], error: colors.red[500], disabled: colors.grey[300] }
    },
    date: {
        borderRadius: '50%',
        color: { selected: colors.white, disabled: colors.grey[400] },
        borderColor: {
            default: 'transparent',
            selected: colors.blue[500],
            hovered: colors.blue[500],
            disabled: 'transparent',
            currentDate: colors.grey[300]
        },
        bgColor: { default: 'transparent', selected: colors.blue[500], hovered: colors.grey[200], disabled: colors.white },
        fillColor: {
            hovered: colors.grey[100],
            selected: colors.blue[100]
        }
    }
};

export default dateRangePicker;
