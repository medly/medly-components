import { useCombinedRefs, WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback, useMemo, useState } from 'react';
import * as Styled from './Styled';
import { Props } from './types';

export const TextField: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props: Props, ref) => {
        const [builtInErrorMessage, setErrorMessage] = useState(''),
            inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null));

        const {
                id,
                label,
                minWidth,
                fullWidth,
                errorText,
                helperText,
                prefix: Prefix,
                suffix: Suffix,
                required,
                disabled,
                placeholder,
                ...restProps
            } = props,
            inputId = id || 'medly-textField',
            isLabelPresent = !!label,
            isPrefixPresent = !!Prefix,
            isSuffixPresent = !!Suffix,
            isErrorPresent = !!errorText || !!builtInErrorMessage;

        const stopPropagation = useCallback((event: React.MouseEvent) => event.stopPropagation(), []),
            handleWrapperClick = useCallback(() => {
                !disabled && inputRef.current.focus();
            }, [inputRef, disabled]),
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
                    errorText: errorText || builtInErrorMessage
                }),
                [onBlur, onInvalid, errorText, builtInErrorMessage]
            );

        console.log('========>', restProps.value);

        return (
            <Styled.OuterWrapper fullWidth={fullWidth} minWidth={minWidth}>
                <Styled.InnerWrapper
                    onClick={handleWrapperClick}
                    variant={props.variant}
                    disabled={disabled}
                    isErrorPresent={isErrorPresent}
                    isLabelPresent={isLabelPresent}
                >
                    {isPrefixPresent && (
                        <Styled.Prefix>
                            <Prefix />
                        </Styled.Prefix>
                    )}
                    <Styled.InputWrapper>
                        <Styled.Input
                            ref={inputRef}
                            id={`${inputId}-input`}
                            aria-describedby={`${inputId}-helper-text`}
                            required={required}
                            disabled={disabled}
                            placeholder={placeholder || ' '}
                            isPrefixPresent={isPrefixPresent}
                            isSuffixPresent={isSuffixPresent}
                            isLabelPresent={isLabelPresent}
                            {...{ ...restProps, ...(props.withBuiltInValidation && builtInFormValidators) }}
                        />
                        <Styled.Label htmlFor={`${inputId}-input`} required={required} variant={props.variant}>
                            {label}
                        </Styled.Label>
                    </Styled.InputWrapper>
                    {isSuffixPresent && (
                        <Styled.Suffix>
                            <Suffix />
                        </Styled.Suffix>
                    )}
                </Styled.InnerWrapper>
                {(isErrorPresent || helperText) && (
                    <Styled.HelperText id={`${inputId}-helper-text`} onClick={stopPropagation}>
                        {errorText || builtInErrorMessage || helperText}
                    </Styled.HelperText>
                )}
            </Styled.OuterWrapper>
        );
    })
);
TextField.displayName = 'TextField';
TextField.Style = Styled.OuterWrapper;
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
