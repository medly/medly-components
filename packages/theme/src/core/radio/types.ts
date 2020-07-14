export type RadioSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface RadioTheme {
    sizes: { [k in RadioSizes]: string };
    defaultSize: RadioSizes;
    labelColor: {
        default: string;
        disabled: string;
    };
    helperTextColor: {
        default: string;
        disabled: string;
        error: string;
    };
    fillColor: {
        default: string;
        active: string;
        error: string;
        hovered: {
            default: string;
            error: string;
        };
        disabled: string;
    };
}
