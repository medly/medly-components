interface TextFieldTheme {
    background: string;
    labelColor: string;
    textColor: string;
    triangleColor: string;
    borderColor: string;
}

interface IconTheme {
    background: string;
    hoverBackground: string;
    color: string;
    hoverColor: string;
}

interface ChipTheme {
    background: string;
    color: string;
    border: string;
    hoverBorder: string;
}

interface MultiSelectComp {
    icon: {
        default: IconTheme;
        active: IconTheme;
        error: IconTheme;
        disabled: IconTheme;
    };
    chip: {
        default: ChipTheme;
        active: ChipTheme;
        error: ChipTheme;
        disabled: ChipTheme;
    };
}

export interface MultiSelectTheme {
    filled: MultiSelectComp;
    outlined: MultiSelectComp;
}
