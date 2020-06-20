export type RadioSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface RadioTheme {
    sizes: { [k in RadioSizes]: string };
    defaultSize: RadioSizes;
    labelColor: {
        default: string;
        disabled: string;
    };
    borderColor: {
        default: string;
        active: string;
        error: string;
    };
    disabledBorderColor: {
        default: string;
        active: string;
    };
    hoveredBorderColor: {
        active: string;
        error: string;
    };
}
