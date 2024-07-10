import { CheckIcon, MinimizeIcon } from '@medly-components/icons';
import { WithStyle, isValidStringOrNumber, useCombinedRefs, useKeyPress } from '@medly-components/utils';
import { ChangeEvent, FC, FocusEvent, forwardRef, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { SelectorLabel } from '../Selectors';
import * as Styled from './Checkbox.styled';
import { CheckboxProps } from './types';

const Component: FC<CheckboxProps> = memo(
    forwardRef((props, ref) => {
        const {
            id,
            size,
            fullWidth,
            label,
            labelPosition,
            labelVariant,
            labelWeight,
            indeterminate,
            validator,
            hasError,
            errorText,
            className,
            isHovered,
            onSelectionFromKeyboard,
            ...inputProps
        } = props;

        const [builtInErrorMessage, setErrorMessage] = useState(''),
            isSelectionKeyPressed = useKeyPress(' '),
            inputId = useMemo(() => id || label, [id, label]),
            inputRef = useCombinedRefs<HTMLInputElement>(ref, useRef(null)),
            isActive = useMemo(
                () => inputProps.checked || inputProps.defaultChecked || indeterminate,
                [inputProps.checked, inputProps.defaultChecked, indeterminate]
            ),
            isErrorPresent = useMemo(() => !!errorText || hasError || !!builtInErrorMessage, [errorText, hasError, builtInErrorMessage]);

        const validate = useCallback(
                (event: ChangeEvent<HTMLInputElement>, eventFunc?: any, preventDefault = true) => {
                    preventDefault && event.preventDefault();
                    const element = event.target as HTMLInputElement,
                        message = (validator && validator(element.checked, event)) || element.validationMessage;
                    setErrorMessage(message);
                    eventFunc && eventFunc(event);
                },
                [validator]
            ),
            onBlur = useCallback((event: FocusEvent<HTMLInputElement>) => validate(event, props.onBlur), [validate, props.onBlur]),
            onInvalid = useCallback(
                (event: ChangeEvent<HTMLInputElement>) => validate(event, props.onInvalid),
                [validate, props.onInvalid]
            ),
            onChange = useCallback(
                (event: ChangeEvent<HTMLInputElement>) => {
                    validate(event, props.onChange, false);
                    !event.target.checked && event.target.blur();
                },
                [validate, props.onChange]
            );

        useEffect(() => {
            isHovered &&
                inputRef.current?.scrollIntoView({
                    block: 'nearest',
                    behavior: 'smooth'
                });
        }, [isHovered]);

        useEffect(() => {
            if (isHovered && isSelectionKeyPressed && onSelectionFromKeyboard) {
                onSelectionFromKeyboard(!inputRef.current?.checked);
            }
        }, [isHovered, isSelectionKeyPressed]);

        return (
            <>
                {(!!errorText || builtInErrorMessage) && (
                    <Styled.ErrorText disabled={inputProps.disabled}>{errorText || builtInErrorMessage}</Styled.ErrorText>
                )}
                <Styled.CheckboxWithLabelWrapper
                    className={className}
                    id={`${inputId}-wrapper`}
                    htmlFor={inputId}
                    isActive={isActive}
                    isHovered={isHovered}
                    hasError={isErrorPresent}
                    disabled={inputProps.disabled}
                    {...{ fullWidth, labelPosition }}
                >
                    {label &&
                        (isValidStringOrNumber(label) ? (
                            <SelectorLabel
                                id={`${inputId}-label`}
                                type="checkbox"
                                disabled={inputProps.disabled}
                                hasError={isErrorPresent}
                                labelPosition={labelPosition}
                                textVariant={labelVariant}
                                textWeight={labelWeight}
                                required={inputProps.required}
                            >
                                {label}
                            </SelectorLabel>
                        ) : (
                            label
                        ))}
                    <Styled.CheckboxWrapper size={size!}>
                        <Styled.HiddenCheckbox
                            ref={inputRef}
                            id={inputId}
                            indeterminate={indeterminate}
                            hasError={isErrorPresent}
                            {...{ ...inputProps, onBlur, onInvalid, onChange }}
                        />
                        <Styled.StyledCheckbox>{indeterminate ? <MinimizeIcon /> : <CheckIcon />}</Styled.StyledCheckbox>
                    </Styled.CheckboxWrapper>
                </Styled.CheckboxWithLabelWrapper>
            </>
        );
    })
);

Component.displayName = 'Checkbox';
Component.defaultProps = { size: 'S', label: '', labelPosition: 'right' };
export const Checkbox: FC<CheckboxProps> & WithStyle = Object.assign(Component, { Style: Styled.CheckboxWithLabelWrapper });
