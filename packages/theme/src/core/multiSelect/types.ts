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

export type State = 'default' | 'active' | 'error' | 'disabled';

interface MultiSelectComp {
    icon: {
        [k in State]: IconTheme;
    };
    chip: {
        [k in State]: ChipTheme;
    };
}

export interface MultiSelectTheme {
    filled: MultiSelectComp;
    outlined: MultiSelectComp;
}
