import { HTMLProps, Omit } from '@medly-components/utils';
import { ChangeEvent } from 'react';
import { Placement } from '../Popover/types';
import { TextFieldVariants } from '../TextField/types';

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

export interface DatePickerProps extends Omit<HTMLProps<HTMLInputElement>, 'value' | 'onChange' | 'size' | 'prefix'> {
    /** Current Date */
    value: Date | string | null;
    /** Function to be called on changing the date */
    onChange: (date: Date | null) => void;
    /** Input variants for DatePicker */
    variant?: TextFieldVariants;
    /** Function to be called on a blur and invalid event with either a date or null */
    validator?: (val: Date | null, eventType: ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => string;
    /** Input Size */
    size?: 'S' | 'M';
    /** Date display format */
    displayFormat?: DisplayFormat;
    /** Disable date selection */
    disabled?: boolean;
    /** Show prefix, suffix, and character count elements. If set to false, only the input, label, and helper text icon will be rendered. */
    showDecorators?: boolean;
    /** Use when required in any form */
    required?: boolean;
    /** Date picker label */
    label?: string;
    /** Take full width of the parent component */
    fullWidth?: boolean;
    /** Min width of the component */
    minWidth?: string;
    /** Min selectable date */
    minSelectableDate?: Date;
    /** Max selectable date */
    maxSelectableDate?: Date;
    /** Helper text */
    helperText?: string;
    /** Error text */
    errorText?: string;
    /** Popover placement */
    popoverPlacement?: Placement;
    /** Show the calendar icon */
    showCalendarIcon?: boolean;
    /** Show helper text and error text in a tooltip (popover) */
    showTooltipForHelperAndErrorText?: boolean;
    /** Display calendar icon left or right */
    calendarIconPosition?: 'left' | 'right';
    /** Default month to show on calendar */
    defaultMonth?: number;
    /** Default year to show on calendar */
    defaultYear?: number;
    /** Set it true to hide the input */
    hideInput?: boolean;
}

export interface StyleProps extends Pick<DatePickerProps, 'variant' | 'fullWidth' | 'disabled' | 'minWidth' | 'size' | 'hideInput'> {
    isErrorPresent?: boolean;
    isActive?: boolean;
    placement: Placement;
    variant: Required<DatePickerProps>['variant'];
}
