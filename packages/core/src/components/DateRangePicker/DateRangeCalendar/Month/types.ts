import { Omit } from '@medly-components/utils';
import { CalendarProps } from '../../../Calendar/types';

export type Props = Omit<CalendarProps, 'size' | 'date'> & {
    id: string;
    startDate: Date;
    endDate: Date;
    month: number;
    year: number;
    minSelectableDate?: Date;
    maxSelectableDate?: Date;
    hoveredDate?: Date;
    onChange: (date: Date) => void;
    setHoveredDate?: (date: Date | null) => void;
};

export type ExtendedDateProps = {
    disabled?: boolean;
    isSelected?: boolean;
    isCurrentDate?: boolean;
    isStartDateNotSelected?: boolean;
    isEndDateNotSelected?: boolean;
    isInActiveMonth?: boolean;
    isInDateRange?: boolean;
    isInDateRangeHover?: boolean;
    isMonthFirstDate?: boolean;
    isMonthLastDate?: boolean;
    isWeekFirstDate?: boolean;
    isWeekLastDate?: boolean;
    isSelectedStartDate?: boolean;
    isSelectedEndDate?: boolean;
    isHoverBetweenDates?: boolean;
    isHoverDateAfterDateSelection?: boolean;
};
