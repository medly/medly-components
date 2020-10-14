import { Placement } from '../../Popover/types';
import { DateRangeProps } from '../types';

export type Props = {
    id: string;
    size: 'S' | 'M';
    placement: Placement;
    selectedDates: DateRangeProps['value'];
    minSelectableDate: Date;
    maxSelectableDate: Date;
    focusedElement: 'START_DATE' | 'END_DATE';
    onDateSelection: DateRangeProps['onChange'];
    setFocusedElement: React.Dispatch<React.SetStateAction<'START_DATE' | 'END_DATE'>>;
};
