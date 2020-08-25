import { State } from '../common/types';
interface IconTheme {
    backgroundColor: string;
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
    nonActiveMonthDateColor: string;
    filled: DatePickerVariant;
    outlined: DatePickerVariant;
}
