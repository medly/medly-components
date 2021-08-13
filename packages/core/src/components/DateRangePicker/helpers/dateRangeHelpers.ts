import { endOfMonth, endOfQuarter, endOfWeek, endOfYear, startOfMonth, startOfQuarter, startOfWeek } from 'date-fns';
import startOfYear from 'date-fns/startOfYear';
import { DateRangeSelectionEnum, DateRangeType } from '../types';

const getCurrentMonthDateRange = (): DateRangeType => {
    const currentDate = new Date(Date.now());
    return { startDate: startOfMonth(currentDate), endDate: endOfMonth(currentDate) };
};

const getCurrentWeekDateRange = (): DateRangeType => {
    const currentDate = new Date(Date.now());
    return { startDate: startOfWeek(currentDate), endDate: endOfWeek(currentDate) };
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
