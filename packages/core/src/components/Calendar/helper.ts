export const isValidDate = (date: any) => Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(+date);

export const getNumberOfDaysInMonth = (month: number, year: number) =>
    month === 1 ? (year % 4 === 0 ? 29 : 28) : [3, 5, 8, 10].includes(month) ? 30 : 31;

export const getFirstDayOfMonth = (month: number, year: number) => {
    return +new Date(year, month, 1).getDay() + 1;
};

export const dateDiff = (date1: Date, date2: Date) => {
    return isValidDate(date1) && isValidDate(date2) ? date1.setHours(0, 0, 0, 0) - date2.setHours(0, 0, 0, 0) : null;
};

export const isSameDay = (date1: Date, date2: Date) => dateDiff(date1, date2) === 0;

export const isSameMonth = (date1: Date, date2: Date) => isValidDate(date1) && isValidDate(date2) && date1.getMonth() === date2.getMonth();

export const getMonthAndYearFromDate = (date: Date) => ({ month: date.getMonth(), year: date.getFullYear() });

export const getPreviousMonthAndYear = (month: number, year: number) =>
    month === 0 ? { month: 11, year: year - 1 } : { year, month: month - 1 };

export const getNextMonthAndYear = (month: number, year: number) =>
    month === 11 ? { month: 0, year: year + 1 } : { year, month: month + 1 };

export const getCalendarDates = (month: number, year: number, calendarWeeks = 6) => {
    const currMonthDays = getNumberOfDaysInMonth(month, year),
        currMonthFirstDay = getFirstDayOfMonth(month, year);

    const daysFromPrevMonthToDisplay = currMonthFirstDay - 1,
        daysFromNextMonthToDisplay = calendarWeeks * 7 - (daysFromPrevMonthToDisplay + currMonthDays);

    const { month: prevMonth, year: prevMonthYear } = getPreviousMonthAndYear(month, year),
        { month: nextMonth, year: nextMonthYear } = getNextMonthAndYear(month, year);

    const prevMonthDays = getNumberOfDaysInMonth(prevMonth, prevMonthYear);

    const prevMonthDates = [...Array(daysFromPrevMonthToDisplay)].map((_, index) => {
            const day = index + 1 + (prevMonthDays - daysFromPrevMonthToDisplay);
            return [prevMonthYear, prevMonth, day];
        }),
        currMonthDates = [...Array(currMonthDays)].map((_, index) => [year, month, index + 1]),
        nextMonthDates = [...Array(daysFromNextMonthToDisplay)].map((_, index) => [nextMonthYear, nextMonth, index + 1]);

    return [...prevMonthDates, ...currMonthDates, ...nextMonthDates];
};
