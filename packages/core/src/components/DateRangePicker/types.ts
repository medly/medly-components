import { DateRangeInput } from '@datepicker-react/styled';
import { GetComponentProps, Omit } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';
import { Placement } from '../Popover/types';

type PickerProps = Omit<
    GetComponentProps<typeof DateRangeInput>,
    'onFocusChange' | 'onDatesChange' | 'startDate' | 'endDate' | 'focusedInput' | 'placement'
>;

export interface Props extends PickerProps {
    /** Label Position */
    labelPosition?: LabelPositions;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Disable date selection */
    disabled?: boolean;
    /** To be used when it is required in any form */
    required?: boolean;
    /** Min width of the component */
    minWidth?: number;
    /** Date picker label */
    label?: string;
    /** Placeholder for input */
    placement?: Placement;
    /** Selected date range */
    value: { startDate: Date | null; endDate: Date | null };
    /** Function to be called on change of the dates */
    onChange: (value: { startDate: Date | null; endDate: Date | null }) => void;
}

export interface StyledProps {
    placement?: Placement;
    fullWidth?: boolean;
    disabled?: boolean;
}
