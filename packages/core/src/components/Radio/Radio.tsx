import { WithStyle } from '@medly-components/utils';
import React from 'react';
import FieldWithLabel from '../FieldWithLabel';
import Label from '../Label';
import { RadioFillStyled, RadioStyled, RadioWrapperStyled } from './Radio.styled';
import { Props } from './types';

const Radio: React.SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { size, label, required, labelPosition, ...restProps } = props;
        return (
            <FieldWithLabel fieldWithMaxContent {...{ labelPosition }}>
                {label && (
                    <FieldWithLabel.Label showPointer {...{ labelPosition }} htmlFor={label}>
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
    labelPosition: 'right'
};

export default Radio;
