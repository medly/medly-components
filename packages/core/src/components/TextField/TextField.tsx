import { WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback, useMemo, useState } from 'react';
import * as Styled from './Styled';
import { Props } from './types';

export const TextField: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props: Props, ref) => {
        const [builtInErrorMessage, setErrorMessage] = useState('');

        const { id, label, minWidth, fullWidth, helperText, prefix: Prefix, suffix: Suffix, required, placeholder, ...restProps } = props,
            inputId = id || 'medly-textField',
            isLabelPresent = !!label,
            isPrefixPresent = !!Prefix,
            isSuffixPresent = !!Suffix;

        const stopPropagation = useCallback((event: React.MouseEvent) => event.stopPropagation(), []),
            onBlur = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
                setErrorMessage((event.target as HTMLInputElement).validationMessage);
                props.onBlur && props.onBlur(event);
            }, []),
            onInvalid = useCallback((event: React.FormEvent<HTMLInputElement>) => {
                event.preventDefault();
                setErrorMessage((event.target as HTMLInputElement).validationMessage);
                props.onInvalid && props.onInvalid(event);
            }, []),
            builtInFormValidators = useMemo(
                () => ({
                    onBlur,
                    onInvalid,
                    errorText: props.errorText || builtInErrorMessage
                }),
                [onBlur, onInvalid, props.errorText, builtInErrorMessage]
            );
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
                    {...{ ...restProps, ...(props.withBuiltInValidation && builtInFormValidators) }}
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
                {(restProps.errorText || builtInErrorMessage || helperText) && (
                    <Styled.HelperText id={`${inputId}-helper-text`} onClick={stopPropagation}>
                        {restProps.errorText || builtInErrorMessage || helperText}
                    </Styled.HelperText>
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
