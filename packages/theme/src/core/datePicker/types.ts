import { State } from '../common/types';
interface IconTheme {
    backgroundColor: string;
    color: string;
    hoverColor: string;
}

interface DatePickerVariant {
    icon: {
        [k in State]: IconTheme;
    };
}

export interface DatePickerTheme {
    selectedDateBgColor: string;
    selectedDateColor: string;
    hoveredDateColor: string;
    currentDateBorderColor: string;
    nonActiveMonthDateColor: string;
    borderRadius: string;
    filled: DatePickerVariant;
    outlined: DatePickerVariant;
    fusion: DatePickerVariant;
    flat: DatePickerVariant;
}
