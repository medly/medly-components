import { AccessTimeIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { forwardRef, memo } from 'react';
import TextField from '../TextField';
import { TimePickerWrapper } from './TimePicker.styled';
import TimePickerPopup from './TimePickerPopup';
import { TimePickerProps } from './types';

const Component: FC<TimePickerProps> = memo(
    forwardRef((props, ref) => {
        const { value, onChange, disabled, className, fullWidth, minWidth, maxWidth, popoverDistance, popoverPlacement, ...restProps } =
            props;
        const id = props.id || props.label?.toLowerCase().replace(/\s/g, '') || 'medly-timepicker';
        const isMobile = navigator?.userAgent?.indexOf('Mobi') > -1;

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

        return (
            <TimePickerWrapper className={className} fullWidth={fullWidth} minWidth={minWidth} maxWidth={maxWidth} interactionType="click">
                <TextField
                    fullWidth
                    type="time"
                    suffix={AccessTimeIcon}
                    id={id}
                    ref={ref}
                    disabled={disabled}
                    onChange={handleChange}
                    value={value}
                    {...restProps}
                />
                {!disabled && !isMobile && (
                    <TimePickerPopup
                        value={value}
                        onChange={onChange}
                        popoverDistance={popoverDistance}
                        popoverPlacement={popoverPlacement}
                    />
                )}
            </TimePickerWrapper>
        );
    })
);
Component.defaultProps = {
    size: 'M',
    label: 'Time',
    variant: 'filled',
    disabled: false,
    required: false,
    fullWidth: false,
    minWidth: '20rem',
    showDecorators: true
};
Component.displayName = 'TimePicker';
export const TimePicker: FC<TimePickerProps> & WithStyle = Object.assign(Component, { Style: TimePickerWrapper });
