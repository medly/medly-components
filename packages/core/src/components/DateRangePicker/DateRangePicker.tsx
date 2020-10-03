import { DateRangeIcon } from '@medly-components/icons';
import { parseToDate, useOuterClickNotifier, useUpdateEffect } from '@medly-components/utils';
import { add, format } from 'date-fns';
import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import getMaskedValue from '../TextField/getMaskedValue';
import * as TextFieldStyled from '../TextField/Styled';
import DateRangeCalendar from './DateRangeCalendar';
import DateRangeInput from './DateRangeInput';
import * as Styled from './DateRangePicker.styled';
import { getFormattedDate, getValidDate } from './helpers';
import { Props } from './types';

export const DateRangePicker: FC<Props> = React.memo(props => {
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
        required,
        minSelectableDate,
        maxSelectableDate,
        onChange,
        ...restProps
    } = props;
    const inputId = id || 'medly-date-range-picker',
        [active, setActive] = useState(false),
        [builtInErrorMessage, setErrorMessage] = useState(''),
        [showCalendar, toggleCalendar] = useState(false),
        [startDateText, setStartDateText] = useState(''),
        [focusedElement, setFocusedElement] = useState<'START_DATE' | `END_DATE`>('START_DATE'),
        [endDateText, setEndDateText] = useState(''),
        [startDate, setStartDate] = useState<Date | null>(null),
        [endDate, setEndDate] = useState<Date | null>(null),
        isErrorPresent = useMemo(() => !!errorText || !!builtInErrorMessage, [errorText, builtInErrorMessage]),
        startDateRef = useRef<HTMLInputElement>(null),
        endDateRef = useRef<HTMLInputElement>(null),
        wrapperRef = useRef<HTMLDivElement>(null),
        mask = displayFormat.replace(new RegExp('\\/|\\-', 'g'), ' $& ').toUpperCase(),
        [startDateMaskLabel, setStartDateMaskLabel] = useState(mask),
        [endDateMaskLabel, setEndDateMaskLabel] = useState(mask);

    const startMonth: string = useMemo(() => (startDate ? format(startDate, 'MMMM yyyy') : format(new Date(), 'MMMM yyyy')), [startDate]);
    const endMonth: string = useMemo(() => (endDate ? format(endDate, 'MMMM yyyy') : format(add(new Date(), { months: 1 }), 'MMMM yyyy')), [
        endDate
    ]);

    const onIconClick = React.useCallback(
        event => {
            event.stopPropagation();
            if (!disabled) {
                toggleCalendar(val => !val);
                setActive(true);
                startDateRef.current.focus();
            }
        },
        [disabled]
    );

    const stopPropagation = useCallback((event: React.MouseEvent) => event.stopPropagation(), []),
        onFocus = React.useCallback(
            (event: React.FocusEvent<HTMLInputElement>) => {
                setActive(true);
                setFocusedElement(event.target.name as `START_DATE` | `END_DATE`);
                event.target.setSelectionRange(event.target.value.length, event.target.value.length);
                props.onFocus && props.onFocus(event);
            },
            [props.onFocus]
        ),
        onBlur = React.useCallback(
            (event: React.FocusEvent<HTMLInputElement>) => {
                parseToDate(event.target.value, displayFormat).toString() === 'Invalid Date' && setErrorMessage('Enter valid date');
                props.onBlur && props.onBlur(event);
            },
            [props.onBlur, displayFormat]
        ),
        handleTextChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
            const maskedValue = getMaskedValue(e, mask),
                parsedDate = parseToDate(e.target.value, displayFormat),
                maskedLabel = `${maskedValue}${mask.substr(maskedValue.length)}`;
            if (e.target.name === 'START_DATE') {
                setStartDateText(maskedValue);
                setStartDateMaskLabel(maskedLabel);
                parsedDate.toString() !== 'Invalid Date' && setStartDate(parsedDate);
            } else if (e.target.name === 'END_DATE') {
                setEndDateText(maskedValue);
                setEndDateMaskLabel(maskedLabel);
                parsedDate.toString() !== 'Invalid Date' && setEndDate(parsedDate);
            }
        }, []),
        handleDateChange = useCallback(
            (date: Date) => {
                const formattedDate = getFormattedDate(date, displayFormat);
                if (focusedElement === `START_DATE`) {
                    setStartDate(date);
                    setStartDateText(formattedDate);
                    setFocusedElement('END_DATE');
                } else {
                    setEndDate(date);
                    setEndDateText(formattedDate);
                    setFocusedElement('START_DATE');
                }
            },
            [focusedElement]
        );

    useOuterClickNotifier(() => {
        setActive(false);
        toggleCalendar(false);
    }, wrapperRef);

    useEffect(() => {
        setStartDate(getValidDate(value.startDate, displayFormat));
        setEndDate(getValidDate(value.endDate, displayFormat));
        setStartDateText(value.startDate ? getFormattedDate(startDate, displayFormat) : '');
        setEndDateText(value.endDate ? getFormattedDate(endDate, displayFormat) : '');
    }, [value, displayFormat]);

    useUpdateEffect(() => {
        focusedElement === 'START_DATE' ? toggleCalendar(false) : endDateRef.current.focus();
    }, [focusedElement]);

    const Prefix = () => (
        <Styled.DateIcon variant={variant} isErrorPresent={isErrorPresent} isActive={active} disabled={disabled} size={size}>
            <DateRangeIcon onClick={onIconClick} size={size} />
        </Styled.DateIcon>
    );
    const commonTextProps = {
            variant,
            size,
            onBlur,
            onFocus,
            required,
            disabled,
            placeholder: mask,
            isLabelPresent: true,
            onChange: handleTextChange,
            isSuffixPresent: false,
            errorText: errorText || builtInErrorMessage,
            ...restProps
        },
        commonCalendarProps = {
            disableHeader: true,
            onChange: handleDateChange,
            isErrorPresent: isErrorPresent,
            minSelectableDate: minSelectableDate,
            maxSelectableDate: maxSelectableDate
        };

    return (
        <Styled.MainWrapperComponent ref={wrapperRef} fullWidth={fullWidth} minWidth={minWidth}>
            <Styled.OuterWrapper id={`${inputId}-input-wrapper`} fullWidth={fullWidth} minWidth={minWidth}>
                <Styled.InnerWrapper size={size} variant={variant} disabled={disabled} isErrorPresent={isErrorPresent} isLabelPresent>
                    <TextFieldStyled.Prefix size={size}>
                        <Prefix />
                    </TextFieldStyled.Prefix>
                    <DateRangeInput
                        inputRef={startDateRef}
                        id={`${inputId}-from-input`}
                        aria={`${inputId}-from-helper-text`}
                        value={startDateText}
                        name="START_DATE"
                        isPrefixPresent
                        commonTextProps={commonTextProps}
                        size={size}
                        isLabelPresent
                        variant={variant}
                        dateMaskLabel={startDateMaskLabel}
                        required={required}
                        label={fromLabel}
                    />

                    <Styled.InputSeparator />
                    <DateRangeInput
                        inputRef={endDateRef}
                        id={`${inputId}-to-input`}
                        aria={`${inputId}-to-helper-text`}
                        value={endDateText}
                        name="END_DATE"
                        commonTextProps={commonTextProps}
                        size={size}
                        isLabelPresent
                        variant={variant}
                        dateMaskLabel={endDateMaskLabel}
                        required={required}
                        label={toLabel}
                    />
                </Styled.InnerWrapper>
                <TextFieldStyled.HelperText id={`${id}-helper-text`} onClick={stopPropagation} size={size}>
                    {errorText || builtInErrorMessage || helperText}
                </TextFieldStyled.HelperText>
            </Styled.OuterWrapper>
            {showCalendar && (
                <DateRangeCalendar
                    size={size}
                    startMonth={startMonth}
                    endMonth={endMonth}
                    inputId={inputId}
                    startDate={startDate}
                    endDate={endDate}
                    commonCalendarProps={commonCalendarProps}
                />
            )}
        </Styled.MainWrapperComponent>
    );
});

DateRangePicker.displayName = 'DateRangePicker';
DateRangePicker.defaultProps = {};
