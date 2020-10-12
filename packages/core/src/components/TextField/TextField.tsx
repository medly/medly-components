import { useCombinedRefs, WithStyle } from '@medly-components/utils';
import React, { FC, FocusEvent, FormEvent, useCallback, useEffect, useMemo, useState } from 'react';
import getMaskedValue from './getMaskedValue';
import * as Styled from './Styled';
import { Props } from './types';

export const TextField: FC<Props> & WithStyle = React.memo(
    React.forwardRef((props: Props, ref) => {
        const [builtInErrorMessage, setErrorMessage] = useState(''),
            inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null));

        const {
                id,
                value,
                size,
                label,
                minWidth,
                maxWidth,
                fullWidth,
                errorText,
                helperText,
                prefix: Prefix,
                suffix: Suffix,
                required,
                disabled,
                mask,
                placeholder,
                multiline,
                minRows,
                validator,
                ...restProps
            } = props,
            inputId = useMemo(() => id || 'medly-textField', [id]),
            isLabelPresent = useMemo(() => !!label, [label]),
            isPrefixPresent = useMemo(() => !!Prefix, [Prefix]),
            isSuffixPresent = useMemo(() => !!Suffix, [Suffix]),
            isErrorPresent = useMemo(() => !!errorText || !!builtInErrorMessage, [errorText, builtInErrorMessage]),
            [maskLabel, setMaskLabel] = useState(mask);

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
            onInvalid = useCallback((event: FormEvent<HTMLInputElement>) => validate(event, props.onInvalid), [validate, props.onInvalid]),
            onChange = useCallback(
                (e: React.ChangeEvent<HTMLInputElement>) => {
                    if (mask) {
                        const maskedValue = getMaskedValue(e, mask);
                        e.target.value = maskedValue;
                        setMaskLabel(`${maskedValue}${mask.substr(maskedValue.length)}`);
                    }
                    props.onChange && props.onChange(e);
                },
                [mask]
            );

        useEffect(() => {
            mask && value && value.toString().length === mask.length && setMaskLabel(value.toString());
        }, [value, mask]);

        return (
            <Styled.OuterWrapper fullWidth={fullWidth} minWidth={minWidth} maxWidth={maxWidth} id={`${inputId}-input-wrapper`}>
                <Styled.InnerWrapper
                    size={size}
                    onClick={handleWrapperClick}
                    variant={props.variant}
                    disabled={disabled}
                    isErrorPresent={isErrorPresent}
                    isLabelPresent={isLabelPresent}
                    minRows={minRows}
                    multiline={multiline}
                >
                    {isPrefixPresent && (
                        <Styled.Prefix size={size}>
                            <Prefix size={size} />
                        </Styled.Prefix>
                    )}
                    <Styled.InputWrapper multiline={multiline}>
                        <Styled.Input
                            ref={inputRef}
                            value={value}
                            id={`${inputId}-input`}
                            aria-describedby={`${inputId}-helper-text`}
                            required={required}
                            disabled={disabled}
                            placeholder={mask || placeholder || ' '}
                            isPrefixPresent={isPrefixPresent}
                            isSuffixPresent={isSuffixPresent}
                            isLabelPresent={isLabelPresent}
                            errorText={errorText || builtInErrorMessage}
                            as={multiline ? 'textarea' : 'input'}
                            multiline={multiline}
                            {...{ ...restProps, size, onBlur, onInvalid, onChange }}
                        />
                        {maskLabel && (
                            <Styled.MaskPlaceholder size={size} isLabelPresent={isLabelPresent} variant={props.variant}>
                                {maskLabel}
                            </Styled.MaskPlaceholder>
                        )}
                        <Styled.Label htmlFor={`${inputId}-input`} size={size} required={required} variant={props.variant}>
                            {label}
                        </Styled.Label>
                    </Styled.InputWrapper>
                    {isSuffixPresent && (
                        <Styled.Suffix size={size}>
                            <Suffix size={size} />
                        </Styled.Suffix>
                    )}
                </Styled.InnerWrapper>
                {(isErrorPresent || helperText) && (
                    <Styled.HelperText id={`${inputId}-helper-text`} onClick={stopPropagation} size={size}>
                        {(errorText || builtInErrorMessage || helperText).trim()}
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
    minWidth: '20rem',
    fullWidth: false,
    disabled: false,
    required: false,
    label: '',
    helperText: '',
    errorText: ''
};
