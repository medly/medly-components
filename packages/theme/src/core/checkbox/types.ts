export type CheckboxSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface CheckboxTheme {
    sizes: { [k in CheckboxSizes]: string };
    defaultSize: CheckboxSizes;
    labelColor: {
        default: string;
        disabled: string;
    };
    helperTextColor: {
        default: string;
        disabled: string;
        error: string;
    };
    borderColor: {
        default: string;
        error: string;
        active: string;
        disabled: string;
    };
    bgColor: {
        disabled: string;
        active: string;
        error: string;
    };
    iconColor: {
        disabled: string;
        active: string;
        error: string;
    };
    hoverBgColor: {
        active: string;
        error: string;
    };
}
