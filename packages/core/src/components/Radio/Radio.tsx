import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import { RadioFillStyled, RadioStyled, RadioWrapperStyled } from './Radio.styled';
import { Props } from './types';

export const Radio: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { size, label, required, labelPosition, labelVariant, labelWeight, fullWidth, labelColor, ...restProps } = props;
        return (
            <FieldWithLabel id={`${label}-radio`} fieldWithMaxContent {...{ fullWidth, labelPosition }}>
                {label && (
                    <FieldWithLabel.Label
                        showPointer={!restProps.disabled}
                        {...{ labelPosition, labelVariant, labelWeight, labelColor }}
                        htmlFor={label}
                    >
                        {label}
                    </FieldWithLabel.Label>
                )}
                <RadioWrapperStyled size={size} disabled={restProps.disabled}>
                    <RadioStyled ref={ref} id={label} required={required} {...restProps} />
                    <RadioFillStyled />
                </RadioWrapperStyled>
            </FieldWithLabel>
        );
    })
);

Radio.displayName = 'Radio';
Radio.Style = RadioWrapperStyled;
Radio.defaultProps = {
    label: '',
    required: false,
    labelPosition: 'right'
};
