import { CheckIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import * as Styled from './Checkbox.styled';
import { Props } from './types';

export const Checkbox: SFC<Props> & WithStyle = React.memo(
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
                    <Styled.Checkbox ref={ref} id={label} required={required} onChange={changeHandler} {...restProps} />
                    <CheckIcon onClick={changeHandler} />
                </Styled.Wrapper>
            </FieldWithLabel>
        );
    })
);

Checkbox.displayName = 'Checkbox';
Checkbox.Style = FieldWithLabel.Style;
Checkbox.defaultProps = {
    label: '',
    required: false,
    labelPosition: 'right'
};
