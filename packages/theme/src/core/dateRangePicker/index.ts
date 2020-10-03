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
    }
};

export default dateRangePicker;
