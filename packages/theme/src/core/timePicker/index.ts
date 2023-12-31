import colors from '../colors';
import variants from '../font/variants';
import { TimePickerTheme } from './types';

const timePickerTheme: TimePickerTheme = {
    bgColor: colors.white,
    borderRadius: `0.4rem`,
    shadowColor: colors.grey[400],
    label: {
        ...variants.body2,
        color: colors.grey[700]
    },
    selectedOption: {
        ...variants.body1,
        fontWeight: 'Medium',
        color: colors.black
    },
    nonSelectedOption: {
        ...variants.body2,
        color: colors.grey[700]
    }
};

export default timePickerTheme;
