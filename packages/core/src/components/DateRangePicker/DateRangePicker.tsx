import { useKeyPress, useOuterClickNotifier, useUpdateEffect } from '@medly-components/utils';
import { FC, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import * as TextFieldStyled from '../TextField/Styled';
import CustomDateRangeOptions from './CustomDateRangeOptions';
import DateRangeCalendar from './DateRangeCalendar';
import DateRangeTextFields from './DateRangeTextFields';
import { dateRangeHelpers } from './helpers/dateRangeHelpers';
import { DateRangeProps, DateRangeSelectionEnum, PopoverTypes } from './types';

export const DateRangePicker: FC<DateRangeProps> = memo(props => {
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
        onPopupClose,
        ...restProps
    } = props;
    const startDateRef = useRef<HTMLInputElement>(null),
        endDateRef = useRef<HTMLInputElement>(null),
        wrapperRef = useRef<HTMLDivElement>(null),
        outerClickValidator = useRef<(e: MouseEvent) => void>(null),
        [isActive, setActive] = useState(false),
        [activePopover, setActivePopover] = useState<PopoverTypes>(PopoverTypes.CALENDAR),
        [focusedElement, setFocusedElement] = useState<'START_DATE' | `END_DATE`>('START_DATE'),
        focusElement = useCallback(element => (element === 'START_DATE' ? startDateRef : endDateRef).current?.focus(), []),
        isTabKeyPressed = useKeyPress('Tab', true),
        wrapperMinWidth = useMemo(
            () => minWidth ?? (customDateRangeOptions?.length ? '37.2rem' : '33.8rem'),
            [customDateRangeOptions, minWidth]
        ),
        onCustomRangeIconClick = useCallback(() => {
            if (!disabled) {
                if (activePopover === PopoverTypes.CUSTOM_RANGE_OPTIONS) {
                    setActive(prevValue => !prevValue);
                } else {
                    setActivePopover(PopoverTypes.CUSTOM_RANGE_OPTIONS);
                    setActive(true);
                }
            }
        }, [disabled, activePopover]),
        onCalendarIconClick = useCallback((valueToSet: boolean) => {
            setActivePopover(PopoverTypes.CALENDAR);
            setActive(valueToSet);
        }, []),
        onOptionClick = useCallback(
            (option: any) => {
                if (option.value === DateRangeSelectionEnum.CUSTOM) {
                    focusElement('START_DATE');
                    setActivePopover(PopoverTypes.CALENDAR);
                    setActive(true);
                } else {
                    const selectedRange =
                        dateRangeHelpers[option.value as Exclude<DateRangeSelectionEnum, DateRangeSelectionEnum.CUSTOM>]();
                    if (minSelectableDate && selectedRange.startDate && selectedRange.startDate < minSelectableDate) {
                        selectedRange.startDate = minSelectableDate;
                    }
                    if (maxSelectableDate && selectedRange.endDate && selectedRange.endDate > maxSelectableDate) {
                        selectedRange.endDate = maxSelectableDate;
                    }
                    onChange && onChange(selectedRange);
                    setActive(false);
                }
            },
            [onChange, focusElement]
        );

    useOuterClickNotifier((e: MouseEvent) => {
        setActive(false);
        isActive && onPopupClose && onPopupClose();
        isActive && outerClickValidator.current && outerClickValidator.current(e);
    }, wrapperRef);

    useUpdateEffect(() => focusElement(focusedElement), [focusedElement]);

    useEffect(() => {
        const activeElement = document.activeElement as HTMLInputElement;
        if (!(activeElement.name === 'START_DATE' || activeElement.name === 'END_DATE')) setActive(false);
    }, [isTabKeyPressed]);

    return (
        <TextFieldStyled.OuterWrapper
            id={`${id}-wrapper`}
            ref={wrapperRef}
            fullWidth={fullWidth}
            minWidth={wrapperMinWidth}
            {...restProps}
            onBlur={onBlur}
        >
            <DateRangeTextFields
                id={id!}
                size={size!}
                required={required}
                variant={variant!}
                errorText={errorText}
                helperText={helperText}
                disabled={disabled}
                showDecorators={showDecorators}
                isActive={isActive}
                activePopover={activePopover}
                validator={validator}
                startDateLabel={startDateLabel!}
                endDateLabel={endDateLabel!}
                selectedDates={value}
                onDateChange={onChange}
                displayFormat={displayFormat!}
                onCalendarIconClick={onCalendarIconClick}
                setFocusedElement={setFocusedElement}
                startDateRef={startDateRef}
                endDateRef={endDateRef}
                showTooltipForHelperAndErrorText={showTooltipForHelperAndErrorText}
                onCustomRangeIconClick={onCustomRangeIconClick}
                showChevronIcon={customDateRangeOptions!.length > 0}
                outerClickValidator={outerClickValidator}
            />
            {isActive &&
                (activePopover === PopoverTypes.CALENDAR ? (
                    <DateRangeCalendar
                        id={`${id}-calendar`}
                        size={size!}
                        placement={popoverPlacement!}
                        selectedDates={value}
                        setActive={onCalendarIconClick}
                        withSingleMonth={withSingleMonth}
                        focusElement={focusElement}
                        onDateSelection={onChange}
                        focusedElement={focusedElement}
                        setFocusedElement={setFocusedElement}
                        minSelectableDate={minSelectableDate!}
                        maxSelectableDate={maxSelectableDate!}
                    />
                ) : (
                    <CustomDateRangeOptions
                        id={`${id}-custom-date-range-options`}
                        size={size!}
                        variant={variant!}
                        onOptionClick={onOptionClick}
                        options={customDateRangeOptions!}
                        placement={popoverPlacement!}
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
