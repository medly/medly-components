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
            <FieldWithLabel {...{ labelPosition }}>
                {label && <Label {...{ labelPosition }}>{label}</Label>}
                <RadioWrapperStyled {...{ size }}>
                    <RadioStyled ref={ref} required={required} {...restProps} />
                    <RadioFillStyled />
                </RadioWrapperStyled>
            </FieldWithLabel>
        );
    })
);

Radio.displayName = 'Radio';
Radio.Style = RadioWrapperStyled;
Radio.defaultProps = {
    size: 'S',
    label: '',
    labelPosition: 'end'
};

export default Radio;
