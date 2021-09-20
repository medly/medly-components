import React from 'react';
import { DateRangeProps, DateRangeType, PopoverTypes } from '../types';

export type Props = {
    id: string;
    size: DateRangeProps['size'];
    variant: DateRangeProps['variant'];
    errorText: string;
    helperText: string;
    disabled: boolean;
    showDecorators?: boolean;
    isActive: boolean;
    required: boolean;
    startDateLabel: string;
    endDateLabel: string;
    selectedDates: DateRangeProps['value'];
    showChevronIcon?: boolean;
    activePopover: PopoverTypes;
    onDateChange: DateRangeProps['onChange'];
    displayFormat: DateRangeProps['displayFormat'];
    onCalendarIconClick: React.Dispatch<React.SetStateAction<boolean>>;
    setFocusedElement: React.Dispatch<React.SetStateAction<'START_DATE' | 'END_DATE'>>;
    startDateRef: React.MutableRefObject<HTMLInputElement>;
    endDateRef: React.MutableRefObject<HTMLInputElement>;
    validator?: (val: DateRangeType, eventType?: string) => string;
    showTooltipForHelperAndErrorText?: boolean;
    onCustomRangeIconClick: () => void;
    outerClickValidator: React.MutableRefObject<() => void>;
};
