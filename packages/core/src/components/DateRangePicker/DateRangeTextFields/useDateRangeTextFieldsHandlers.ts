import { parseToDate } from '@medly-components/utils';
import { ChangeEvent, FormEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { isValidDate } from '../../Calendar/helper';
import getMaskedValue from '../../TextField/getMaskedValue';
import { getFormattedDate } from '../helpers';
import { Props } from './types';

export const useDateRangeTextFieldsHandlers = (props: Props) => {
    const {
        disabled,
        displayFormat,
        isActive,
        startDateRef,
        endDateRef,
        errorText,
        required,
        validator,
        selectedDates,
        onCalendarIconClick,
        onDateChange,
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
        onIconClick = useCallback(
            event => {
                event.stopPropagation();
                if (!disabled) {
                    onCalendarIconClick(true);
                    startDateRef.current?.focus();
                }
            },
            [disabled]
        ),
        onTextFieldFocus = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
            onCalendarIconClick(true);
            setFocusedElement(event.target.name as `START_DATE` | `END_DATE`);
            event.target.setSelectionRange(event.target.value.length, event.target.value.length);
        }, []),
        handleTextChange = useCallback(
            (e: React.ChangeEvent<HTMLInputElement>) => {
                const maskedValue = getMaskedValue(e, mask),
                    parsedDate = parseToDate(e.target.value, displayFormat),
                    maskedLabel = `${maskedValue}${mask.substr(maskedValue.length)}`;

                if (e.target.name === 'START_DATE') {
                    setStartDateText(maskedValue);
                    setStartDateMaskLabel(maskedLabel);
                    if (parsedDate.toString() !== 'Invalid Date') {
                        setFocusedElement('END_DATE');
                        onDateChange({ ...selectedDates, startDate: parsedDate });
                    }
                } else {
                    setEndDateText(maskedValue);
                    setEndDateMaskLabel(maskedLabel);
                    if (parsedDate.toString() !== 'Invalid Date') {
                        setFocusedElement('START_DATE');
                        onDateChange({ ...selectedDates, endDate: parsedDate });
                    }
                }
            },
            [selectedDates, onDateChange]
        ),
        validateOnTextFieldBlur = useCallback(
            (event: FormEvent<HTMLInputElement>) => {
                event.preventDefault();
                const element = event.target as HTMLInputElement,
                    isInvalidDate = element.value && parseToDate(element.value, displayFormat).toString() === 'Invalid Date',
                    message = isInvalidDate ? 'Enter valid date' : '';
                if (isInvalidDate) {
                    setErrorMessage(message);
                    onDateChange({
                        ...selectedDates,
                        ...(element.name === 'START_DATE' ? { startDate: null } : { endDate: null })
                    });
                }
            },
            [selectedDates, onDateChange]
        ),
        validateOnTextFieldInvalid = useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                const element = event.target as HTMLInputElement,
                    validatorMessage = (validator && validator(selectedDates, event)) || '',
                    isInvalidDate = element.value && parseToDate(element.value, displayFormat).toString() === 'Invalid Date',
                    message = validator ? validatorMessage : element.validationMessage || (isInvalidDate ? 'Enter valid date' : '');
                setErrorMessage(message);
                validator && (element.name === 'START_DATE' ? startDateRef : endDateRef).current?.setCustomValidity(validatorMessage);
            },
            [validator, displayFormat, selectedDates, onDateChange]
        ),
        validateOnWrapperBlur = useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
                const validatorMessage = (validator && validator(selectedDates, event)) || '',
                    customMessage = (required && !selectedDates.startDate && !selectedDates.endDate && 'Please fill in this field.') || '',
                    message = validator ? validatorMessage : customMessage;
                setErrorMessage(message);
                if (validator) {
                    startDateRef.current?.setCustomValidity(validatorMessage);
                    endDateRef.current?.setCustomValidity(validatorMessage);
                }
            },
            [validator, selectedDates, required]
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

    return {
        mask,
        builtInErrorMessage,
        startDateText,
        endDateText,
        startDateMaskLabel,
        endDateMaskLabel,
        isErrorPresent,
        stopPropagation,
        onIconClick,
        onTextFieldFocus,
        handleTextChange,
        validateOnTextFieldBlur,
        validateOnTextFieldInvalid,
        validateOnWrapperBlur
    };
};
