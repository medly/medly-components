import { HTMLProps, Omit } from '@medly-components/utils';

export type DisplayFormat =
    | 'dd/MM/yyyy'
    | 'MM/dd/yyyy'
    | 'dd/yyyy/MM'
    | 'MM/yyyy/dd'
    | 'yyyy/dd/MM'
    | 'yyyy/MM/dd'
    | 'dd-MM-yyyy'
    | 'dd-yyyy-MM'
    | 'MM-dd-yyyy'
    | 'MM-yyyy-dd'
    | 'yyyy-dd-MM'
    | 'yyyy-MM-dd';

export interface Props extends Omit<HTMLProps<HTMLInputElement>, 'value' | 'onChange' | 'size' | 'prefix'> {
    /** Current Date */
    value: Date | string | null;
    /** Function to be called on changing the date */
    onChange: (date: Date) => void;
    /** Input variants for DatePicker */
    variant?: 'outlined' | 'filled';
    /** Input Size */
    size?: 'S' | 'M';
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
    minWidth?: string;
    /** Minimum selectable Date */
    minSelectableDate?: Date;
    /** Maximum selectable Date */
    maxSelectableDate?: Date;
    /** Helper Text */
    helperText?: string;
    /** Error Text */
    errorText?: string;
    /** Function will called with the input value on Blur event*/
    validator?: (val: any) => string;
}

export interface StyleProps extends Pick<Props, 'variant' | 'fullWidth' | 'disabled' | 'minWidth' | 'size'> {
    isErrorPresent?: boolean;
    isActive?: boolean;
}
