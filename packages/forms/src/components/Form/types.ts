import { HTMLProps } from '@medly-components/utils';
import { FC } from 'react';
import { FormActionSchema } from '../Actions/types';
import { FormFieldProperties } from '../Fields/types';

type FormTypes = Omit<HTMLProps<HTMLFormElement>, 'onSubmit' | 'onChange'>;

export interface FormFieldSchema {
    [key: string]: FormFieldProperties;
}

export type FormComponentType<T = Record<string, any>> = FC<FormProps<T>>;

export interface FormProps<T> extends FormTypes {
    /** Field Schema */
    fieldSchema: FormFieldSchema | ((values: T) => FormFieldSchema);
    /** Action Schema */
    actionSchema?: FormActionSchema;
    /** Function to be called on submit */
    onSubmit: (data: T) => void;
    /** Label for default action */
    actionLabel?: string;
    /** Form header */
    header?: string;
    /** Form Helper text */
    helperText?: string;
    /** Api failure error messages (key should be aligned with the field key) */
    apiErrorMessages?: Record<string, any>;
    /** Set it to true to hide the actions */
    hideActions?: boolean;
    /** Initial state of the form */
    initialState?: T;
    /** Set it true to take the full width of the parent */
    fullWidth?: boolean;
    /** This key is to set the min width in px/rem/% (1rem = 10px) */
    minWidth?: string;
    /** Function to be called on values updating */
    onChange?: (values: T) => void;
    /** optional css grid gap setting */
    gridGap?: string;
    /** Show prefix, suffix, and character count elements. If set to false, only the input, label, and helper-text icon will be rendered.
     * This field is applicable to TextFields, SingleSelect, and DatePicker
     */
    showDecorators?: boolean;
    /** Input Variants */
    variant?: 'outlined' | 'filled' | 'fusion';
    /** Loading */
    isLoading?: boolean;
}
