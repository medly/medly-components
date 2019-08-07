export type RadioSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface RadioTheme {
    sizes: { [k in RadioSizes]: string };
    defaultSize: string;
    fillColor: string;
    bgColor: string;
    disabledBgcolor: string;
    borderColor: string;
    outlineColor: string;
}
