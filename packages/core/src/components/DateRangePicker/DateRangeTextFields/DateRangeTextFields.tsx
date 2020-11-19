import { DateRangeIcon } from '@medly-components/icons';
import { parseToDate } from '@medly-components/utils';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { isValidDate } from '../../Calendar/helper';
import { DateIconWrapper } from '../../DatePicker/DatePicker.styled';
import getMaskedValue from '../../TextField/getMaskedValue';
import * as TextFieldStyled from '../../TextField/Styled';
import { getFormattedDate } from '../helpers';
import DateRangeTextField from './DateRangeTextField';
import { Wrapper } from './DateRangeTextFields.styled';
import InputSeparator from './InputSeparator';
import { Props } from './types';

export const DateRangeTextFields: React.FC<Props> = React.memo(props => {
    const {
        id,
        size,
        variant,
        disabled,
        displayFormat,
        isActive,
        setActive,
        startDateRef,
        endDateRef,
        errorText,
        helperText,
        selectedDates,
        onDateChange,
        startDateLabel,
        endDateLabel,
        setFocusedElement
    } = props;

    const [builtInErrorMessage, setErrorMessage] = useState(''),
        [startDateText, setStartDateText] = useState(''),
        [endDateText, setEndDateText] = useState(''),
        mask = useMemo(() => displayFormat.replace(new RegExp('\\/|\\-', 'g'), ' $& ').toUpperCase(), [displayFormat]),
        [startDateMaskLabel, setStartDateMaskLabel] = useState(mask),
        [endDateMaskLabel, setEndDateMaskLabel] = useState(mask),
        isErrorPresent = useMemo(() => !!errorText || !!builtInErrorMessage, [errorText, builtInErrorMessage]);

    const stopPropagation = useCallback((event: React.MouseEvent) => event.stopPropagation(), []),
        onIconClick = React.useCallback(
            event => {
                event.stopPropagation();
                if (!disabled) {
                    setActive(true);
                    startDateRef.current.focus();
                }
            },
            [disabled]
        ),
        onFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
            setActive(true);
            setFocusedElement(event.target.name as `START_DATE` | `END_DATE`);
            event.target.setSelectionRange(event.target.value.length, event.target.value.length);
        }, []),
        onBlur = React.useCallback(
            (event: React.FocusEvent<HTMLInputElement>) => {
                if (event.target.value && parseToDate(event.target.value, displayFormat).toString() === 'Invalid Date') {
                    setErrorMessage('Enter valid date');
                    onDateChange({ ...selectedDates, ...(event.target.name === 'START_DATE' ? { startDate: null } : { endDate: null }) });
                }
            },
            [selectedDates, onDateChange, displayFormat]
        ),
        handleTextChange = React.useCallback(
            (e: React.ChangeEvent<HTMLInputElement>) => {
                const maskedValue = getMaskedValue(e, mask),
                    parsedDate = parseToDate(e.target.value, displayFormat),
                    maskedLabel = `${maskedValue}${mask.substr(maskedValue.length)}`;

                if (e.target.name === 'START_DATE') {
                    setStartDateText(maskedValue);
                    setStartDateMaskLabel(maskedLabel);
                    parsedDate.toString() !== 'Invalid Date' && onDateChange({ ...selectedDates, startDate: parsedDate });
                } else if (e.target.name === 'END_DATE') {
                    setEndDateText(maskedValue);
                    setEndDateMaskLabel(maskedLabel);
                    parsedDate.toString() !== 'Invalid Date' && onDateChange({ ...selectedDates, endDate: parsedDate });
                }
            },
            [selectedDates, onDateChange]
        );

    useEffect(() => {
        const formattedStartDate = selectedDates.startDate ? getFormattedDate(selectedDates.startDate, displayFormat) : '',
            formattedEndDate = selectedDates.endDate ? getFormattedDate(selectedDates.endDate, displayFormat) : '';
        setStartDateText(formattedStartDate);
        setEndDateText(formattedEndDate);
        setStartDateMaskLabel(formattedStartDate || mask);
        setEndDateMaskLabel(formattedEndDate || mask);
        isValidDate(selectedDates.startDate) && isValidDate(selectedDates.endDate) && setErrorMessage('');
    }, [isActive, selectedDates, displayFormat]);

    const textProps = {
            variant,
            size,
            onBlur,
            onFocus,
            disabled,
            placeholder: mask,
            onChange: handleTextChange,
            errorText: errorText || builtInErrorMessage
        },
        iconProps = {
            variant,
            isErrorPresent,
            disabled,
            size,
            isActive
        };

    const Prefix = () => (
        <DateIconWrapper {...iconProps}>
            <DateRangeIcon id={`${id}-calendar-icon`} onClick={onIconClick} size={size} />
        </DateIconWrapper>
    );

    return (
        <>
            <Wrapper
                id={`${id}-textFields`}
                size={size}
                variant={variant}
                disabled={disabled}
                isErrorPresent={isErrorPresent}
                isLabelPresent
                isActive={isActive}
            >
                <TextFieldStyled.Prefix size={size}>
                    <Prefix />
                </TextFieldStyled.Prefix>
                <DateRangeTextField
                    ref={startDateRef}
                    id={`${id}-startDate-input`}
                    value={startDateText}
                    name="START_DATE"
                    isPrefixPresent
                    dateMaskLabel={startDateMaskLabel}
                    label={startDateLabel}
                    {...textProps}
                />
                <InputSeparator {...iconProps} />
                <DateRangeTextField
                    ref={endDateRef}
                    id={`${id}-endDate-input`}
                    value={endDateText}
                    name="END_DATE"
                    dateMaskLabel={endDateMaskLabel}
                    label={endDateLabel}
                    {...textProps}
                />
            </Wrapper>
            <TextFieldStyled.HelperText id={`${id}-helper-text`} variant={variant} onClick={stopPropagation} size={size}>
                {errorText || builtInErrorMessage || helperText}
            </TextFieldStyled.HelperText>
        </>
    );
});
DateRangeTextFields.displayName = 'DateRangeTextFields';
