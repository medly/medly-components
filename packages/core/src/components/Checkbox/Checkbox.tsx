import { CheckIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import FieldWithLabel from '../FieldWithLabel';
import { CheckboxFillStyled, CheckboxStyled, CheckboxWrapperStyled } from './Checkbox.styled';
import { Props } from './types';

const Checkbox: React.SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { size, label, required, labelPosition, labelSize, labelWeight, labelColor, ...restProps } = props;
        return (
            <FieldWithLabel fieldWithMaxContent {...{ labelPosition }}>
                {label && (
                    <FieldWithLabel.Label showPointer {...{ required, labelPosition, labelSize, labelWeight, labelColor }} htmlFor={label}>
                        {label}
                    </FieldWithLabel.Label>
                )}
                <CheckboxWrapperStyled size={size} disabled={restProps.disabled}>
                    <CheckboxStyled ref={ref} id={label} required={required} {...restProps} />
                    <CheckboxFillStyled>
                        <CheckIcon />
                    </CheckboxFillStyled>
                </CheckboxWrapperStyled>
            </FieldWithLabel>
        );
    })
);

Checkbox.displayName = 'Checkbox';
Checkbox.Style = FieldWithLabel.Style;
Checkbox.defaultProps = {
    label: '',
    labelPosition: 'right'
};

export default Checkbox;
