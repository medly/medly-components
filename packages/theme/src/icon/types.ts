export type IconSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface IconTheme {
    sizes: { [k in IconSizes]: string };
    defaultColor: string;
}
