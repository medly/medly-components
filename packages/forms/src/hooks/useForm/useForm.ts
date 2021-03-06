import { isMobile, parseToDate, useUpdateEffect } from '@medly-components/utils';
import { format } from 'date-fns';
import memoize from 'fast-memoize';
import { useCallback, useState } from 'react';
import { createDottedKeyObject, createObjectFromDottedKeys } from '../../helpers';
import { Handlers, UseFormResult } from './types';

export const useForm = (initialState: object): UseFormResult => {
    const [values, setValues] = useState(createDottedKeyObject(initialState));
    const [errorMessages, setErrorMessages] = useState({});
    const [formKey, setFormKey] = useState(0);

    useUpdateEffect(() => {
        setValues(createDottedKeyObject(initialState));
    }, [initialState]);

    const addErrorMessage = useCallback((key: string, message: string) => {
        setErrorMessages(error => ({ ...error, [key]: message }));
    }, []);

    const getPeriodFromDates: Handlers['getPeriodFromDates'] = useCallback(
        memoize((startDate, endDate, displayFormat) => ({
            startDate: startDate ? (startDate instanceof Date ? startDate : parseToDate(startDate, displayFormat || 'MM/dd/yyyy')) : null,
            endDate: endDate ? (endDate instanceof Date ? endDate : parseToDate(endDate, displayFormat || 'MM/dd/yyyy')) : null
        })),
        []
    );

    const handleFocus: Handlers['handleFocus'] = useCallback(
        memoize((name, onFocus) => event => {
            addErrorMessage(name, '');
            onFocus && onFocus(event);
        }),
        []
    );

    const handleFormSubmit: Handlers['handleFormSubmit'] = useCallback(
        memoize(onSubmit => event => {
            event.preventDefault();
            onSubmit(createObjectFromDottedKeys(values));
        }),
        [values, errorMessages]
    );

    const handleFormReset: Handlers['handleFormReset'] = useCallback(
        memoize(onReset => event => {
            event.preventDefault();
            setValues({});
            setErrorMessages({});
            setFormKey(key => key + 1);
            onReset && onReset(event);
        }),
        []
    );

    const handleTextChange: Handlers['handleTextChange'] = useCallback(
        memoize(name => event => {
            const { value } = event.target as HTMLInputElement;
            setValues(val => ({ ...val, [name]: value }));
        }),
        []
    );

    const handleNumberChange: Handlers['handleNumberChange'] = useCallback(
        memoize(name => event => {
            const { value } = event.target as HTMLInputElement;
            setValues(val => ({ ...val, [name]: Number(value) }));
        }),
        []
    );

    const handleValueChange: Handlers['handleSingleSelectChange'] = useCallback(
        memoize(name => value => setValues(val => ({ ...val, [name]: value }))),
        []
    );

    const handleValuesChange: Handlers['handleCheckboxGroupChange'] = useCallback(
        memoize(name => updatedValues => setValues(val => ({ ...val, [name]: updatedValues }))),
        []
    );

    const handleCheckboxChange: Handlers['handleCheckboxChange'] = useCallback(
        memoize(name => event => {
            const { checked } = event.target as HTMLInputElement;
            setValues(val => ({ ...val, [name]: checked }));
        }),
        []
    );

    const handleDateChange: Handlers['handleDateChange'] = useCallback(
        memoize((name, displayFormat) => value => {
            const propOrDefaultDisplayFormat = displayFormat || 'MM/dd/yyyy';
            setValues(val => ({ ...val, [name]: value ? format(value, isMobile ? 'yyyy-MM-dd' : propOrDefaultDisplayFormat) : '' }));
        }),
        []
    );

    const handleDateRangeChange: Handlers['handleDateRangeChange'] = useCallback(
        memoize((name, displayFormat) => value => {
            setValues(val => ({
                ...val,
                [`${name}.startDate`]: value.startDate ? format(value.startDate, displayFormat || 'MM/dd/yyyy') : '',
                [`${name}.endDate`]: value.endDate ? format(value.endDate, displayFormat || 'MM/dd/yyyy') : ''
            }));
        }),
        []
    );

    const handleFileChange: Handlers['handleFileChange'] = useCallback(
        memoize((name, maxSize) => files => {
            Array.from(files).find(file => file.size > maxSize)
                ? addErrorMessage(name, `File size should be less then ${maxSize / 1000000}MB`)
                : setValues(val => ({ ...val, [name]: files }));
        }),
        []
    );

    return {
        formKey,
        values,
        setValues,
        errorMessages,
        addErrorMessage,
        setErrorMessages,
        handlers: {
            handleFormReset,
            handleFormSubmit,
            handleFocus,
            handleTextChange,
            handleNumberChange,
            handleFileChange,
            handleCheckboxChange,
            handleDateChange,
            handleDateRangeChange,
            getPeriodFromDates,
            handleCheckboxGroupChange: handleValuesChange,
            handleRadioGroupChange: handleValueChange,
            handleSingleSelectChange: handleValueChange,
            handleMultiSelectChange: handleValuesChange
        }
    };
};
