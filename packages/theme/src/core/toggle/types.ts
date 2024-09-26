export type ToggleSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface ToggleTheme {
    sizes: { [k in ToggleSizes]: string };
    defaultSize: ToggleSizes;
    outlineColor: string;
    iconColor: string;
    bgColor: {
        default: string;
        checked: string;
        disabledDefault: string;
        disabledChecked: string;
    };
    textColor: {
        default: string;
        disabled: string;
    };
}
