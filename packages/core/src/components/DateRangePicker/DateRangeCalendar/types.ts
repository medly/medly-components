import { Placement } from '../../Popover/types';
import { DateRangeProps } from '../types';

export type CalendarAnimationTypes = 'move-out-left' | 'move-out-right' | 'move-in-left' | 'move-in-right';

export type Props = {
    id: string;
    size: 'S' | 'M';
    placement: Placement;
    selectedDates: Required<DateRangeProps>['value'];
    minSelectableDate: Date;
    maxSelectableDate: Date;
    withSingleMonth?: boolean;
    focusedElement: 'START_DATE' | 'END_DATE';
    onDateSelection: Required<DateRangeProps>['onChange'];
    setFocusedElement: React.Dispatch<React.SetStateAction<'START_DATE' | 'END_DATE'>>;
    setActive: (val: boolean) => void;
    focusElement: (element: 'START_DATE' | `END_DATE`) => void;
};
