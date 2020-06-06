export type CheckboxSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';

type Colors = {
    borderColor: string;
    iconColor: string;
    bgColor: string;
    textColor: string;
    outlineColor: string;
};

export interface CheckboxTheme {
    sizes: { [k in CheckboxSizes]: string };
    colors: {
        default: Colors;
        hover: Colors;
        disabled: Colors;
        active: Colors;
        error: Colors;
    };
    defaultSize: CheckboxSizes;
}
