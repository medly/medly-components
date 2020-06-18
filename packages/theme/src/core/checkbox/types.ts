export type CheckboxSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface CheckboxTheme {
    sizes: { [k in CheckboxSizes]: string };
    defaultSize: CheckboxSizes;
    colors: {
        default: {
            borderColor: string;
            labelColor: string;
        };
        disabled: {
            bgColor: string;
            labelColor: string;
            iconColor: string;
        };
        active: {
            bgColor: string;
            iconColor: string;
            hoverBgColor: string;
        };
        error: {
            bgColor: string;
            iconColor: string;
            hoverBgColor: string;
        };
    };
}
