import { getFormattedDate, parseToDate } from '@medly-components/utils';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { isValidDate } from '../../Calendar/helper';
import getMaskedValue from '../../TextField/getMaskedValue';
import { FOCUS_ELEMENT } from '../types';
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
        setFocusedElement,
        minSelectableDate,
        maxSelectableDate
    } = props;

    const [builtInErrorMessage, setErrorMessage] = useState(''),
        [startDateText, setStartDateText] = useState(''),
        [endDateText, setEndDateText] = useState(''),
        mask = useMemo(() => displayFormat.replace(new RegExp('\\/|\\-', 'g'), ' $& ').toUpperCase(), [displayFormat]),
        [startDateMaskLabel, setStartDateMaskLabel] = useState(mask),
        [endDateMaskLabel, setEndDateMaskLabel] = useState(mask),
        isErrorPresent = useMemo(() => !!errorText || !!builtInErrorMessage, [errorText, builtInErrorMessage]);

    const getErrorMessage = (event: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>): string => {
        const element = event.target as HTMLInputElement,
            parsedDate = parseToDate(element.value, displayFormat),
            isInvalidDate = element.value && parsedDate.toString() === 'Invalid Date';

        if (isInvalidDate) {
            return 'Enter valid date';
        } else if (parsedDate && element.name === 'START_DATE' && parsedDate < minSelectableDate) {
            return `Please select date from allowed range`;
        } else if (parsedDate && element.name === 'END_DATE' && parsedDate > maxSelectableDate) {
            return `Please select date from allowed range`;
        } else if (parsedDate && element.name === 'START_DATE' && selectedDates.endDate && parsedDate > selectedDates.endDate) {
            return 'Start date should be less than end date';
        } else if (parsedDate && element.name === 'END_DATE' && selectedDates.startDate && parsedDate < selectedDates.startDate) {
            return 'End date should be greater than start date';
        }
        return '';
    };

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
            setFocusedElement(event.target.name as FOCUS_ELEMENT);
            event.target.setSelectionRange(event.target.value.length, event.target.value.length);
        }, []),
        handleTextChange = useCallback(
            (event: React.ChangeEvent<HTMLInputElement>) => {
                const errorMessage = getErrorMessage(event);
                const { maskedValue, selectionStart } = getMaskedValue(event, mask),
                    parsedDate = parseToDate(event.target.value, displayFormat),
                    maskedLabel = `${maskedValue}${mask.substr(maskedValue.length)}`,
                    inputValue = event.target.value,
                    // @ts-expect-error
                    { data } = event.nativeEvent;

                event.target.value = maskedValue;
                event.target.setSelectionRange(selectionStart, selectionStart);
                if (getFormattedDate(inputValue, displayFormat)) {
                    event.target.maxLength = mask!.length;
                    errorMessage && setErrorMessage(errorMessage);
                } else {
                    event.target.maxLength = mask!.length + 1;
                }

                if (event.target.name === 'START_DATE') {
                    setStartDateText(maskedValue);
                    setStartDateMaskLabel(maskedLabel);
                    if (parsedDate.toString() !== 'Invalid Date') {
                        data !== null && !errorMessage && setFocusedElement('END_DATE');
                        !errorMessage && setErrorMessage('');
                        onDateChange({ ...selectedDates, startDate: parsedDate });
                    }
                } else {
                    setEndDateText(maskedValue);
                    setEndDateMaskLabel(maskedLabel);
                    if (parsedDate.toString() !== 'Invalid Date') {
                        data !== null && !errorMessage && setFocusedElement('START_DATE');
                        !errorMessage && setErrorMessage('');
                        onDateChange({ ...selectedDates, endDate: parsedDate });
                    }
                }
            },
            [selectedDates, onDateChange]
        ),
        validateOnTextFieldBlur = useCallback(
            (event: React.FocusEvent<HTMLInputElement>) => {
                event.preventDefault();
                const element = event.target as HTMLInputElement,
                    parsedDate = parseToDate(element.value, displayFormat),
                    isInvalidDate = element.value && parsedDate.toString() === 'Invalid Date';
                if (isInvalidDate) {
                    onDateChange({
                        ...selectedDates,
                        ...(element.name === 'START_DATE' ? { startDate: null } : { endDate: null })
                    });
                }
                const message = getErrorMessage(event);
                if (message) {
                    setErrorMessage(message);
                    element.name === 'START_DATE'
                        ? startDateRef.current?.setCustomValidity(message)
                        : endDateRef.current?.setCustomValidity(message);
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
                    customRequiredMessage =
                        required && (!selectedDates.startDate || !selectedDates.endDate) && 'Please fill in this field.',
                    customInvalidMessage =
                        (!isValidDate(selectedDates.startDate) || !isValidDate(selectedDates.endDate)) && 'Enter valid date',
                    message = validator ? validatorMessage : customRequiredMessage || customInvalidMessage;
                message && setErrorMessage(message);
                if (validator && message) {
                    startDateRef.current?.setCustomValidity(message);
                    endDateRef.current?.setCustomValidity(message);
                }
            },
            [validator, selectedDates, required]
        ),
        onKeyPress = useCallback((event: React.KeyboardEvent) => {
            const regex = displayFormat?.includes('/') ? /[0-9/]+/g : /[0-9-]+/g;
            if (!regex.test(event.key)) {
                event.preventDefault();
            }
        }, []);

    useEffect(() => {
        const formattedStartDate = selectedDates.startDate ? getFormattedDate(selectedDates.startDate, displayFormat) : '',
            formattedEndDate = selectedDates.endDate ? getFormattedDate(selectedDates.endDate, displayFormat) : '',
            parsedStartDate = parseToDate(startDateText, displayFormat),
            parsedEndDate = parseToDate(endDateText, displayFormat);

        if (formattedStartDate) {
            setStartDateText(formattedStartDate);
            setStartDateMaskLabel(formattedStartDate);
        } else if (!isActive && !isErrorPresent) {
            setStartDateText('');
            setStartDateMaskLabel(mask);
        }

        if (formattedEndDate) {
            setEndDateText(formattedEndDate);
            setEndDateMaskLabel(formattedEndDate);
        } else if (!isActive && !isErrorPresent) {
            setEndDateText('');
            setEndDateMaskLabel(mask);
        }
        if (
            isValidDate(selectedDates.startDate) &&
            isValidDate(selectedDates.endDate) &&
            parsedStartDate < parsedEndDate &&
            !(parsedStartDate < minSelectableDate) &&
            !(parsedEndDate > maxSelectableDate)
        ) {
            setErrorMessage('');
            startDateRef.current?.setCustomValidity('');
            endDateRef.current?.setCustomValidity('');
        }
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
        onKeyPress,
        onTextFieldFocus,
        handleTextChange,
        validateOnTextFieldBlur,
        validateOnTextFieldInvalid,
        validateOnWrapperBlur
    };
};
