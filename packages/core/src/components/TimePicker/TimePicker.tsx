import { WithStyle, useCombinedRefs } from '@medly-components/utils';
import type { FC } from 'react';
import { forwardRef, memo, useRef, useState } from 'react';
import { TimePickerWrapper } from './TimePicker.styled';
import TimePickerPopup from './TimePickerPopup';
import TimePickerTextField from './TimePickerTextField';
import { TimePickerProps } from './types';

const Component: FC<TimePickerProps> = memo(
    forwardRef((props, ref) => {
        const [textFieldKey, setTextfieldKey] = useState(0);
        const wrapperRef = useRef<HTMLDivElement>(null);
        const inputRef = useCombinedRefs<HTMLInputElement>(ref, useRef(null));
        const id = props.id || props.label?.toLowerCase().replace(/\s/g, '') || 'medly-timepicker';
        const {
            value,
            onChange,
            onCancel,
            disabled,
            className,
            fullWidth,
            minWidth,
            maxWidth,
            popoverDistance,
            popoverPlacement,
            disableFutureTime,
            disablePastTime,
            clearOnCancel,
            showCurrentTimeAsDefault,
            ...restProps
        } = props;

        const handleReset = () => {
            setTextfieldKey(key => key + 1);
            clearOnCancel && onChange('');
            onCancel?.();
        };
        const handleChange = (value: string) => {
            setTextfieldKey(key => key + 1);
            onChange(value);
        };

        return (
            <TimePickerWrapper
                ref={wrapperRef}
                className={className}
                fullWidth={fullWidth}
                minWidth={minWidth}
                maxWidth={maxWidth}
                interactionType="click"
            >
                <TimePickerTextField
                    id={id}
                    ref={inputRef}
                    disabled={disabled}
                    onChange={onChange}
                    value={value}
                    key={textFieldKey.toString()}
                    minWidth={minWidth}
                    maxWidth={maxWidth}
                    disableFutureTime={disableFutureTime}
                    disablePastTime={disablePastTime}
                    {...restProps}
                />
                {!disabled && (
                    <TimePickerPopup
                        key={value}
                        value={value}
                        onChange={handleChange}
                        onReset={handleReset}
                        popoverDistance={popoverDistance}
                        popoverPlacement={popoverPlacement}
                        disableFutureTime={disableFutureTime}
                        disablePastTime={disablePastTime}
                        showCurrentTimeAsDefault={showCurrentTimeAsDefault}
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
