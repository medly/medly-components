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
            placeholderColor: string;
        };
        hover: {
            borderColor: string;
            shadowColor: string;
            borderWidth: string;
            iconColor: string;
        };
        disabled: {
            bgColor: string;
            labelColor: string;
            textColor: string;
            borderColor: string;
            cursor: string;
            iconColor: string;
        };
        active: {
            bgColor: string;
            borderColor: string;
            borderRadius: string;
            borderWidth: string;
            labelColor: string;
            placeholderColor: string;
            shadowColor: string;
            iconColor: string;
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
            iconColor: string;
        };
    };
    /** Filled variant theme */
    filled: {
        default: {
            borderColor: string;
            bgColor: string;
            textColor: string;
            labelColor: string;
            helperTextColor: string;
            iconColor: string;
            placeholderColor: string;
        };
        hover: {
            borderColor: string;
            iconColor: string;
        };
        disabled: {
            bgColor: string;
            labelColor: string;
            textColor: string;
            borderColor: string;
            cursor: string;
            iconColor: string;
        };
        active: {
            bgColor: string;
            borderColor: string;
            labelColor: string;
            placeholderColor: string;
            iconColor: string;
        };
        error: {
            placeholderColor: string;
            bgColor: string;
            caretColor: string;
            cursorColor: string;
            borderColor: string;
            labelColor: string;
            helperTextColor: string;
            iconColor: string;
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
            iconColor: string;
            placeholderColor: string;
        };
        hover: {
            bgColor: string;
            borderColor: string;
            borderWidth: string;
            iconColor: string;
        };
        disabled: {
            bgColor: string;
            labelColor: string;
            textColor: string;
            borderColor: string;
            cursor: string;
            iconColor: string;
        };
        active: {
            bgColor: string;
            borderColor: string;
            borderRadius: string;
            borderWidth: string;
            labelColor: string;
            placeholderColor: string;
            iconColor: string;
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
            iconColor: string;
        };
    };
}
