import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import { InputStyled } from './Input.styled';
import { Props } from './types';

export const Input: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { id, description, label, labelPosition, fullWidth, required } = props;
        return (
            <FieldWithLabel {...{ fullWidth, labelPosition }}>
                {label && (
                    <FieldWithLabel.Label htmlFor={id || 'input'} {...{ required, labelPosition }}>
                        {label}
                    </FieldWithLabel.Label>
                )}
                <InputStyled id={id || 'input'} ref={ref} {...props} />
                {description && <FieldWithLabel.Description>{description}</FieldWithLabel.Description>}
            </FieldWithLabel>
        );
    })
);

Input.displayName = 'Input';
Input.Style = InputStyled;
Input.defaultProps = {
    disabled: false,
    fullWidth: false,
    required: false,
    label: '',
    labelPosition: 'top',
    description: ''
};
