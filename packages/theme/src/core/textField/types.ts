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
            bgColor: string;
            labelColor: string;
            textColor: string;
            borderColor: string;
        };
        active: {
            bgColor: string;
            placeholderColor: string;
            borderColor: string;
            labelColor: string;
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
    /** fusion variant theme */
    fusion: {
        default: {
            borderColor: string;
            bgColor: string;
            textColor: string;
            labelColor: string;
            helperTextColor: string;
        };
        hover: {
            bgColor: string;
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
            defaultTextColor: string;
            activeTextColor: string;
        };
    };
}
