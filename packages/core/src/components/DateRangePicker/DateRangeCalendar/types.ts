import { DateRangePickerProps } from 'packages/forms/src/components/Fields/types';
import { DateProps } from '../../Calendar/types';
import { Placement } from '../../Popover/types';

export type Props = {
    id: string;
    size: 'S' | 'M';
    placement: Placement;
    selectedDates: DateRangePickerProps['value'];
    minSelectableDate: Date;
    maxSelectableDate: Date;
    focusedElement: 'START_DATE' | 'END_DATE';
    onDateSelection: DateRangePickerProps['onChange'];
    setFocusedElement: React.Dispatch<React.SetStateAction<'START_DATE' | 'END_DATE'>>;
};

export type ExtendedDateProps = DateProps & {
    isInActiveMonth?: boolean;
    isInDateRange?: boolean;
    isInDateRangeHover?: boolean;
    isMonthFirstDate?: boolean;
    isMonthLastDate?: boolean;
    isSelectedStartDate?: boolean;
    isSelectedEndDate?: boolean;
    isHoverBetweenDates?: boolean;
};
