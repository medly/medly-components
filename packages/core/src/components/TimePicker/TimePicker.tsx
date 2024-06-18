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
        const { value, onChange, disabled, className, fullWidth, minWidth, maxWidth, popoverDistance, popoverPlacement, ...restProps } =
            props;

        const handleReset = () => {
            setTextfieldKey(key => key + 1);
            onChange('');
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
                    {...restProps}
                />
                {!disabled && (
                    <TimePickerPopup
                        key={value.toString()}
                        value={value}
                        onChange={onChange}
                        onReset={handleReset}
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
