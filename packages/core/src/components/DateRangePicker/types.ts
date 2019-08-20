import { DateRangeInput } from '@datepicker-react/styled';
import { GetComponentProps, Omit } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

type PickerProps = Omit<
    GetComponentProps<typeof DateRangeInput>,
    'onFocusChange' | 'onDatesChange' | 'startDate' | 'endDate' | 'focusedInput'
>;

export interface Props extends PickerProps {
    labelPosition?: LabelPositions;
    disabled?: boolean;
    required?: boolean;
    label?: string;
    value: { startDate: Date | null; endDate: Date | null };
    onChange: (value: { startDate: Date | null; endDate: Date | null }) => void;
}

export interface StyledProps {
    disabled?: boolean;
}
