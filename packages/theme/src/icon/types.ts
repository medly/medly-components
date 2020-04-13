export type IconSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface IconTheme {
    /** Icon sizes */
    sizes: { [k in IconSizes]: string };
    /** Icon default color */
    defaultIconColor: string;
    /** Icon disabled color */
    disabledIconColor: string;
    /** Icon color when we hover on it */
    hoverIconColor: string;
    /** Icon background colors */
    bgColor: string;
}
