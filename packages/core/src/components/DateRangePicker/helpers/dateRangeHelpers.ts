import { DateRangeSelectionEnum, DateRangeType } from '../types';

const getCurrentMonthDateRange = (): DateRangeType => {
    const currentDate = new Date(Date.now()),
        startDate = new Date(currentDate.setDate(1)),
        endDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1, 0));
    return { startDate, endDate };
};

const getCurrentWeekDateRange = (): DateRangeType => {
    const currentDate = new Date(Date.now()),
        firstDayOfTheWeek = currentDate.getDate() - currentDate.getDay(),
        startDate = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay())),
        endDate = new Date(currentDate.setDate(firstDayOfTheWeek + 6));
    return { startDate, endDate };
};

const getCurrentYearDateRange = (): DateRangeType => {
    const currentDate = new Date(Date.now()),
        startDate = new Date(currentDate.setMonth(0, 1)),
        endDate = new Date(currentDate.setFullYear(currentDate.getFullYear() + 1, 0, 0));
    return { startDate, endDate };
};

const getCurrentQuarterDateRange = (): DateRangeType => {
    const currentDate = new Date(Date.now()),
        firstMonthOfQuarter = Math.floor(new Date().getMonth() / 3) * 3,
        startDate = new Date(currentDate.setMonth(firstMonthOfQuarter, 1)),
        endDate = new Date(currentDate.setMonth(firstMonthOfQuarter + 2, 0));
    return { startDate, endDate };
};

export const dateRangeHelpers = {
    [DateRangeSelectionEnum.MONTH]: getCurrentMonthDateRange,
    [DateRangeSelectionEnum.YEAR]: getCurrentYearDateRange,
    [DateRangeSelectionEnum.QUARTER]: getCurrentQuarterDateRange,
    [DateRangeSelectionEnum.WEEK]: getCurrentWeekDateRange
};
