export type IconSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface IconTheme {
    /** Icon sizes */
    sizes: { [k in IconSizes]: string };
    /** Icon default color */
    defaultColor: string;
    /** Icon disabled color */
    disabledColor: string;
    /** Icon background colors */
    bgColor: string;
}
