import { DateRangeInput } from '@datepicker-react/styled';
import { GetComponentProps, Omit } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';
import { Placement } from '../Popover/types';

type PickerProps = Omit<
    GetComponentProps<typeof DateRangeInput>,
    'onFocusChange' | 'onDatesChange' | 'startDate' | 'endDate' | 'focusedInput' | 'placement'
>;

export interface Props extends PickerProps {
    /** Label Position
     * @default left
     */
    labelPosition?: LabelPositions;
    /** Takes full width of the parent component
     * @default false
     */
    fullWidth?: boolean;
    /** Disable date selection
     * @default false
     */
    disabled?: boolean;
    /** To be used when it is required in any form
     * @default false
     */
    required?: boolean;
    /** Date picker label
     * @default
     */
    label?: string;
    /** Min width of the component */
    minWidth?: number;
    /** Placeholder for input
     * @default bottom-start
     */
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
