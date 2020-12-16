import { HTMLProps, Omit } from '@medly-components/utils';
import { DisplayFormat } from '../DatePicker/types';
import { Placement } from '../Popover/types';

export type DateRangeType = { startDate: Date | null; endDate: Date | null };

export type DateRangeProps = Omit<HTMLProps<HTMLInputElement>, 'prefix' | 'size' | 'height' | 'value' | 'onChange'> & {
    /** Selected date range */
    value: DateRangeType;
    /** Function to be called on change of the dates */
    onChange: (value: DateRangeType) => void;
    /** Variants */
    variant?: 'outlined' | 'filled';
    /** Function will called with the input value on blur and invalid event */
    validator?: (val: DateRangeType, eventType?: string) => string;
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
    /** Start Date Label */
    startDateLabel?: string;
    /** End date Label */
    endDateLabel?: string;
    /** Set it true to show single month in calendar popup */
    withSingleMonth?: boolean;
};
