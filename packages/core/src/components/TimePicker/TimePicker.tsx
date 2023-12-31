import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { forwardRef, memo } from 'react';
import Popover from '../Popover';
import TextField from '../TextField';
import { TimeIcon, TimePickerWrapper } from './TimePicker.styled';
import TimePickerPopup from './TimePickerPopup';
import { TimePickerProps } from './types';

const Component: FC<TimePickerProps> = memo(
    forwardRef((props, ref) => {
        const { value, onChange, disabled, className, popoverPlacement, ...restProps } = props;
        const id = props.id || props.label?.toLowerCase().replace(/\s/g, '') || 'medly-timepicker';
        const isMobile = navigator?.userAgent?.indexOf('Mobi') > -1;

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

        return (
            <Popover className={className} interactionType="click">
                <TimePickerWrapper>
                    <TextField
                        fullWidth
                        type="time"
                        suffix={TimeIcon}
                        id={id}
                        ref={ref}
                        disabled={disabled}
                        onChange={handleChange}
                        value={value}
                        {...restProps}
                    />
                </TimePickerWrapper>
                {!disabled && !isMobile && <TimePickerPopup value={value} onChange={onChange} popoverPlacement={popoverPlacement} />}
            </Popover>
        );
    })
);
Component.defaultProps = {
    size: 'M',
    label: 'Time',
    variant: 'outlined',
    disabled: false,
    required: false,
    fullWidth: false,
    minWidth: '20rem',
    showDecorators: true
};
Component.displayName = 'TimePicker';
export const TimePicker: FC<TimePickerProps> & WithStyle = Object.assign(Component, { Style: TimePickerWrapper });
