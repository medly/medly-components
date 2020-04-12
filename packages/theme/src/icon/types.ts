export type IconSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';

export interface IconTheme {
    /** Avatar sizes */
    sizes: { [k in IconSizes]: string };
    /** Avatar default color */
    defaultColor: string;
}
