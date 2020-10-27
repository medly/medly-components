import { useOuterClickNotifier, useUpdateEffect } from '@medly-components/utils';
import React, { FC, useRef, useState } from 'react';
import * as TextFieldStyled from '../TextField/Styled';
import DateRangeCalendar from './DateRangeCalendar';
import DateRangeTextFields from './DateRangeTextFields';
import { DateRangeProps } from './types';

export const DateRangePicker: FC<DateRangeProps> = React.memo(props => {
    const {
        id,
        value,
        minWidth,
        fullWidth,
        displayFormat,
        fromLabel,
        toLabel,
        errorText,
        helperText,
        variant,
        disabled,
        size,
        minSelectableDate,
        maxSelectableDate,
        popoverPlacement,
        onChange,
        ...restProps
    } = props;
    const pickerId = id || 'medly-date-range-picker',
        startDateRef = useRef<HTMLInputElement>(null),
        endDateRef = useRef<HTMLInputElement>(null),
        wrapperRef = useRef<HTMLDivElement>(null),
        [isActive, setActive] = useState(false),
        [showCalendar, toggleCalendar] = useState(false),
        [focusedElement, setFocusedElement] = useState<'START_DATE' | `END_DATE`>('START_DATE');

    useOuterClickNotifier(() => {
        setActive(false);
        toggleCalendar(false);
    }, wrapperRef);

    useUpdateEffect(() => {
        if (focusedElement === 'START_DATE') {
            startDateRef.current.focus();
        } else if (focusedElement === 'END_DATE') {
            endDateRef.current.focus();
        }
    }, [focusedElement]);

    return (
        <TextFieldStyled.OuterWrapper id={`${pickerId}-wrapper`} ref={wrapperRef} fullWidth={fullWidth} minWidth={minWidth} {...restProps}>
            <DateRangeTextFields
                id={pickerId}
                size={size}
                variant={variant}
                errorText={errorText}
                helperText={helperText}
                disabled={disabled}
                isActive={isActive}
                fromLabel={fromLabel}
                toLabel={toLabel}
                selectedDates={value}
                onDateChange={onChange}
                displayFormat={displayFormat}
                toggleCalendar={toggleCalendar}
                setActive={setActive}
                setFocusedElement={setFocusedElement}
                startDateRef={startDateRef}
                endDateRef={endDateRef}
            />
            {showCalendar && (
                <DateRangeCalendar
                    id={`${pickerId}-calendar`}
                    size={size}
                    placement={popoverPlacement}
                    selectedDates={value}
                    onDateSelection={onChange}
                    focusedElement={focusedElement}
                    setFocusedElement={setFocusedElement}
                    minSelectableDate={minSelectableDate}
                    maxSelectableDate={maxSelectableDate}
                />
            )}
        </TextFieldStyled.OuterWrapper>
    );
});

DateRangePicker.displayName = 'DateRangePicker';
DateRangePicker.defaultProps = {
    variant: 'filled',
    minWidth: '33.8rem',
    fromLabel: 'From',
    toLabel: 'To',
    displayFormat: 'MM-dd-yyyy',
    minSelectableDate: new Date(1901, 0, 1),
    maxSelectableDate: new Date(2100, 11, 1)
};
