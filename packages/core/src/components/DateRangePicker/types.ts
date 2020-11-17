import { HTMLProps, Omit } from '@medly-components/utils';
import { DisplayFormat } from '../DatePicker/types';
import { Placement } from '../Popover/types';

export type DateRangeProps = Omit<HTMLProps<HTMLInputElement>, 'prefix' | 'size' | 'height' | 'value' | 'onChange'> & {
    /** Selected date range */
    value: { startDate: Date | null; endDate: Date | null };
    /** Function to be called on change of the dates */
    onChange: (value: { startDate: Date | null; endDate: Date | null }) => void;
    /** Variants */
    variant?: 'outlined' | 'filled';
    /** Helper Text */
    helperText?: string;
    /** error text */
    errorText?: string;
    /** Size */
    size?: 'S' | 'M';
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Disable date selection */
    disabled?: boolean;
    /** Popover placement */
    popoverPlacement?: Placement;
    /** Min width in px/rem/% (1rem = 10px)*/
    minWidth?: string;
    /** Minimum selectable Date */
    minSelectableDate?: Date;
    /** Maximum selectable Date */
    maxSelectableDate?: Date;
    /** Date display format */
    displayFormat?: DisplayFormat;
    /** From Label */
    startDateLabel?: string;
    /** To Label */
    endDateLabel?: string;
};
