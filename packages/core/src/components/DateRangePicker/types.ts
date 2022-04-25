import { HTMLProps, Omit } from '@medly-components/utils';
import { ChangeEvent } from 'react';
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
    /** Function to be called on changing the dates */
    onChange: (value: DateRangeType) => void;
    /** Function to be called when calendar popup closes */
    onPopupClose?: () => void;
    /** Variants */
    variant?: 'outlined' | 'filled';
    /** Function to be called with the input value on blur and invalid event */
    validator?: (val: DateRangeType, eventType: ChangeEvent<HTMLInputElement>) => string;
    /** Helper text */
    helperText?: string;
    /** Error text */
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
    /** Min selectable date */
    minSelectableDate?: Date;
    /** Max selectable date */
    maxSelectableDate?: Date;
    /** Date display format */
    displayFormat?: DisplayFormat;
    /** Start date label */
    startDateLabel?: string;
    /** End date label */
    endDateLabel?: string;
    /** Set it true to show single month in calendar popup */
    withSingleMonth?: boolean;
    /** Show Helper text and error text in a tooltip (popover) */
    showTooltipForHelperAndErrorText?: boolean;
    /** Provide date range selection custom options */
    customDateRangeOptions?: Array<{ label: string; value: DateRangeSelectionEnum }>;
};
