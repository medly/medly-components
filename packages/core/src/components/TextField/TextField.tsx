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
                validator,
                ...restProps
            } = props,
            inputId = useMemo(() => id || 'medly-textField', [id]),
            isLabelPresent = useMemo(() => !!label, [label]),
            isPrefixPresent = useMemo(() => !!Prefix, [Prefix]),
            isSuffixPresent = useMemo(() => !!Suffix, [Suffix]),
            isErrorPresent = useMemo(() => !!errorText || !!builtInErrorMessage, [errorText, builtInErrorMessage]);

        const validate = (event: React.FormEvent<HTMLInputElement>, eventFunc: (e: React.FormEvent<HTMLInputElement>) => void) => {
            event.preventDefault();
            const element = event.target as HTMLInputElement,
                message = (validator && validator(element.value)) || element.validationMessage;
            setErrorMessage(message);
            eventFunc && eventFunc(event);
        };

        const stopPropagation = useCallback((event: React.MouseEvent) => event.stopPropagation(), []),
            handleWrapperClick = useCallback(() => !disabled && inputRef.current.focus(), [inputRef, disabled]),
            onBlur = useCallback((event: React.FocusEvent<HTMLInputElement>) => validate(event, props.onBlur), []),
            onInvalid = useCallback((event: React.FormEvent<HTMLInputElement>) => validate(event, props.onInvalid), []);

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
                            errorText={errorText || builtInErrorMessage}
                            {...{ ...restProps, onBlur, onInvalid }}
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
    fullWidth: false,
    disabled: false,
    required: false,
    label: '',
    helperText: '',
    errorText: ''
};
