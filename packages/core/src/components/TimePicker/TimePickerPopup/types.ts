import { Placement } from '../../Popover/types';

export type Period = 'AM' | 'PM';

export type TimePickerPopupProps = {
    value: string;
    onChange: (time: string) => void;
    popoverDistance?: string;
    popoverPlacement?: Placement;
};
