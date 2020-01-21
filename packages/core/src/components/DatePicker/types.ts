import { HTMLProps, Omit } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';
import { Placement } from '../Popover/PopoverWrapper/types';

export interface Props extends Omit<HTMLProps<HTMLInputElement>, 'value' | 'onChange'> {
    /** Id for the date component */
    id?: string;
    /** Current Date */
    value: Date;
    /** Function to be called on changing the date */
    onChange: (date: Date) => void;
    /** Placeholder for the input */
    placeholder?: string;
    /** Date display format */
    displayFormat?: string;
    /** Disable date selection */
    disabled?: boolean;
    /** To be used when it is required in any form */
    required?: boolean;
    /** Date picker label */
    label?: string;
    /** Label Position */
    labelPosition?: LabelPositions;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Min width of the component */
    minWidth?: number;
    /** Popover placement */
    popoverPlacement?: Placement;
}
