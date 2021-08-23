import { endOfMonth, endOfQuarter, endOfWeek, endOfYear, startOfMonth, startOfQuarter, startOfWeek, startOfYear } from 'date-fns';
import { DateRangeSelectionEnum, DateRangeType } from '../types';

const getCurrentMonthDateRange = (): DateRangeType => {
    const currentDate = new Date(Date.now());
    return { startDate: startOfMonth(currentDate), endDate: endOfMonth(currentDate) };
};

const getCurrentWeekDateRange = (): DateRangeType => {
    const currentDate = new Date(Date.now());
    return { startDate: startOfWeek(currentDate, { weekStartsOn: 1 }), endDate: endOfWeek(currentDate, { weekStartsOn: 1 }) };
};

const getCurrentYearDateRange = (): DateRangeType => {
    const currentDate = new Date(Date.now());
    return { startDate: startOfYear(currentDate), endDate: endOfYear(currentDate) };
};

const getCurrentQuarterDateRange = (): DateRangeType => {
    const currentDate = new Date(Date.now());
    return { startDate: startOfQuarter(currentDate), endDate: endOfQuarter(currentDate) };
};

export const dateRangeHelpers = {
    [DateRangeSelectionEnum.MONTH]: getCurrentMonthDateRange,
    [DateRangeSelectionEnum.YEAR]: getCurrentYearDateRange,
    [DateRangeSelectionEnum.QUARTER]: getCurrentQuarterDateRange,
    [DateRangeSelectionEnum.WEEK]: getCurrentWeekDateRange
};
