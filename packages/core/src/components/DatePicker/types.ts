import { DateSingleInput } from '@datepicker-react/styled';
import { GetComponentProps, Omit } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

type PickerProps = Omit<GetComponentProps<typeof DateSingleInput>, 'date' | 'showDatepicker' | 'onDateChange' | 'onFocusChange'>;

export interface Props extends PickerProps {
    /** Label Position */
    labelPosition?: LabelPositions;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Disable date selection */
    disabled?: boolean;
    /** To be used when it is required in any form */
    required?: boolean;
    /** Date picker label */
    label?: string;
    /** Selected date */
    value: Date | null;
    /** Placeholder for input */
    placeholder?: string;
    /** Function to be called on change of the date */
    onChange: (value: Date | null) => void;
}

export interface StyledProps {
    disabled?: boolean;
}
