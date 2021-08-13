import { useOuterClickNotifier, useUpdateEffect } from '@medly-components/utils';
import React, { FC, useCallback, useRef, useState } from 'react';
import * as TextFieldStyled from '../TextField/Styled';
import { CustomDateRangeOptions } from './CustomDateRangeOptions/CustomDateRangeOptions';
import DateRangeCalendar from './DateRangeCalendar';
import DateRangeTextFields from './DateRangeTextFields';
import { dateRangeHelpers } from './helpers/dateRangeHelpers';
import { DateRangeProps, DateRangeSelectionEnum, PopoverTypes } from './types';

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
        customDateRangeOptions,
        ...restProps
    } = props;
    const startDateRef = useRef<HTMLInputElement>(null),
        endDateRef = useRef<HTMLInputElement>(null),
        wrapperRef = useRef<HTMLDivElement>(null),
        [isActive, setActive] = useState(false),
        [activePopover, setActivePopover] = useState<PopoverTypes>(PopoverTypes.CALENDAR),
        wrapperMinWidth = minWidth ? minWidth : customDateRangeOptions.length ? '38rem' : '33.8rem',
        [focusedElement, setFocusedElement] = useState<'START_DATE' | `END_DATE`>('START_DATE'),
        focusElement = useCallback(element => (element === 'START_DATE' ? startDateRef : endDateRef).current.focus(), []),
        onCustomRangeIconClick = useCallback(() => {
            if (!disabled) {
                activePopover === PopoverTypes.CUSTOM_RANGE_OPTIONS ? setActive(value => !value) : setActive(true);
                setActivePopover(PopoverTypes.CUSTOM_RANGE_OPTIONS);
            }
        }, [disabled, activePopover]),
        onCalendarIconClick = useCallback((value: boolean) => {
            setActivePopover(PopoverTypes.CALENDAR);
            setActive(value);
        }, []),
        onOptionClick = useCallback(
            (option: any) => {
                if (option.value === DateRangeSelectionEnum.CUSTOM) {
                    focusElement('START_DATE');
                    setActive(true);
                } else {
                    const selectedRange = dateRangeHelpers[
                        option.value as Exclude<DateRangeSelectionEnum, DateRangeSelectionEnum.CUSTOM>
                    ]();
                    if (minSelectableDate && selectedRange.startDate < minSelectableDate) {
                        selectedRange.startDate = minSelectableDate;
                    }
                    if (maxSelectableDate && selectedRange.endDate > maxSelectableDate) {
                        selectedRange.endDate = maxSelectableDate;
                    }
                    onChange && onChange(selectedRange);
                    setActive(false);
                }
            },
            [onChange, focusElement]
        );

    useOuterClickNotifier(() => {
        setActive(false);
    }, wrapperRef);

    useUpdateEffect(() => focusElement(focusedElement), [focusedElement]);

    return (
        <TextFieldStyled.OuterWrapper id={`${id}-wrapper`} ref={wrapperRef} fullWidth={fullWidth} minWidth={wrapperMinWidth} {...restProps}>
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
                activePopover={activePopover}
                validator={validator}
                startDateLabel={startDateLabel}
                endDateLabel={endDateLabel}
                selectedDates={value}
                onDateChange={onChange}
                displayFormat={displayFormat}
                onCalendarIconClick={onCalendarIconClick}
                setFocusedElement={setFocusedElement}
                startDateRef={startDateRef}
                endDateRef={endDateRef}
                onBlur={onBlur}
                showTooltipForHelperAndErrorText={showTooltipForHelperAndErrorText}
                onCustomRangeIconClick={onCustomRangeIconClick}
                showOptions={!!customDateRangeOptions.length}
            />
            {isActive &&
                (activePopover === PopoverTypes.CALENDAR ? (
                    <DateRangeCalendar
                        id={`${id}-calendar`}
                        size={size}
                        placement={popoverPlacement}
                        selectedDates={value}
                        setActive={onCalendarIconClick}
                        withSingleMonth={withSingleMonth}
                        focusElement={focusElement}
                        onDateSelection={onChange}
                        focusedElement={focusedElement}
                        setFocusedElement={setFocusedElement}
                        minSelectableDate={minSelectableDate}
                        maxSelectableDate={maxSelectableDate}
                    />
                ) : (
                    <CustomDateRangeOptions
                        id={`${id}-custom-date-range-options`}
                        size={size}
                        variant={variant}
                        onOptionClick={onOptionClick}
                        options={customDateRangeOptions}
                        placement={popoverPlacement}
                    />
                ))}
        </TextFieldStyled.OuterWrapper>
    );
});

DateRangePicker.displayName = 'DateRangePicker';
DateRangePicker.defaultProps = {
    id: 'medly-date-range-picker',
    size: 'M',
    variant: 'filled',
    startDateLabel: 'From',
    endDateLabel: 'To',
    displayFormat: 'MM-dd-yyyy',
    popoverPlacement: 'bottom-start',
    withSingleMonth: false,
    minSelectableDate: new Date(1901, 0, 1),
    maxSelectableDate: new Date(2100, 11, 1),
    showDecorators: true,
    customDateRangeOptions: []
};
