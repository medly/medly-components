import { DateRangeProps, DateRangeType, PopoverTypes } from '../types';
import type { Dispatch, RefObject, SetStateAction } from 'react';

export type Props = {
    id: string;
    size: Required<DateRangeProps>['size'];
    variant: Required<DateRangeProps>['variant'];
    errorText?: string;
    helperText?: string;
    disabled?: boolean;
    showDecorators?: boolean;
    isActive?: boolean;
    required?: boolean;
    startDateLabel: string;
    endDateLabel: string;
    selectedDates: Required<DateRangeProps>['value'];
    showChevronIcon?: boolean;
    activePopover: PopoverTypes;
    onDateChange: Required<DateRangeProps>['onChange'];
    displayFormat: Required<DateRangeProps>['displayFormat'];
    onCalendarIconClick: (val: boolean) => void;
    setFocusedElement: Dispatch<SetStateAction<'START_DATE' | 'END_DATE'>>;
    startDateRef: RefObject<HTMLInputElement>;
    endDateRef: RefObject<HTMLInputElement>;
    validator?: (val: DateRangeType, eventType?: string) => string;
    showTooltipForHelperAndErrorText?: boolean;
    onCustomRangeIconClick: () => void;
    outerClickValidator: RefObject<() => void>;
};
