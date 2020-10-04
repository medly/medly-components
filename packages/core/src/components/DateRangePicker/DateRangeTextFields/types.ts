import { DateRangePickerProps } from 'packages/forms/src/components/Fields/types';

export type Props = {
    id: string;
    size: DateRangePickerProps['size'];
    variant: DateRangePickerProps['variant'];
    errorText: string;
    helperText: string;
    disabled: boolean;
    isActive: boolean;
    fromLabel: string;
    toLabel: string;
    selectedDates: DateRangePickerProps['value'];
    onDateChange: DateRangePickerProps['onChange'];
    displayFormat: DateRangePickerProps['displayFormat'];
    toggleCalendar: React.Dispatch<React.SetStateAction<boolean>>;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    setFocusedElement: React.Dispatch<React.SetStateAction<'START_DATE' | 'END_DATE'>>;
    startDateRef: React.MutableRefObject<HTMLInputElement>;
    endDateRef: React.MutableRefObject<HTMLInputElement>;
};
