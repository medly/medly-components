import { Placement } from '../../Popover/types';

export type Props = {
    size: 'S' | 'M';
    placement: Placement;
    startDate: Date;
    endDate: Date;
    onDateSelection: (date: Date) => void;
};
