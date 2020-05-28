import { HTMLProps } from '@medly-components/utils';
import { FieldProperties } from '../Fields/types';

type FormProps = Omit<HTMLProps<HTMLFormElement>, 'onSubmit'>;

export interface FormSchema {
    [key: string]: FieldProperties;
}
export interface Props extends FormProps {
    // Form Schema
    schema: FormSchema;
    // Function to be called on submit
    onSubmit: (data: { [key: string]: any }) => void;
    // Form submit button label
    actionLabel?: string;
    // Set it to true to hide the actions
    hideActions?: boolean;
    // Initial state of the form
    initialState?: { [key: string]: any };
    // Set it true to take the full width of the parent
    fullWidth?: boolean;
    // This key is to set the min width in px/rem/% (1rem = 10px)*/
    minWidth?: string;
}
