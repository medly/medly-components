import React, { FC } from 'react';
import * as TextFieldStyled from '../../TextField/Styled';
import { Props } from './types';

export const DateRangeInput: FC<Props> = React.memo(
    React.forwardRef((props: Props, ref) => {
        const { id, value, name, isPrefixPresent, size, variant, dateMaskLabel, required, label, ...restProps } = props;
        return (
            <TextFieldStyled.InputWrapper>
                <TextFieldStyled.Input ref={ref} id={id} value={value} name={name} isPrefixPresent={isPrefixPresent} {...restProps} />
                <TextFieldStyled.MaskPlaceholder size={size} isLabelPresent variant={variant}>
                    {dateMaskLabel}
                </TextFieldStyled.MaskPlaceholder>
                <TextFieldStyled.Label htmlFor={id} size={size} variant={variant} required={required}>
                    {label}
                </TextFieldStyled.Label>
            </TextFieldStyled.InputWrapper>
        );
    })
);
DateRangeInput.displayName = 'DateRangeInput';
