import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import * as Styled from './Styled';
import { Props } from './types';

export const TextField: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props: Props, ref) => {
        const { id, label, minWidth, fullWidth, helperText, prefix: Prefix, suffix: Suffix, required, placeholder, ...restProps } = props,
            inputId = id || 'medly-textField',
            isLabelPresent = !!label,
            isPrefixPresent = !!Prefix,
            isSuffixPresent = !!Suffix;

        return (
            <Styled.Wrapper fullWidth={fullWidth} minWidth={minWidth}>
                <Styled.Input
                    ref={ref}
                    id={`${inputId}-input`}
                    aria-describedby={`${inputId}-helper-text`}
                    required={required}
                    placeholder={placeholder || ' '}
                    isPrefixPresent={isPrefixPresent}
                    isSuffixPresent={isSuffixPresent}
                    isLabelPresent={isLabelPresent}
                    fullWidth={fullWidth}
                    {...restProps}
                />
                <Styled.Label htmlFor={`${inputId}-input`} required={required} isPrefixPresent={isPrefixPresent}>
                    {label}
                </Styled.Label>
                {isPrefixPresent && (
                    <Styled.Prefix>
                        <Prefix />
                    </Styled.Prefix>
                )}
                {isSuffixPresent && (
                    <Styled.Suffix>
                        <Suffix />
                    </Styled.Suffix>
                )}
                {(restProps.errorText || helperText) && (
                    <Styled.HelperText id={`${inputId}-helper-text`}>{restProps.errorText || helperText}</Styled.HelperText>
                )}
            </Styled.Wrapper>
        );
    })
);
TextField.displayName = 'TextField';
TextField.Style = Styled.Wrapper;
TextField.defaultProps = {
    type: 'text',
    variant: 'filled',
    withBuiltInValidation: false,
    fullWidth: false,
    disabled: false,
    required: false,
    label: '',
    helperText: '',
    errorText: ''
};
