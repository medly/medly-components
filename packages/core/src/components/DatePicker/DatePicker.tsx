import { parseToDate, useCombinedRefs, WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import React, { forwardRef, memo, useCallback, useMemo, useRef, useState } from 'react';
import Calendar from '../Calendar';
import Popover from '../Popover';
import { Wrapper } from './DatePicker.styled';
import { DatePickerTextField } from './DatePickerTextField';
import { DatePickerProps } from './types';

const Component: FC<DatePickerProps> = memo(
    forwardRef((props, ref) => {
        const {
                value,
                onChange,
                displayFormat,
                fullWidth,
                minWidth,
                disabled,
                errorText,
                className,
                validator,
                popoverPlacement,
                minSelectableDate,
                maxSelectableDate,
                defaultMonth,
                defaultYear,
                hideInput,
                valueFormatter,
                onChangeFormatter,
                ...restProps
            } = props,
            id = props.id || props.label?.toLowerCase().replace(/\s/g, '') || 'medly-datepicker', // TODO:- Remove static ID concept to avoid dup ID
            date: Date | null = useMemo(
                () =>
                    valueFormatter
                        ? valueFormatter(value)
                        : value instanceof Date
                        ? value
                        : typeof value === 'string'
                        ? parseToDate(value, displayFormat!)
                        : null,
                [value, displayFormat]
            );

        const inputRef = useCombinedRefs<HTMLInputElement>(ref, useRef(null)),
            [builtInErrorMessage, setErrorMessage] = useState(''),
            isErrorPresent = useMemo(() => !!errorText || !!builtInErrorMessage, [errorText, builtInErrorMessage]);

        const onDateChange = useCallback(
            (dt: Date, e: React.MouseEvent<HTMLButtonElement>) => {
                onChange(onChangeFormatter ? onChangeFormatter(dt) : dt);
                setErrorMessage('');
                setErrorMessage((validator && validator(dt, e)) || '');
            },
            [onChange]
        );

        return (
            <Wrapper
                id={`${id}-datepicker-wrapper`}
                fullWidth={fullWidth}
                minWidth={minWidth}
                className={className}
                variant={restProps.variant!}
                hideInput={hideInput}
                interactionType="click"
            >
                <DatePickerTextField
                    {...props}
                    ref={inputRef}
                    builtInErrorMessage={builtInErrorMessage}
                    setErrorMessage={setErrorMessage}
                />
                {!disabled && (
                    <Popover.Popup placement={popoverPlacement}>
                        <Calendar
                            id={`${id}-calendar`}
                            date={date}
                            isErrorPresent={isErrorPresent}
                            onChange={onDateChange}
                            defaultMonth={defaultMonth}
                            defaultYear={defaultYear}
                            minSelectableDate={minSelectableDate!}
                            maxSelectableDate={maxSelectableDate!}
                        />
                    </Popover.Popup>
                )}
            </Wrapper>
        );
    })
);
Component.defaultProps = {
    label: '',
    value: null,
    variant: 'filled',
    displayFormat: 'MM/dd/yyyy',
    disabled: false,
    required: false,
    fullWidth: false,
    minWidth: '20rem',
    minSelectableDate: new Date(1901, 0, 1),
    maxSelectableDate: new Date(2100, 11, 1),
    popoverPlacement: 'bottom-start',
    showCalendarIcon: true,
    showDecorators: true,
    calendarIconPosition: 'right'
};
Component.displayName = 'DatePicker';
export const DatePicker: FC<DatePickerProps> & WithStyle = Object.assign(Component, { Style: Wrapper });
