import { AccessTimeIcon } from '@medly-components/icons';
import { WithStyle, useCombinedRefs } from '@medly-components/utils';
import type { ChangeEvent, FC, FocusEvent } from 'react';
import { forwardRef, memo, useCallback, useContext, useEffect, useRef } from 'react';
import { PopoverContext } from '../../Popover/Popover.context';
import TextField from '../../TextField';
import { TimePickerTextFieldProps } from './types';

const Component: FC<TimePickerTextFieldProps> = memo(
    forwardRef((props, ref) => {
        const [isDialogOpen] = useContext(PopoverContext);
        const inputRef = useCombinedRefs<HTMLInputElement>(ref, useRef(null));

        const validator = useCallback(
            (value: string, event: ChangeEvent<HTMLInputElement>) => {
                if (value === '' && !isDialogOpen) {
                    const validatorMessage: string = (props.validator && props.validator(value, event)) || '';
                    const message: string = props.validator ? validatorMessage : (inputRef.current?.validationMessage as string);
                    return message;
                }
                return '';
            },
            [props.validator, isDialogOpen]
        );

        const onBlur = (event: FocusEvent<HTMLInputElement>) => {
            if (isDialogOpen) {
                inputRef?.current?.focus();
            } else {
                inputRef?.current?.blur();
                props?.onBlur?.(event);
            }
        };

        useEffect(() => {
            !isDialogOpen && inputRef?.current?.blur();
        }, [isDialogOpen]);

        return <TextField fullWidth type="time" suffix={AccessTimeIcon} ref={inputRef} {...{ ...props, onBlur, validator }} />;
    })
);
Component.displayName = 'TimePickerTextField';
export const TimePickerTextField: FC<TimePickerTextFieldProps> & WithStyle = Object.assign(Component, { Style: TextField.Style });
