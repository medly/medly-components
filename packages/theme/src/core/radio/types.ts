export type RadioSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface RadioTheme {
    sizes: { [k in RadioSizes]: string };
    defaultSize: RadioSizes;
    labelColor: {
        default: string;
        disabled: string;
    };
    labelPadding: {
        bottom: string;
        left: string;
        right: string;
        top: string;
    },
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
    borderColor: {
        hovered: {
            error: string;
            active: string;
        };
        pressed: {
            error: string;
            active: string;
        };
    }
    boxShadow: {
        spreadRadius: string;
        blurRadius: string;
    };
}
