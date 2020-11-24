import { Placement } from '../../Popover/types';
import { DateRangeProps } from '../types';

export type CalendarAnimationTypes = 'move-out-left' | 'move-out-right' | 'move-in-left' | 'move-in-right';

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
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    focusElement: (element: 'START_DATE' | `END_DATE`) => void;
};
