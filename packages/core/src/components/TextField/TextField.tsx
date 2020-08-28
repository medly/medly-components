import { useCombinedRefs, WithStyle } from '@medly-components/utils';
import React, { FC, FocusEvent, FormEvent, useCallback, useMemo, useState } from 'react';
import * as Styled from './Styled';
import { Props } from './types';

export const TextField: FC<Props> & WithStyle = React.memo(
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

        const validate = useCallback(
            (event: FormEvent<HTMLInputElement>, eventFunc: (e: FormEvent<HTMLInputElement>) => void) => {
                event.preventDefault();
                const element = event.target as HTMLInputElement,
                    validatorMessage = (validator && validator(element.value, event.type)) || '',
                    message = validator ? validatorMessage : element.validationMessage;
                setErrorMessage(message);
                validator && inputRef.current.setCustomValidity(validatorMessage);
                eventFunc && eventFunc(event);
            },
            [validator, builtInErrorMessage]
        );

        const stopPropagation = useCallback((event: React.MouseEvent) => event.stopPropagation(), []),
            handleWrapperClick = useCallback(() => !disabled && inputRef.current.focus(), [inputRef, disabled]),
            onBlur = useCallback((event: FocusEvent<HTMLInputElement>) => validate(event, props.onBlur), [validate, props.onBlur]),
            onInvalid = useCallback((event: FormEvent<HTMLInputElement>) => validate(event, props.onInvalid), [validate, props.onInvalid]);

        return (
            <Styled.OuterWrapper fullWidth={fullWidth} minWidth={minWidth} id={`${inputId}-input-wrapper`}>
                <Styled.InnerWrapper
                    onClick={handleWrapperClick}
                    variant={props.variant}
                    disabled={disabled}
                    size={restProps.size}
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
                        <Styled.Label htmlFor={`${inputId}-input`} size={restProps.size} required={required} variant={props.variant}>
                            {label}
                        </Styled.Label>
                    </Styled.InputWrapper>
                    {isSuffixPresent && (
                        <Styled.Suffix size={restProps.size}>
                            <Suffix />
                        </Styled.Suffix>
                    )}
                </Styled.InnerWrapper>
                {(isErrorPresent || helperText) && (
                    <Styled.HelperText id={`${inputId}-helper-text`} onClick={stopPropagation} size={restProps.size}>
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
    size: 'M',
    type: 'text',
    variant: 'filled',
    fullWidth: false,
    disabled: false,
    required: false,
    label: '',
    helperText: '',
    errorText: ''
};
