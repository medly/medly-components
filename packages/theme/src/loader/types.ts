export type LoaderSizes = 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface LoaderTheme {
    sizes: { [k in LoaderSizes]: string };
    defaultColor: string;
}
