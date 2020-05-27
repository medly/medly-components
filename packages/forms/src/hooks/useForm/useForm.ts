import { parseToDate } from '@medly-components/utils';
import { format } from 'date-fns';
import memoize from 'fast-memoize';
import React, { useCallback, useState } from 'react';
import { DisplayFormat } from '../../components/Fields/types';
import { createDottedKeyObject, createObjectFromDottedKeys } from '../../helpers';
import { UseFormResult } from './types';

export const useForm = (initialState: {}): UseFormResult => {
    const [values, setValues] = useState(createDottedKeyObject(initialState));
    const [errorMessages, setErrorMessages] = useState({});

    const addErrorMessage = useCallback((key: string, message: string) => {
        setErrorMessages(error => ({ ...error, [key]: message }));
    }, []);

    const getPeriodFromDates = useCallback(
        memoize((startDate: string | Date, endDate: string | Date, displayFormat: DisplayFormat) => ({
            startDate: startDate ? (startDate instanceof Date ? startDate : parseToDate(startDate, displayFormat || 'MM/dd/yyyy')) : null,
            endDate: endDate ? (endDate instanceof Date ? endDate : parseToDate(endDate, displayFormat || 'MM/dd/yyyy')) : null
        })),
        []
    );

    const handleFocus = useCallback(
        memoize((name: string, onFocus: (e: any) => void) => (event: any) => {
            addErrorMessage(name, '');
            onFocus && onFocus(event);
        }),
        []
    );

    const handleFormSubmit = useCallback(
        memoize((onSubmit: (values: object) => void) => (e: React.FormEvent) => {
            e.preventDefault();
            (e.target as HTMLFormElement).reset();
            const result = createObjectFromDottedKeys(values);
            setValues({});
            setErrorMessages({});
            onSubmit && onSubmit(result);
        }),
        [values]
    );

    const handleTextChange = useCallback(
        memoize((name: string) => (event: React.FormEvent<HTMLInputElement>) => {
            const target = event.target as HTMLInputElement;
            setValues(val => ({ ...val, [name]: target.value }));
        }),
        []
    );

    const handleNumberChange = useCallback(
        memoize((name: string) => (event: React.FormEvent<HTMLInputElement>) => {
            const target = event.target as HTMLInputElement;
            setValues(val => ({ ...val, [name]: Number(target.value) }));
        }),
        []
    );

    const handleValueChange = useCallback(
        memoize((name: string) => (value: any) => {
            setValues(val => ({ ...val, [name]: value }));
        }),
        []
    );

    const handleValuesChange = useCallback(
        memoize((name: string) => (values: any[]) => {
            setValues(val => ({ ...val, [name]: values }));
        }),
        []
    );

    const handleCheckboxChange = useCallback(
        memoize((name: string) => (event: React.FormEvent<HTMLInputElement>) => {
            const target = event.target as HTMLInputElement;
            setValues(val => ({ ...val, [name]: target.checked }));
        }),
        []
    );

    const handleDateChange = useCallback(
        memoize((name: string, displayFormat: string) => (value: Date | null) => {
            setValues(val => ({ ...val, [name]: format(value, displayFormat || 'MM/dd/yyyy') }));
        }),
        []
    );

    const handleDateRangeChange = useCallback(
        memoize((name: string, displayFormat: DisplayFormat) => (value: { startDate: Date; endDate: Date }) => {
            setValues(val => ({
                ...val,
                [`${name}.startDate`]: format(value.startDate, displayFormat || 'MM/dd/yyyy'),
                [`${name}.endDate`]: value.endDate ? format(value.endDate, displayFormat || 'MM/dd/yyyy') : ''
            }));
        }),
        []
    );

    const handleFileChange = useCallback(
        memoize((name: string, maxSize?: number) => (files: FileList) => {
            Array.from(files).find(file => file.size > maxSize)
                ? addErrorMessage(name, `File size should be less then ${maxSize / 1000000}MB`)
                : setValues(val => ({ ...val, [name]: files }));
        }),
        []
    );

    return {
        values,
        errorMessages,
        addErrorMessage,
        handlers: {
            handleFocus,
            handleFormSubmit,
            handleTextChange,
            handleNumberChange,
            handleFileChange,
            handleCheckboxChange,
            handleCheckboxGroupChange: handleValuesChange,
            handleRadioGroupChange: handleValueChange,
            handleSingleSelectChange: handleValueChange,
            handleMultiSelectChange: handleValuesChange,
            handleDateChange,
            handleDateRangeChange,
            getPeriodFromDates
        },
        setValues,
        setErrorMessages
    };
};
