import { HTMLProps, Omit } from '@medly-components/utils';

export type DisplayFormat =
    | 'dd/MM/yyyy'
    | 'dd/yyyy/MM'
    | 'MM/dd/yyyy'
    | 'MM/yyyy/dd'
    | 'yyyy/dd/MM'
    | 'yyyy/MM/dd'
    | 'dd-MM-yyyy'
    | 'dd-yyyy-MM'
    | 'MM-dd-yyyy'
    | 'MM-yyyy-dd'
    | 'yyyy-dd-MM'
    | 'yyyy-MM-dd';

export interface Props extends Omit<HTMLProps<HTMLInputElement>, 'value' | 'onChange'> {
    /** Id for the date component */
    id?: string;
    /** Current Date */
    value: Date | string | null;
    /** Function to be called on changing the date */
    onChange: (date: Date) => void;
    /** Placeholder for the input */
    placeholder?: string;
    /** Date display format */
    displayFormat?: DisplayFormat;
    /** Disable date selection */
    disabled?: boolean;
    /** To be used when it is required in any form */
    required?: boolean;
    /** Date picker label */
    label?: string;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Min width of the component */
    minWidth?: number;
    /** Minimum selectable Date */
    minSelectableDate?: Date;
    /** Maximum selectable Date */
    maxSelectableDate?: Date;
    /** Input variants for DatePicker */
    variant?: 'outlined' | 'filled';
}

export interface StyleProps extends Pick<Props, 'variant' | 'fullWidth' | 'disabled'> {
    errorText?: string;
    active?: boolean;
}
