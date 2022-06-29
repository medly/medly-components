export type ToggleSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface ToggleTheme {
    sizes: { [k in ToggleSizes]: string };
    defaultSize: ToggleSizes;
    checkedBgColor: string;
    bgColor: string;
    outlineColor: string;
    disabledBgColor: string;
    iconColor: string;
}
