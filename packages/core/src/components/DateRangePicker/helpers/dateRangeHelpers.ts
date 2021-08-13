import { DateRangeSelectionEnum, DateRangeType } from '../types';

const getCurrentMonthDateRange = (): DateRangeType => {
    const currentDate = new Date(Date.now()),
        startDate = new Date(currentDate.setUTCDate(1)),
        endDate = new Date(currentDate.setUTCMonth(currentDate.getUTCMonth() + 1, 0));
    return { startDate, endDate };
};

const getCurrentWeekDateRange = (): DateRangeType => {
    const currentDate = new Date(Date.now()),
        firstDayOfTheWeek = currentDate.getUTCDate() - currentDate.getUTCDay(),
        startDate = new Date(currentDate.setUTCDate(currentDate.getUTCDate() - currentDate.getUTCDay())),
        endDate = new Date(currentDate.setUTCDate(firstDayOfTheWeek + 6));
    return { startDate, endDate };
};

const getCurrentYearDateRange = (): DateRangeType => {
    const currentDate = new Date(Date.now()),
        startDate = new Date(currentDate.setUTCMonth(0, 1)),
        endDate = new Date(currentDate.setUTCFullYear(currentDate.getUTCFullYear() + 1, 0, 0));
    return { startDate, endDate };
};

const getCurrentQuarterDateRange = (): DateRangeType => {
    const currentDate = new Date(Date.now()),
        firstMonthOfQuarter = Math.floor(new Date().getUTCMonth() / 3) * 3,
        startDate = new Date(currentDate.setUTCMonth(firstMonthOfQuarter, 1)),
        endDate = new Date(currentDate.setUTCMonth(firstMonthOfQuarter + 3, 0));
    return { startDate, endDate };
};

export const dateRangeHelpers = {
    [DateRangeSelectionEnum.MONTH]: getCurrentMonthDateRange,
    [DateRangeSelectionEnum.YEAR]: getCurrentYearDateRange,
    [DateRangeSelectionEnum.QUARTER]: getCurrentQuarterDateRange,
    [DateRangeSelectionEnum.WEEK]: getCurrentWeekDateRange
};
