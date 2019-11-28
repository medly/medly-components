import { CheckIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import { CheckboxFillStyled, CheckboxStyled, CheckboxWrapperStyled } from './Checkbox.styled';
import { Props } from './types';

export const Checkbox: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { size, label, required, labelPosition, labelSize, labelWeight, labelColor, fullWidth, onChange, ...restProps } = props;

        const changeHandler = (e: any) => {
            // @ts-ignore
            onChange && onChange(e);
        };

        return (
            <FieldWithLabel fieldWithMaxContent {...{ fullWidth, labelPosition }}>
                {label && (
                    <FieldWithLabel.Label
                        showPointer={!restProps.disabled}
                        {...{ required, labelPosition, labelSize, labelWeight, labelColor }}
                        htmlFor={label}
                    >
                        {label}
                    </FieldWithLabel.Label>
                )}
                <CheckboxWrapperStyled size={size} disabled={restProps.disabled}>
                    <CheckboxStyled ref={ref} id={label} required={required} onChange={changeHandler} {...restProps} />
                    <CheckboxFillStyled>
                        <CheckIcon onClick={changeHandler} />
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
    required: false,
    labelPosition: 'right'
};
