import React, { FC } from 'react';
import * as TextFieldStyled from '../../TextField/Styled';
import { Props } from './types';

export const DateRangeInput: FC<Props> = React.memo(props => {
    const {
        inputRef,
        id,
        aria,
        value,
        name,
        isPrefixPresent,
        commonTextProps,
        size,
        isLabelPresent,
        variant,
        dateMaskLabel,
        required,
        label
    } = props;
    return (
        <TextFieldStyled.InputWrapper>
            <TextFieldStyled.Input
                ref={inputRef}
                id={id}
                aria-describedby={aria}
                value={value}
                name={name} // "START_DATE"
                isPrefixPresent={isPrefixPresent}
                {...commonTextProps}
            />
            <TextFieldStyled.MaskPlaceholder size={size} isLabelPresent={isLabelPresent} variant={variant}>
                {dateMaskLabel}
            </TextFieldStyled.MaskPlaceholder>
            <TextFieldStyled.Label htmlFor={id} size={size} variant={variant} required={required}>
                {label}
            </TextFieldStyled.Label>
        </TextFieldStyled.InputWrapper>
    );
});
DateRangeInput.displayName = 'DateRangeInput';
