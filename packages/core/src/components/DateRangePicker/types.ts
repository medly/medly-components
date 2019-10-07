import { DateRangeInput } from '@datepicker-react/styled';
import { GetComponentProps, Omit } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';
import { Placement } from '../Popover/types';

type PickerProps = Omit<
    GetComponentProps<typeof DateRangeInput>,
    'onFocusChange' | 'onDatesChange' | 'startDate' | 'endDate' | 'focusedInput' | 'placement'
>;

export interface Props extends PickerProps {
    labelPosition?: LabelPositions;
    fullWidth?: boolean;
    disabled?: boolean;
    required?: boolean;
    minWidth?: number;
    label?: string;
    placement?: Placement;
    value: { startDate: Date | null; endDate: Date | null };
    onChange: (value: { startDate: Date | null; endDate: Date | null }) => void;
}

export interface StyledProps {
    placement?: Placement;
    fullWidth?: boolean;
    disabled?: boolean;
}
