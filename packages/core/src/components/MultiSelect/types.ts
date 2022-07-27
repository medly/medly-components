import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';
import type { Dispatch, FC, ReactNode, RefObject, SetStateAction } from 'react';

export interface Option {
    value: any;
    label: string;
    selected?: boolean;
    disabled?: boolean;
    creatable?: boolean;
}

export interface DefaultSelected {
    value: string;
    label: string;
}

export type UseKeyboardNavigationProps = {
    isParentCursorEnabled: boolean;
    setCursor: Dispatch<SetStateAction<number>>;
    options: Option[];
    handleOuterClick: () => void;
    ref: RefObject<any>;
};

export interface MultiSelectProps extends Omit<HTMLProps<HTMLInputElement>, 'onChange' | 'size' | 'prefix'> {
    /** Array of selected values */
    values?: any[];
    /** This method will be called with selected values */
    onChange?: (values: any[]) => void;
    /** Options */
    options: Option[];
    /** Variants */
    variant?: 'outlined' | 'filled' | 'fusion';
    /** Sizes */
    size?: 'S' | 'M';
    /** Label */
    label?: string;
    /** Set it it true to enable search functionality */
    isSearchable?: boolean;
    /** Function to be called on input value changes */
    onInputChange?: (value: string) => void;
    /** Set it true to disable the select action */
    disabled?: boolean;
    /** Show prefix, suffix, and character count elements. If set to false, only the input, label, and helper-text icon will be rendered. */
    showDecorators?: boolean;
    /** Set it true when it is required in any form */
    required?: boolean;
    /** Min width */
    minWidth?: string;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Helper Text */
    helperText?: string;
    /** Error Text */
    errorText?: string;
    /** Function to be called with the input value on Blur event */
    validator?: (val: any[]) => string;
    /** Show helper text and error text in a tooltip (popover) */
    showTooltipForHelperAndErrorText?: boolean;
    /** Leading icon or text */
    prefix?: FC<any>;
    /** Allows you to create dynamic options on the fly */
    isCreatable?: boolean;
    /** Shows all options when search value does not match any option */
    hideOptionsOnNoResult?: boolean;
    /** React component to be shown when no result is found. This requires hideOptionsOnNoResult to be set as false */
    noResultComponent?: ReactNode;
}

export interface SelectWrapperProps extends Omit<MultiSelectProps, 'ref' | 'options'>, WithThemeProp {
    variant: Required<MultiSelectProps>['variant'];
    isErrorPresent?: boolean;
    areOptionsVisible?: boolean;
}
