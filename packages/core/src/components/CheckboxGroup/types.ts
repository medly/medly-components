import { CheckboxSizes, FontVariants, FontWeights } from '@medly-components/theme';
import { HTMLProps, Omit } from '@medly-components/utils';
import { Dispatch, RefObject, SetStateAction } from 'react';

export type CheckboxGroupWrapperProps = {
    fullWidth?: boolean;
    hasError?: boolean;
    showSelectAll?: boolean;
    disabled?: boolean;
    hasHelperOrErrorText?: boolean;
};

export type Option = {
    value: any;
    label: string;
    showSelectAll?: boolean;
    disabled?: boolean;
    errorText?: string;
    helperText?: string;
    columns?: number;
};

export type useCheckboxGroupKeyboardNavigationProps = {
    cursor: number;
    setCursor: Dispatch<SetStateAction<number>>;
    isHovered?: boolean;
    setIsHovered?: Dispatch<SetStateAction<boolean>>;
    options: Option[];
    handleSelectAllClick: () => void;
    checkboxGroupRef: RefObject<any>;
};

export interface CheckboxGroupProps extends Omit<HTMLProps<HTMLDivElement>, 'size' | 'onChange'> {
    /** Array of selected values */
    values?: any[];
    /** This method will be called with checked values */
    onChange: (values: any[]) => void;
    /** Options */
    options: Option[];
    /** Label */
    label?: string;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Makes the whole option row area clickable */
    fullWidthOptions?: boolean;
    /** Disable all the checkboxes */
    disabled?: boolean;
    /** Label Variant */
    labelVariant?: FontVariants;
    /** Label weight */
    labelWeight?: FontWeights;
    /** Name attribute of all the checkboxes */
    name?: string;
    /** Checkbox size */
    size?: CheckboxSizes;
    /** Show checkbox to select all options */
    showSelectAll?: boolean;
    /** Error text for checkboxGroup */
    errorText?: string;
    /** Helper text for checkboxGroup */
    helperText?: string;
    /** Use this prop to render option in multiple columns */
    columns?: number;
    /** Function will called with the input value on blur and change event */
    validator?: (values: any[]) => string;
    /** This will be handled internally */
    parentHasError?: boolean;
    /** This will be handled internally for keyboard navigation */
    isHovered?: boolean;
    /** This will be handled internally for keyboard navigation */
    setIsHovered?: Dispatch<SetStateAction<boolean>>;
}
