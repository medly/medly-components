import { HTMLProps } from '@medly-components/utils';
import { Placement } from '../../Popover/types';
import { DateRangeProps, FOCUS_ELEMENT } from '../types';

export type CalendarAnimationTypes = 'move-out-left' | 'move-out-right' | 'move-in-left' | 'move-in-right';

export type Props = Omit<HTMLProps<HTMLDivElement>, 'size'> & {
    id?: string;
    size?: 'S' | 'M';
    placement?: Placement;
    selectedDates: Required<DateRangeProps>['value'];
    onDateSelection: Required<DateRangeProps>['onChange'];
    minSelectableDate?: Date;
    maxSelectableDate?: Date;
    withSingleMonth?: boolean;
    focusedElement?: FOCUS_ELEMENT;
    onFocusChange?: (element: FOCUS_ELEMENT) => void;
    autoSelectEndDateIn?: number;
};
