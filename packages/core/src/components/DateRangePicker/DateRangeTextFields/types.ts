import { DateRangeProps } from '../types';

export type Props = {
    id: string;
    size: DateRangeProps['size'];
    variant: DateRangeProps['variant'];
    errorText: string;
    helperText: string;
    disabled: boolean;
    isActive: boolean;
    fromLabel: string;
    toLabel: string;
    selectedDates: DateRangeProps['value'];
    onDateChange: DateRangeProps['onChange'];
    displayFormat: DateRangeProps['displayFormat'];
    toggleCalendar: React.Dispatch<React.SetStateAction<boolean>>;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    setFocusedElement: React.Dispatch<React.SetStateAction<'START_DATE' | 'END_DATE'>>;
    startDateRef: React.MutableRefObject<HTMLInputElement>;
    endDateRef: React.MutableRefObject<HTMLInputElement>;
};
