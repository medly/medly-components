import { DateRangeIcon, KeyboardArrowLeftIcon, KeyboardArrowRightIcon } from '@medly-components/icons';
import { parseToDate, useOuterClickNotifier } from '@medly-components/utils';
import { format } from 'date-fns';
import React, { FC } from 'react';
import Calendar from '../Calendar';
import * as CalendarStyled from '../Calendar/Calendar.styled';
import getMaskedValue from '../TextField/getMaskedValue';
import * as TextFieldStyled from '../TextField/Styled';
import * as Styled from './DateRangePicker.styled';
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
        variant,
        disabled,
        size,
        required,
        fromPlaceholder,
        toPlaceholder,
        placeholder,
        minSelectableDate,
        maxSelectableDate,
        onChange: onChangeHandler,
        ...restProps
    } = props;
    const inputId =
        id || fromLabel.toLowerCase().replace(/\s/g, '') || toLabel.toLowerCase().replace(/\s/g, '') || 'medly-date-range-picker';
    const isFromLabelPresent = React.useMemo(() => !!fromLabel, [fromLabel]);
    const isToLabelPresent = React.useMemo(() => !!toLabel, [toLabel]);
    const [active, setActive] = React.useState(false);
    const [builtInErrorMessage, setErrorMessage] = React.useState('');
    const [showCalendar, toggleCalendar] = React.useState(false);
    const [startDateText, setStartDateText] = React.useState('');
    const [endDateText, setEndDateText] = React.useState('');
    const isErrorPresent = React.useMemo(() => !!errorText || !!builtInErrorMessage, [errorText, builtInErrorMessage]);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const mask = displayFormat.replace(new RegExp('\\/|\\-', 'g'), ' $& ').toUpperCase();
    const [maskLabel, setMaskLabel] = React.useState(mask);

    const startDate: Date | null = React.useMemo(
        () =>
            value.startDate instanceof Date
                ? value.startDate
                : typeof value.startDate === 'string' && value.startDate !== ''
                ? parseToDate(value.startDate, displayFormat)
                : null,
        [value.startDate, displayFormat]
    );
    const endDate: Date | null = React.useMemo(
        () =>
            value.endDate instanceof Date
                ? value.endDate
                : typeof value.endDate === 'string' && value.endDate !== ''
                ? parseToDate(value.endDate, displayFormat)
                : null,
        [value.endDate, displayFormat]
    );
    React.useEffect(() => {
        setStartDateText(startDate ? format(startDate, displayFormat).replace(new RegExp('\\/|\\-', 'g'), ' $& ') : '');
    }, [startDate, displayFormat]);
    React.useEffect(() => {
        setEndDateText(endDate ? format(endDate, displayFormat).replace(new RegExp('\\/|\\-', 'g'), ' $& ') : '');
    }, [endDate, displayFormat]);

    const onIconClick = React.useCallback(
        event => {
            event.stopPropagation();
            if (!disabled) {
                toggleCalendar(val => !val);
                setActive(true);
                inputRef.current.focus();
            }
        },
        [disabled]
    );
    const onBlur = React.useCallback(
        (event: React.FocusEvent<HTMLInputElement>) => {
            parseToDate(event.target.value, displayFormat).toString() === 'Invalid Date' && setErrorMessage('Enter valid date');
            props.onBlur && props.onBlur(event);
        },
        [props.onBlur, displayFormat]
    );
    const onFocus = React.useCallback(
        (event: React.FocusEvent<HTMLInputElement>) => {
            setActive(true);
            toggleCalendar(true);
            props.onFocus && props.onFocus(event);
        },
        [props.onFocus]
    );
    const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        const maskedValue = getMaskedValue(e, mask);
        setMaskLabel(`${maskedValue}${mask.substr(maskedValue.length)}`);
        if (name === 'startDate') {
            setStartDateText(maskedValue);
        } else if (name === 'endDate') {
            setEndDateText(maskedValue);
        }
        onChangeHandler &&
            !(parseToDate(maskedValue, displayFormat).toString() === 'Invalid Date') &&
            onChangeHandler({
                startDate: name === 'startDate' ? parseToDate(maskedValue, displayFormat) : value.startDate,
                endDate: name === 'endDate' ? parseToDate(maskedValue, displayFormat) : value.endDate
            });
    }, []);

    useOuterClickNotifier(() => {
        setActive(false);
        toggleCalendar(false);
    }, wrapperRef);

    const Prefix = () => (
        <Styled.DateIcon variant={variant} isErrorPresent={isErrorPresent} isActive={active} disabled={disabled} size={size}>
            <DateRangeIcon onClick={onIconClick} size={size} />
        </Styled.DateIcon>
    );
    return (
        <Styled.MainWrapperComponent ref={wrapperRef} fullWidth={fullWidth} minWidth={minWidth}>
            <Styled.OuterWrapper id={`${inputId}-input-wrapper`} fullWidth={fullWidth} minWidth={minWidth}>
                <Styled.InnerWrapper
                    size={size}
                    // onClick={() => {}}
                    variant={variant}
                    disabled={disabled}
                    isErrorPresent={isErrorPresent}
                    isLabelPresent={isToLabelPresent || isFromLabelPresent}
                >
                    <TextFieldStyled.Prefix size={size}>
                        <Prefix />
                    </TextFieldStyled.Prefix>
                    <TextFieldStyled.InputWrapper>
                        <TextFieldStyled.Input
                            ref={inputRef}
                            id={`${inputId}-from-input`}
                            aria-describedby={`${inputId}-from-helper-text`}
                            required={required}
                            disabled={disabled}
                            placeholder={mask || fromPlaceholder || placeholder || ' '}
                            isLabelPresent={isFromLabelPresent}
                            value={startDateText}
                            onChange={e => onChange(e, 'startDate')}
                            isPrefixPresent
                            isSuffixPresent={false}
                            errorText={errorText || builtInErrorMessage}
                            {...{ ...restProps, variant, size, onBlur, onFocus /* onInvalid, */ }}
                        />
                        {/* {maskLabel && (
                            <TextFieldStyled.MaskPlaceholder size={size} isLabelPresent={isFromLabelPresent} variant={variant}>
                                {maskLabel}
                            </TextFieldStyled.MaskPlaceholder>
                        )} */}
                        <TextFieldStyled.Label htmlFor={`${inputId}-from-input`} size={size} variant={variant} required={required}>
                            {fromLabel}
                        </TextFieldStyled.Label>
                    </TextFieldStyled.InputWrapper>
                    <Styled.InputSeparator />
                    <TextFieldStyled.InputWrapper>
                        <TextFieldStyled.Input
                            id={`${inputId}-to-input`}
                            aria-describedby={`${inputId}-to-helper-text`}
                            required={required}
                            disabled={disabled}
                            placeholder={mask || toPlaceholder || placeholder || ' '}
                            isLabelPresent={isToLabelPresent}
                            value={endDateText}
                            isSuffixPresent={false}
                            onChange={e => onChange(e, 'endDate')}
                            errorText={errorText || builtInErrorMessage}
                            {...{ ...restProps, variant, size, onBlur, onFocus /* onInvalid, */ }}
                        />
                        {/* {maskLabel && (
                            <TextFieldStyled.MaskPlaceholder size={size} isLabelPresent={isToLabelPresent} variant={variant}>
                                {maskLabel}
                            </TextFieldStyled.MaskPlaceholder>
                        )} */}
                        <TextFieldStyled.Label htmlFor={`${inputId}-to-input`} size={size} variant={variant} required={required}>
                            {toLabel}
                        </TextFieldStyled.Label>
                    </TextFieldStyled.InputWrapper>
                </Styled.InnerWrapper>
                {/* {(isErrorPresent || helperText) && (
                <TextFieldStyled.HelperText id={`${id}-helper-text`} onClick={stopPropagation} size={size}>
                    {errorText || builtInErrorMessage || helperText}
                </TextFieldStyled.HelperText>
            )} */}
            </Styled.OuterWrapper>
            {showCalendar && (
                <Styled.CalendarWrapper size={size}>
                    <Styled.DateRangeNavContainer>
                        <Styled.DateRangeNav>
                            <CalendarStyled.MonthNavigation className="navigation-go-back" disabled={false} /* onClick={() => {}} */>
                                <KeyboardArrowLeftIcon />
                            </CalendarStyled.MonthNavigation>
                            <Styled.DateRangeNavText>September 2020</Styled.DateRangeNavText>
                        </Styled.DateRangeNav>
                        <Calendar
                            id={`${inputId}-from-calendar`}
                            disableHeader={true}
                            date={startDate}
                            onChange={() => {}}
                            isErrorPresent={isErrorPresent}
                            minSelectableDate={minSelectableDate}
                            maxSelectableDate={maxSelectableDate}
                        />
                    </Styled.DateRangeNavContainer>
                    <Styled.DateRangeNavContainer>
                        <Styled.DateRangeNav>
                            <Styled.DateRangeNavText>October 2020</Styled.DateRangeNavText>
                            <CalendarStyled.MonthNavigation className="navigation-go-forward" disabled={false} /* onClick={() => {}} */>
                                <KeyboardArrowRightIcon />
                            </CalendarStyled.MonthNavigation>
                        </Styled.DateRangeNav>
                        <Calendar
                            id={`${inputId}-to-calendar`}
                            disableHeader={true}
                            date={endDate}
                            onChange={() => {}}
                            isErrorPresent={isErrorPresent}
                            minSelectableDate={minSelectableDate}
                            maxSelectableDate={maxSelectableDate}
                        />
                    </Styled.DateRangeNavContainer>
                </Styled.CalendarWrapper>
            )}
        </Styled.MainWrapperComponent>
    );
});

DateRangePicker.displayName = 'DateRangePicker';
DateRangePicker.defaultProps = {};
