import { FontVariants } from '../font/types';

export interface TextFieldTheme {
    /**  */
    height: {
        S: string;
        M: string;
    };
    textVariant: {
        S: FontVariants;
        M: FontVariants;
    };
    /** Outline variant theme */
    outlined: {
        default: {
            bgColor: string;
            borderColor: string;
            borderRadius: string;
            borderWidth: string;
            helperTextColor: string;
            iconColor: string;
            labelColor: string;
            textColor: string;
        };
        hover: {
            borderColor: string;
            shadowColor: string;
            borderWidth: string;
        };
        disabled: {
            bgColor: string;
            labelColor: string;
            textColor: string;
            borderColor: string;
            cursor: string;
        };
        active: {
            bgColor: string;
            borderColor: string;
            borderRadius: string;
            borderWidth: string;
            labelColor: string;
            placeholderColor: string;
            shadowColor: string;
        };
        error: {
            bgColor: string;
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
            cursor: string;
        };
        active: {
            bgColor: string;
            borderColor: string;
            labelColor: string;
            placeholderColor: string;
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
    /** fusion variant theme */
    fusion: {
        default: {
            bgColor: string;
            borderColor: string;
            borderRadius: string;
            borderWidth: string;
            helperTextColor: string;
            labelColor: string;
            textColor: string;
        };
        hover: {
            bgColor: string;
            borderColor: string;
            borderWidth: string;
        };
        disabled: {
            bgColor: string;
            labelColor: string;
            textColor: string;
            borderColor: string;
            cursor: string;
        };
        active: {
            bgColor: string;
            borderColor: string;
            borderRadius: string;
            borderWidth: string;
            labelColor: string;
            placeholderColor: string;
        };
        error: {
            placeholderColor: string;
            bgColor: string;
            caretColor: string;
            cursorColor: string;
            borderColor: string;
            labelColor: string;
            helperTextColor: string;
            defaultTextColor: string;
            activeTextColor: string;
        };
    };
    flat: {
        default: {
            bgColor: string;
            borderColor: string;
            borderRadius: string;
            borderWidth: string;
            helperTextColor: string;
            iconColor: string;
            labelColor: string;
            textColor: string;
        };
        hover: {
            borderColor: string;
            shadowColor: string;
            borderWidth: string;
        };
        disabled: {
            bgColor: string;
            labelColor: string;
            textColor: string;
            borderColor: string;
            cursor: string;
        };
        active: {
            bgColor: string;
            borderColor: string;
            borderRadius: string;
            borderWidth: string;
            labelColor: string;
            placeholderColor: string;
            shadowColor: string;
        };
        error: {
            bgColor: string;
            caretColor: string;
            placeholderColor: string;
            cursorColor: string;
            borderColor: string;
            labelColor: string;
            helperTextColor: string;
            shadowColor: string;
        };
    };
}
