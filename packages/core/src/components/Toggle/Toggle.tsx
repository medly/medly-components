import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { forwardRef, memo, useCallback, useMemo } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import * as Styled from './Toggle.styled';
import { ToggleProps } from './types';

const Component: FC<ToggleProps> = memo(
    forwardRef((props, ref) => {
        const { id, size, label, required, labelPosition, labelVariant, labelWeight, labelColor, fullWidth, onChange, ...restProps } =
            props;

        const changeHandler = useCallback(
                (e: any) => {
                    e.stopPropagation();
                    onChange && onChange(e);
                },
                [onChange]
            ),
            toggleId = useMemo(() => id || label?.toLocaleLowerCase().replace(/ +/g, '-') || 'medly-toggle-checkbox', [id, label]);

        return (
            <FieldWithLabel id={toggleId} fieldWithMaxContent {...{ fullWidth, labelPosition }}>
                {label && (
                    <FieldWithLabel.Label
                        showPointer={!restProps.disabled}
                        {...{ required, labelPosition, labelVariant, labelWeight, labelColor }}
                        htmlFor={toggleId}
                    >
                        {label}
                    </FieldWithLabel.Label>
                )}
                <Styled.Wrapper size={size} disabled={restProps.disabled}>
                    {
                        // @ts-ignore
                        <Styled.Checkbox ref={ref} id={label} size={size} required={required} onChange={changeHandler} {...restProps} />
                    }
                    <Styled.Circle size={size} />
                </Styled.Wrapper>
            </FieldWithLabel>
        );
    })
);

Component.displayName = 'Toggle';
Component.defaultProps = {
    label: '',
    required: false,
    labelPosition: 'right'
};
export const Toggle: FC<ToggleProps> & WithStyle = Object.assign(Component, { Style: FieldWithLabel.Style });
