import { Placement } from '../../Popover/types';

export type TimePickerPopupProps = {
    value: string;
    onChange: (time: string) => void;
    onReset: () => void;
    popoverDistance?: string;
    popoverPlacement?: Placement;
    disableFutureTime?: boolean;
    disablePastTime?: boolean;
    showCurrentTimeAsDefault?: boolean;
};
