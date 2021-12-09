import { useCombinedRefs, WithStyle } from '@medly-components/utils';
import type { ChangeEvent, FC, FocusEvent, FormEvent } from 'react';
import { forwardRef, memo, useCallback, useMemo, useRef, useState } from 'react';
import Radio from '../Radio';
import { SelectorGroup } from '../Selectors';
import { RadioGroupProps } from './types';
const Component: FC<RadioGroupProps> = memo(
    forwardRef((props, ref) => {
        const {
            id,
            size,
            value,
            name,
            label,
            disabled,
            required,
            options,
            labelVariant,
            labelWeight,
            errorText,
            helperText,
            columns,
            validator,
            onChange,
            onBlur,
            onInvalid,
            ...wrapperProps
        } = props;

        const [builtInErrorMessage, setErrorMessage] = useState(''),
            radioGroupId = useMemo(() => id || name, [id, name]),
            radioGroupRef = useCombinedRefs<HTMLDivElement>(ref, useRef(null)),
            hasError = useMemo(() => !!errorText || !!builtInErrorMessage, [errorText, builtInErrorMessage]),
            hasHelperOrErrorText = useMemo(() => !!(errorText || helperText), [errorText, helperText]);

        const validate = useCallback(
            (selectedValue: string, validationMessage?: string) =>
                setErrorMessage((validator && validator(selectedValue)) || validationMessage || ''),
            [validator]
        );

        const handleOnInvalid = useCallback(
                (event: FormEvent<HTMLInputElement>) => {
                    validate(value || '', (event.target as HTMLInputElement).validationMessage);
                    onInvalid && onInvalid(event);
                },
                [validate, onInvalid, value]
            ),
            handleOnBlur = useCallback(
                (event: FocusEvent<HTMLDivElement>) => {
                    const { currentTarget } = event,
                        target = event.target as HTMLInputElement;
                    setTimeout(() => !currentTarget.contains(document.activeElement) && validate(value || '', target.validationMessage), 0);
                    onBlur && onBlur(event);
                },
                [validate, onBlur, value]
            ),
            handleOnChange = useCallback(
                (event: ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target;
                    validate(value);
                    onChange && onChange(value);
                },
                [validate]
            );

        return (
            <SelectorGroup.Wrapper
                id={`${radioGroupId}-wrapper`}
                ref={radioGroupRef}
                type="radio"
                aria-describedby={`${radioGroupId}-helper-text`}
                onBlur={handleOnBlur}
                onInvalid={handleOnInvalid}
                {...{ ...wrapperProps, hasHelperOrErrorText }}
            >
                {label && (
                    <SelectorGroup.Label
                        type="radio"
                        hasError={hasError}
                        id={`${radioGroupId}-label`}
                        textVariant={labelVariant}
                        textWeight={labelWeight}
                        {...{ required, disabled }}
                    >
                        {label}
                    </SelectorGroup.Label>
                )}
                {(hasError || helperText) && (
                    <SelectorGroup.HelperText id={`${radioGroupId}-helper-text`} type="radio" {...{ disabled, hasError }}>
                        {errorText || builtInErrorMessage || helperText}
                    </SelectorGroup.HelperText>
                )}
                <SelectorGroup.Options id={`${radioGroupId}-options`} columns={columns}>
                    {options.map(option => (
                        <Radio
                            id={`${option.label}-${radioGroupId}`}
                            key={option.value}
                            onChange={handleOnChange}
                            checked={option.value === value}
                            {...{ ...option, disabled: disabled || option.disabled, name, size, required, hasError }}
                        />
                    ))}
                </SelectorGroup.Options>
            </SelectorGroup.Wrapper>
        );
    })
);

Component.displayName = 'RadioGroup';
Component.defaultProps = {
    columns: 1,
    fullWidth: true,
    labelWeight: 'Medium',
    labelVariant: 'body1'
};
export const RadioGroup: FC<RadioGroupProps> & WithStyle = Object.assign(Component, { Style: SelectorGroup.Wrapper });
