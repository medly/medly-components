import { Omit } from '@medly-components/utils';
import { Placement } from '../Popover/types';
import { TextFieldProps } from '../TextField/types';

export interface TimePickerProps extends Omit<TextFieldProps, 'value' | 'onChange' | 'suffix'> {
    /** Current Time */
    value: string;
    /** Function to be called on changing the time */
    onChange: (time: string) => void;
    /** Popover placement */
    popoverPlacement?: Placement;
    /** Distance from Textfield */
    popoverDistance?: string;
}
