import { useOuterClickNotifier, useUpdateEffect } from '@medly-components/utils';
import React, { FC, useCallback, useRef, useState } from 'react';
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
        startDateLabel,
        endDateLabel,
        errorText,
        helperText,
        variant,
        disabled,
        showDecorators,
        size,
        onBlur,
        minSelectableDate,
        maxSelectableDate,
        popoverPlacement,
        onChange,
        required,
        validator,
        withSingleMonth,
        showTooltipForHelperAndErrorText,
        ...restProps
    } = props;
    const startDateRef = useRef<HTMLInputElement>(null),
        endDateRef = useRef<HTMLInputElement>(null),
        wrapperRef = useRef<HTMLDivElement>(null),
        [isActive, setActive] = useState(false),
        [focusedElement, setFocusedElement] = useState<'START_DATE' | `END_DATE`>('START_DATE'),
        focusElement = useCallback(element => (element === 'START_DATE' ? startDateRef : endDateRef).current.focus(), []);

    useOuterClickNotifier(() => setActive(false), wrapperRef);
    useUpdateEffect(() => focusElement(focusedElement), [focusedElement]);

    return (
        <TextFieldStyled.OuterWrapper id={`${id}-wrapper`} ref={wrapperRef} fullWidth={fullWidth} minWidth={minWidth} {...restProps}>
            <DateRangeTextFields
                id={id}
                size={size}
                required={required}
                variant={variant}
                errorText={errorText}
                helperText={helperText}
                disabled={disabled}
                showDecorators={showDecorators}
                isActive={isActive}
                validator={validator}
                startDateLabel={startDateLabel}
                endDateLabel={endDateLabel}
                selectedDates={value}
                onDateChange={onChange}
                displayFormat={displayFormat}
                setActive={setActive}
                setFocusedElement={setFocusedElement}
                startDateRef={startDateRef}
                endDateRef={endDateRef}
                onBlur={onBlur}
                showTooltipForHelperAndErrorText={showTooltipForHelperAndErrorText}
            />
            {isActive && (
                <DateRangeCalendar
                    id={`${id}-calendar`}
                    size={size}
                    placement={popoverPlacement}
                    selectedDates={value}
                    setActive={setActive}
                    withSingleMonth={withSingleMonth}
                    focusElement={focusElement}
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
    id: 'medly-date-range-picker',
    size: 'M',
    variant: 'filled',
    minWidth: '33.8rem',
    startDateLabel: 'From',
    endDateLabel: 'To',
    displayFormat: 'MM-dd-yyyy',
    popoverPlacement: 'bottom-start',
    withSingleMonth: false,
    minSelectableDate: new Date(1901, 0, 1),
    maxSelectableDate: new Date(2100, 11, 1),
    showDecorators: true
};
