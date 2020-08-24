import { DateRangeIcon } from '@medly-components/icons';
import { parseToDate, WithStyle } from '@medly-components/utils';
import { format } from 'date-fns';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import InputMask from 'react-input-mask';
import Calendar from '../Calendar';
import Popover from '../Popover';
import TextField from '../TextField';
import { Props } from './types';

export const DatePicker: React.FC<Props> & WithStyle = React.memo(props => {
    const {
            value,
            onChange,
            displayFormat,
            label,
            labelPosition,
            fullWidth,
            minWidth,
            required,
            popoverPlacement,
            minSelectableDate,
            maxSelectableDate,
            placeholder,
            ...restProps
        } = props,
        id = props.id || 'medly-datepicker',
        date: Date | null = useMemo(
            () => (value instanceof Date ? value : typeof value === 'string' ? parseToDate(value, displayFormat) : null),
            [value, displayFormat]
        );

    const [formattedDate, setFormattedDate] = useState('');
    const [errorText, setErrorText] = useState('');

    useEffect(() => {
        setFormattedDate(date ? format(date, displayFormat) : '');
    }, [date]);

    const validateDay = useCallback((month: number) => {
            if (month === 2) return 28;
            if (month === 4 || month === 6 || month === 9 || month === 11) return 30;
            return 31;
        }, []),
        onChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
            const values = event.target.value.split('/');
            const month = values[0];
            const day = values[1];
            const year = values[2];
            if (parseInt(month) > 12) {
                setErrorText('Enter valid Month');
            } else if (parseInt(day) > validateDay(parseInt(month))) {
                setErrorText('Enter valid Day');
            } else {
                setErrorText('');
            }
            setFormattedDate(event.target.value);
        }, []);

    return (
        <Popover interactionType="click">
            <InputMask
                mask="99 / 99 / 9999"
                maskPlaceholder={'MM / DD / YYYY'}
                placeholder={placeholder}
                value={formattedDate}
                onChange={onChangeHandler}
                readOnly={false}
                disabled={false}
            >
                <TextField
                    errorText={errorText}
                    id={id}
                    value={formattedDate}
                    required={required}
                    suffix={DateRangeIcon}
                    label={label}
                    variant={restProps.variant}
                    fullWidth
                />
            </InputMask>
            <Popover.Popup id={`${id}-popover`} placement={popoverPlacement}>
                <Calendar
                    id={`${id}-calendar`}
                    date={date}
                    onChange={onChange}
                    minSelectableDate={minSelectableDate ?? undefined}
                    maxSelectableDate={maxSelectableDate ?? undefined}
                />
            </Popover.Popup>
        </Popover>
    );
});

DatePicker.defaultProps = {
    value: null,
    placeholder: 'Date of Birth',
    variant: 'filled',
    displayFormat: 'MM/dd/yyyy',
    disabled: false,
    required: false,
    label: '',
    labelPosition: 'left',
    fullWidth: false,
    popoverPlacement: 'bottom-start'
};
DatePicker.displayName = 'DatePicker';
DatePicker.Style = Popover.Style;
