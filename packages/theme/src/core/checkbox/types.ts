export type CheckboxSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface CheckboxTheme {
    sizes: { [k in CheckboxSizes]: string };
    defaultSize: string;
    fillColor: string;
    bgColor: string;
    disabledBgColor: string;
    borderColor: string;
    outlineColor: string;
}
