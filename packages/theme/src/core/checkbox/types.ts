export type CheckboxSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';

type Colors = {
    borderColor: string;
    iconColor: string;
    bgColor: string;
};

export interface CheckboxTheme {
    sizes: { [k in CheckboxSizes]: string };
    colors: {
        default: Colors;
        hover: Colors;
        disabled: Colors;
        checkedDisabled: Colors;
        active: Colors;
        error: Colors;
        checkedError: Colors;
    };
    defaultSize: CheckboxSizes;
}
