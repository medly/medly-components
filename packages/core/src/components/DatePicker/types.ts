import { DateSingleInput } from '@datepicker-react/styled';
import { GetComponentProps, Omit } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

type PickerProps = Omit<GetComponentProps<typeof DateSingleInput>, 'date' | 'showDatepicker' | 'onDateChange' | 'onFocusChange'>;

export interface Props extends PickerProps {
    labelPosition?: LabelPositions;
    fullWidth?: boolean;
    disabled?: boolean;
    required?: boolean;
    label?: string;
    value: Date | null;
    placeholder?: string;
    onChange: (value: Date | null) => void;
}

export interface StyledProps {
    disabled?: boolean;
}
