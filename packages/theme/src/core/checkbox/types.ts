export type CheckboxSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface CheckboxTheme {
    sizes: { [k in CheckboxSizes]: string };
    defaultSize: CheckboxSizes;
    borderRadius: string;
    labelColor: {
        default: string;
        disabled: string;
    };
    labelPadding: {
        bottomPositioned: string;
        leftPositioned: string;
        rightPositioned: string;
        topPositioned: string;
    },
    helperTextColor: {
        default: string;
        disabled: string;
        error: string;
    };
    borderColor: {
        default: string;
        error: string;
        active: string;
        pressed: string;
        disabled: string;
    };
    bgColor: {
        disabled: string;
        active: string;
        error: string;
        hovered: {
            error: string;
            active: string;
        };
        pressed: {
            error: string;
            active: string;
        };
    };
    iconColor: {
        disabled: string;
        active: string;
        error: string;
    };
    boxShadow: {
        spreadRadius: string;
        blurRadius: string;
    };
}
