import { WithStyle } from '@medly-components/utils';
import React, { FC, useCallback } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import * as Styled from './Toggle.styled';
import { ToggleProps } from './types';

export const Toggle: FC<ToggleProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { size, label, required, labelPosition, labelVariant, labelWeight, labelColor, fullWidth, onChange, ...restProps } = props;

        const changeHandler = useCallback(
            (e: any) => {
                e.stopPropagation();
                onChange && onChange(e);
            },
            [onChange]
        );

        return (
            <FieldWithLabel id={`${label}-checkbox`} fieldWithMaxContent {...{ fullWidth, labelPosition }}>
                {label && (
                    <FieldWithLabel.Label
                        showPointer={!restProps.disabled}
                        {...{ required, labelPosition, labelVariant, labelWeight, labelColor }}
                        htmlFor={label}
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

Toggle.displayName = 'Toggle';
Toggle.Style = FieldWithLabel.Style;
Toggle.defaultProps = {
    label: '',
    required: false,
    labelPosition: 'right'
};
