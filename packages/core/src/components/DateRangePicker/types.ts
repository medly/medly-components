import { HTMLProps, Omit } from '@medly-components/utils';
import { DisplayFormat } from '../DatePicker/types';
import { Placement } from '../Popover/types';

export enum DateRangeSelectionEnum {
    WEEK = 'WEEK',
    MONTH = 'MONTH',
    YEAR = 'YEAR',
    CUSTOM = 'CUSTOM',
    QUARTER = 'QUARTER'
}

export enum PopoverTypes {
    CALENDAR = 'CALENDAR',
    CUSTOM_RANGE_OPTIONS = 'CUSTOM_RANGE_OPTIONS'
}

export type DateRangeType = { startDate: Date | null; endDate: Date | null };

export type DateRangeProps = Omit<HTMLProps<HTMLInputElement>, 'prefix' | 'size' | 'height' | 'value' | 'onChange'> & {
    /** Selected date range */
    value: DateRangeType;
    /** Function to be called on change of the dates */
    onChange: (value: DateRangeType) => void;
    /** Function to be called after date selection */
    onClose?: () => void;
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
    /** Show prefix, suffix, and character count elements. If set to false, only the input, label, and helper-text icon will be rendered. */
    showDecorators?: boolean;
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
    /** Show Helper text and error text in a tooltip (popover) */
    showTooltipForHelperAndErrorText?: boolean;
    /** Provide date range selection custom options */
    customDateRangeOptions?: Array<{ label: string; value: DateRangeSelectionEnum }>;
};
