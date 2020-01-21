import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import { InputStyled } from './Input.styled';
import { Props } from './types';

export const Input: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { description, label, labelPosition, fullWidth, required, descriptionColor } = props,
            id = props.id || 'medly-input';
        return (
            <FieldWithLabel id={`${id}-field`} {...{ fullWidth, labelPosition }}>
                {label && (
                    <FieldWithLabel.Label htmlFor={id} {...{ required, labelPosition }}>
                        {label}
                    </FieldWithLabel.Label>
                )}
                <InputStyled id={id} ref={ref} {...props} />
                {description && <FieldWithLabel.Description textColor={descriptionColor}>{description}</FieldWithLabel.Description>}
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
