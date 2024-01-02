import { AccessTimeIcon } from '@medly-components/icons';
import { WithStyle, useCombinedRefs } from '@medly-components/utils';
import type { FC, FocusEvent } from 'react';
import { forwardRef, memo, useContext, useEffect, useRef } from 'react';
import { PopoverContext } from '../../Popover/Popover.context';
import TextField from '../../TextField';
import { TimePickerTextFieldProps } from './types';

const Component: FC<TimePickerTextFieldProps> = memo(
    forwardRef((props, ref) => {
        const [isDialogOpen] = useContext(PopoverContext);
        const inputRef = useCombinedRefs<HTMLInputElement>(ref, useRef(null));

        const onBlur = (event: FocusEvent<HTMLInputElement>) => {
            isDialogOpen ? inputRef?.current?.focus() : inputRef?.current?.blur();
            props?.onBlur?.(event);
        };

        useEffect(() => {
            !isDialogOpen && inputRef?.current?.blur();
        }, [isDialogOpen]);

        return <TextField fullWidth type="time" suffix={AccessTimeIcon} ref={inputRef} {...{ ...props, onBlur }} />;
    })
);
Component.displayName = 'TimePickerTextField';
export const TimePickerTextField: FC<TimePickerTextFieldProps> & WithStyle = Object.assign(Component, { Style: TextField.Style });
