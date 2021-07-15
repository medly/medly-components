import { HTMLProps } from '@medly-components/utils';
import { FormActionSchema } from '../Actions/types';
import { FieldProperties } from '../Fields/types';

type FormProps = Omit<HTMLProps<HTMLFormElement>, 'onSubmit'>;

export interface FormFieldSchema {
    [key: string]: FieldProperties;
}

export interface Props extends FormProps {
    /** Field Schema */
    fieldSchema: FormFieldSchema | ((values: { [key: string]: any }) => FormFieldSchema);
    /** Action Schema */
    actionSchema?: FormActionSchema;
    /** Function to be called on submit */
    onSubmit: (data: { [key: string]: any }) => void;
    /** Label for default action */
    actionLabel?: string;
    /** Form header */
    header?: string;
    /** Form Helper text */
    helperText?: string;
    /** Api failure error messages (key should be aligned with the field key) */
    apiErrorMessages?: { [key: string]: any };
    /** Set it to true to hide the actions */
    hideActions?: boolean;
    /** Initial state of the form */
    initialState?: { [key: string]: any };
    /** Set it true to take the full width of the parent */
    fullWidth?: boolean;
    /** This key is to set the min width in px/rem/% (1rem = 10px) */
    minWidth?: string;
    /** Function to be called on values updating */
    onChange?: (values: { [key: string]: any }) => void;
    /** optional css grid gap setting */
    gridGap?: string;
    /** Show prefix, suffix, helper text, and character count elements. If set to false, only the input and label will be rendered.
     * This field is applicable to TextFields, SingleSelect, and DatePicker
     */
    showDecorators?: boolean;
    /** Input Variants */
    variant?: 'outlined' | 'filled' | 'fusion';
}
