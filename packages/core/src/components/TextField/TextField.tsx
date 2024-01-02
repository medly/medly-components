import { useCombinedRefs, WithStyle } from '@medly-components/utils';
import type { ChangeEvent, FC, FocusEvent } from 'react';
import { forwardRef, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { HelperAndErrorTextTooltip } from '../HelperAndErrorTextTooltip/HelperAndErrorTextTooltip';
import getMaskedValue from './getMaskedValue';
import * as Styled from './Styled';
import { TextFieldProps } from './types';

const Component: FC<TextFieldProps> = memo(
    forwardRef((props, ref) => {
        const [builtInErrorMessage, setErrorMessage] = useState(''),
            inputRef = useCombinedRefs<HTMLInputElement>(ref, useRef(null));

        const {
                id,
                value,
                size = 'M',
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
            displayCharacterCount = useMemo(
                () => !!(withCharacterCount && showDecorators && props.maxLength && props.maxLength >= 0),
                [withCharacterCount, showDecorators, props.maxLength]
            ),
            [isTextPresent, setIsTextPresent] = useState(!!value || !!restProps.defaultValue),
            [isActive, setIsActive] = useState(false),
            [maskLabel, setMaskLabel] = useState(mask),
            [inputWidth, setInputWidth] = useState(0),
            [characterCountValue, setCharacterCountValue] = useState(
                value ? value.toString().length : restProps.defaultValue ? restProps.defaultValue.toString().length : 0
            );

        const validate = useCallback(
            (event: ChangeEvent<HTMLInputElement>, eventFunc?: (e: any) => void) => {
                event.preventDefault();
                const element = event.target as HTMLInputElement,
                    validatorMessage = (validator && validator(element.value, event)) || '',
                    message = validator ? validatorMessage : element.validationMessage;
                setErrorMessage(message);
                validator && inputRef.current?.setCustomValidity(validatorMessage);
                eventFunc && eventFunc(event);
            },
            [validator, builtInErrorMessage]
        );

        const stopPropagation = useCallback((event: React.MouseEvent) => event.stopPropagation(), []),
            handleWrapperClick = useCallback(() => !disabled && inputRef.current?.focus(), [inputRef, disabled]),
            onBlur = useCallback(
                (event: ChangeEvent<HTMLInputElement>) => {
                    setIsActive(false);
                    validate(event, props.onBlur);
                },
                [validate, props.onBlur]
            ),
            onFocus = useCallback(
                (event: FocusEvent<HTMLInputElement>) => {
                    setIsActive(true);
                    props.onFocus?.(event);
                },
                [props.onFocus]
            ),
            onInvalid = useCallback(
                (event: ChangeEvent<HTMLInputElement>) => validate(event, props.onInvalid),
                [validate, props.onInvalid]
            ),
            onChange = useCallback(
                (e: ChangeEvent<HTMLInputElement>) => {
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
            inputRef.current?.offsetWidth && setInputWidth(inputRef.current.offsetWidth);
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
                    size={size!}
                    onClick={handleWrapperClick}
                    variant={props.variant!}
                    disabled={disabled}
                    isErrorPresent={isErrorPresent}
                    isLabelPresent={isLabelPresent}
                    isTextPresent={isTextPresent}
                    minRows={minRows}
                    multiline={multiline}
                >
                    {!!Prefix && showDecorators && (
                        <Styled.IconWrapper
                            size={size}
                            disabled={disabled}
                            variant={props.variant!}
                            isActive={isActive}
                            isErrorPresent={isErrorPresent}
                        >
                            <Prefix size={size} />
                        </Styled.IconWrapper>
                    )}
                    <Styled.InputWrapper multiline={multiline} size={size!} variant={props.variant!}>
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
                            inputSize={size!}
                            variant={props.variant!}
                            as={multiline ? 'textarea' : 'input'}
                            multiline={multiline}
                            {...{ ...restProps, onBlur, onFocus, onInvalid, onChange }}
                        />
                        {maskLabel && (
                            <Styled.MaskPlaceholder size={size} isLabelPresent={isLabelPresent} variant={props.variant}>
                                {maskLabel}
                            </Styled.MaskPlaceholder>
                        )}
                        <Styled.Label
                            inputWidth={inputWidth}
                            htmlFor={`${inputId}-input`}
                            size={size!}
                            required={!!required}
                            variant={props.variant!}
                            multiline={multiline}
                        >
                            {label}
                        </Styled.Label>
                        {displayCharacterCount && props.maxLength && (
                            <Styled.CharacterCount
                                variant={props.variant!}
                                size={size!}
                                multiline={multiline}
                                characterCount={characterCountValue}
                                maxLength={props.maxLength}
                                showTooltipForHelperAndErrorText={!!props.showTooltipForHelperAndErrorText}
                            >{`${characterCountValue}/${props.maxLength}`}</Styled.CharacterCount>
                        )}
                    </Styled.InputWrapper>
                    {props.showTooltipForHelperAndErrorText && (
                        <Styled.HelperAndErrorTextTooltipWrapper
                            size={size}
                            displayCharacterCount={displayCharacterCount}
                            isSuffixPresent={isSuffixPresent}
                        >
                            <HelperAndErrorTextTooltip id={inputId} errorText={errorText || builtInErrorMessage} helperText={helperText} />
                        </Styled.HelperAndErrorTextTooltipWrapper>
                    )}
                    {!!Suffix && showDecorators && (
                        <Styled.IconWrapper
                            size={size}
                            disabled={disabled}
                            variant={props.variant!}
                            isActive={isActive}
                            isErrorPresent={isErrorPresent}
                        >
                            <Suffix size={size} />
                        </Styled.IconWrapper>
                    )}
                </Styled.InnerWrapper>
                {(isErrorPresent || helperText) && !props.showTooltipForHelperAndErrorText && (
                    <Styled.HelperText id={`${inputId}-helper-text`} onClick={stopPropagation} size={size!} variant={props.variant!}>
                        {(errorText || builtInErrorMessage || helperText || '').trim()}
                    </Styled.HelperText>
                )}
            </Styled.OuterWrapper>
        );
    })
);
Component.displayName = 'TextField';
Component.defaultProps = {
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
    showDecorators: true,
    showTooltipForHelperAndErrorText: false
};
export const TextField: FC<TextFieldProps> & WithStyle = Object.assign(Component, { Style: Styled.OuterWrapper });
