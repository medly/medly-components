export interface TextFieldTheme {
    /**  */
    height: {
        S: string;
        M: string;
    };
    /** Outline variant theme */
    outlined: {
        default: {
            borderColor: string;
            iconColor: string;
            textColor: string;
            labelColor: string;
            helperTextColor: string;
        };
        hover: {
            borderColor: string;
            shadowColor: string;
        };
        disabled: {
            labelColor: string;
            textColor: string;
            borderColor: string;
        };
        active: {
            placeholderColor: string;
            borderColor: string;
            labelColor: string;
            shadowColor: string;
        };
        error: {
            caretColor: string;
            placeholderColor: string;
            cursorColor: string;
            borderColor: string;
            labelColor: string;
            helperTextColor: string;
            shadowColor: string;
        };
    };
    /** Filled variant theme */
    filled: {
        default: {
            borderColor: string;
            bgColor: string;
            iconColor: string;
            textColor: string;
            labelColor: string;
            helperTextColor: string;
        };
        hover: {
            borderColor: string;
        };
        disabled: {
            bgColor: string;
            labelColor: string;
            textColor: string;
            borderColor: string;
        };
        active: {
            placeholderColor: string;
            bgColor: string;
            borderColor: string;
            labelColor: string;
        };
        error: {
            placeholderColor: string;
            bgColor: string;
            caretColor: string;
            cursorColor: string;
            borderColor: string;
            labelColor: string;
            helperTextColor: string;
        };
    };
}
