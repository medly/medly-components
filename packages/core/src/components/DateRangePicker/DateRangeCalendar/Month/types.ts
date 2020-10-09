import { Omit } from '@medly-components/utils/src';
import { CalendarProps, DateProps } from '../../../Calendar/types';

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
    setHoveredDate?: (date: Date) => void;
};

export type ExtendedDateProps = DateProps & {
    isStartDateNotSelected?: boolean;
    isEndDateNotSelected?: boolean;
    isInActiveMonth?: boolean;
    isInDateRange?: boolean;
    isInDateRangeHover?: boolean;
    isMonthFirstDate?: boolean;
    isMonthLastDate?: boolean;
    isSelectedStartDate?: boolean;
    isSelectedEndDate?: boolean;
    isHoverBetweenDates?: boolean;
    isInRangeAfterDateSelection?: boolean;
};
