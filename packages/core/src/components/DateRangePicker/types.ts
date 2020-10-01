import { DateRangeInput } from '@datepicker-react/styled';
import { GetComponentProps, HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';
import { Placement } from '../Popover/types';

type PickerProps = Omit<
    GetComponentProps<typeof DateRangeInput>,
    'onFocusChange' | 'onDatesChange' | 'startDate' | 'endDate' | 'focusedInput' | 'placement' | 'displayFormat'
>;

export interface Props extends Omit<HTMLProps<HTMLInputElement>, 'prefix' | 'size' | 'height' | 'value' | 'onChange'>, WithThemeProp {
    /** ID */
    id: string;
    /** From Label */
    fromLabel: string;
    /** To Label */
    toLabel: string;
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
    /** Placeholder for input */
    placement?: Placement;
    /** Min width in px/rem/% (1rem = 10px)*/
    minWidth?: string;
    /** Selected date range */
    value: { startDate: Date | null; endDate: Date | null };
    /** Minimum selectable Date */
    minSelectableDate?: Date;
    /** Maximum selectable Date */
    maxSelectableDate?: Date;
    /** Function to be called on change of the dates */
    onChange: (value: { startDate: Date | null; endDate: Date | null }) => void;
    /** Date display format */
    displayFormat?:
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
}

export interface StyledProps extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
    size?: 'S' | 'M';
    placement: Placement;
    fullWidth?: boolean;
    disabled?: boolean;
}

export interface StyleProps extends Pick<Props, 'variant' | 'fullWidth' | 'disabled' | 'minWidth' | 'size'> {
    isErrorPresent?: boolean;
    isActive?: boolean;
}
