type Colors = {
    default: string;
    active: string;
    error: string;
    disabled: string;
};

export interface DateRangePickerTheme {
    inputSeparatorColor: {
        filled: Colors;
        outlined: Colors;
    };
}
