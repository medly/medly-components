import { useUpdateEffect, WithStyle } from '@medly-components/utils';
import React, { useCallback, useMemo } from 'react';
import SingleSelect from '../../SingleSelect';
import { SHORT_CALENDAR_MONTHS } from '../constants';
import { getMonthAndYearFromDate } from '../helper';
import { Wrapper } from './MonthAndYearSelection.styled';
import { MonthAndYearSelectionProps } from './types';

export const MonthAndYearSelection: React.FC<MonthAndYearSelectionProps> & WithStyle = React.memo(
    ({ id, month, year, onChange, minSelectableDate, maxSelectableDate, isErrorPresent, ...restProps }) => {
        const { month: minMonth, year: minYear } = getMonthAndYearFromDate(minSelectableDate),
            { month: maxMonth, year: maxYear } = getMonthAndYearFromDate(maxSelectableDate);

        const stopPropagation = useCallback(e => e.stopPropagation(), []),
            handleMonthChange = useCallback((value: number) => onChange({ year: year, month: value }), [year, onChange]),
            handleYearChange = useCallback((value: number) => onChange({ month: month, year: value }), [month, onChange]);

        const monthOptions = useMemo(
                () =>
                    SHORT_CALENDAR_MONTHS.reduce((acc, curr, index) => {
                        const isDisabled = new Date(year, index, 1) > maxSelectableDate || new Date(year, index + 1, 0) < minSelectableDate;
                        return [...acc, { label: curr, value: index, disabled: isDisabled }];
                    }, []),
                [minMonth, maxMonth, year]
            ),
            yearOptions = useMemo(
                () =>
                    [...Array(maxYear - minYear + 1)].map((_, i) => {
                        const value = i + minYear;
                        return { value, label: `${value}` };
                    }),
                [minYear, maxYear]
            );

        useUpdateEffect(() => {
            // If selected month is not allowed in the newly selected year then change month to first option in the months option
            const nonDisabledMonths = monthOptions.filter(option => !option.disabled).map(options => options.value);
            !nonDisabledMonths.includes(month) && onChange({ year, month: nonDisabledMonths[0] || 0 });
        }, [year]);

        return (
            <Wrapper {...restProps} onClick={stopPropagation}>
                <SingleSelect
                    id={`${id}-month-selector`}
                    size="S"
                    value={month}
                    options={monthOptions}
                    onChange={handleMonthChange}
                    placeholder="Month"
                    variant="flat"
                    minWidth="5.6rem"
                    errorText={isErrorPresent ? ' ' : ''}
                />
                <SingleSelect
                    id={`${id}-year-selector`}
                    size="S"
                    value={year}
                    options={yearOptions}
                    onChange={handleYearChange}
                    placeholder="Year"
                    variant="flat"
                    minWidth="5.6rem"
                    errorText={isErrorPresent ? ' ' : ''}
                />
            </Wrapper>
        );
    }
);
MonthAndYearSelection.displayName = 'MonthAndYearSelection';
MonthAndYearSelection.Style = Wrapper;
