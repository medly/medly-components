export type IconSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';

export interface IconTheme {
    sizes: { [k in IconSizes]: string };
    defaultColor: string;
}
