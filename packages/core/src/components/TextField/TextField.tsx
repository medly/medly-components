import { ThemeContext, useCombinedRefs, WithStyle } from '@medly-components/utils';
import React, { FC, FocusEvent, FormEvent, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { HelperAndErrorTextTooltip } from '../HelperAndErrorTextTooltip/HelperAndErrorTextTooltip';
import getMaskedValue from './getMaskedValue';
import * as Styled from './Styled';
import { TextFieldProps } from './types';

export const TextField: FC<TextFieldProps> & WithStyle = React.memo(
    React.forwardRef((props: TextFieldProps, ref) => {
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
                showDecorators,
                mask,
                placeholder,
                multiline,
                minRows,
                validator,
                className,
                withCharacterCount,
                ...restProps
            } = props,
            inputId = useMemo(() => id || 'medly-textField', [id]),
            isLabelPresent = useMemo(() => !!label, [label]),
            isPrefixPresent = useMemo(() => !!Prefix, [Prefix]),
            isSuffixPresent = useMemo(() => !!Suffix, [Suffix]),
            isErrorPresent = useMemo(() => !!errorText || !!builtInErrorMessage, [errorText, builtInErrorMessage]),
            [isTextPresent, setIsTextPresent] = useState(!!value || !!restProps.defaultValue),
            [maskLabel, setMaskLabel] = useState(mask),
            [inputWidth, setInputWidth] = useState(0),
            [characterCountValue, setCharacterCountValue] = useState(
                value ? value.toString().length : restProps.defaultValue ? restProps.defaultValue.toString().length : 0
            );

        const theme = useContext(ThemeContext);

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
                    const valueString = e.target.value ? e.target.value.toString() : '';
                    setCharacterCountValue(valueString.length);

                    if (mask) {
                        const maskedValue = getMaskedValue(e, mask);
                        e.target.value = maskedValue;
                        setMaskLabel(`${maskedValue}${mask.substr(maskedValue.length)}`);
                    }
                    props.onChange && props.onChange(e);
                },
                [mask, props.onChange]
            );

        useEffect(() => {
            setIsTextPresent(!!value);
        }, [value]);

        useEffect(() => {
            mask && value && value.toString().length === mask.length && setMaskLabel(value.toString());
        }, [value, mask]);

        useEffect(() => {
            setInputWidth(inputRef.current.offsetWidth);
        }, []);

        return (
            <Styled.OuterWrapper
                fullWidth={fullWidth}
                minWidth={minWidth}
                maxWidth={maxWidth}
                className={className}
                id={`${inputId}-input-wrapper`}
            >
                <Styled.InnerWrapper
                    size={size}
                    onClick={handleWrapperClick}
                    variant={props.variant}
                    disabled={disabled}
                    isErrorPresent={isErrorPresent}
                    isLabelPresent={isLabelPresent}
                    isTextPresent={isTextPresent}
                    minRows={minRows}
                    multiline={multiline}
                >
                    {isPrefixPresent && showDecorators && (
                        <Styled.Prefix size={size}>
                            <Prefix size={size} />
                        </Styled.Prefix>
                    )}
                    <Styled.InputWrapper multiline={multiline} size={size} variant={props.variant}>
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
                            variant={props.variant}
                            as={multiline ? 'textarea' : 'input'}
                            multiline={multiline}
                            {...{ ...restProps, size, onBlur, onInvalid, onChange }}
                        />
                        {maskLabel && (
                            <Styled.MaskPlaceholder size={size} isLabelPresent={isLabelPresent} variant={props.variant}>
                                {maskLabel}
                            </Styled.MaskPlaceholder>
                        )}
                        <Styled.Label
                            inputWidth={inputWidth}
                            htmlFor={`${inputId}-input`}
                            size={size}
                            required={required}
                            variant={props.variant}
                            multiline={multiline}
                        >
                            {label}
                        </Styled.Label>
                        {withCharacterCount && showDecorators && props.maxLength >= 0 && props.maxLength !== null && (
                            <Styled.CharacterCount
                                variant={props.variant}
                                size={size}
                                multiline={multiline}
                                characterCount={characterCountValue}
                                maxLength={props.maxLength}
                            >{`${characterCountValue}/${props.maxLength}`}</Styled.CharacterCount>
                        )}
                    </Styled.InputWrapper>
                    {props.showTooltipForHelperAndErrorText && (
                        <HelperAndErrorTextTooltip
                            idPrefix={inputId}
                            errorIconColor={theme.textField[props.variant].error.borderColor}
                            errorText={errorText || builtInErrorMessage}
                            helperText={helperText}
                        />
                    )}
                    {isSuffixPresent && showDecorators && (
                        <Styled.Suffix size={size}>
                            <Suffix size={size} />
                        </Styled.Suffix>
                    )}
                </Styled.InnerWrapper>
                {(isErrorPresent || helperText) && !props.showTooltipForHelperAndErrorText && (
                    <Styled.HelperText id={`${inputId}-helper-text`} onClick={stopPropagation} size={size} variant={props.variant}>
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
    errorText: '',
    minRows: 1,
    withCharacterCount: false,
    showDecorators: true
};
