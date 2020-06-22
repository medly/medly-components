import { useCombinedRefs, WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useMemo, useState } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import Radio from '../Radio';
import { SelectorGroup } from '../Selectors';
import { Props } from './types';

export const RadioGroup: FC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const {
            id,
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
            onInvalid,
            ...wrapperProps
        } = props;

        const [builtInErrorMessage, setErrorMessage] = useState('');

        const radioGroupId = useMemo(() => id || name, [id, name]),
            radioGroupRef = useCombinedRefs<HTMLDivElement>(ref, React.useRef(null)),
            hasError = useMemo(() => !!errorText || !!builtInErrorMessage, [errorText, builtInErrorMessage]),
            hasHelperOrErrorText = useMemo(() => !!(errorText || helperText), [errorText, helperText]);

        const handleOnInvalid = useCallback(
                (event: React.FormEvent<HTMLInputElement>) => {
                    event.preventDefault();
                    const element = event.target as HTMLInputElement,
                        message = (validator && validator(value)) || element.validationMessage;
                    setErrorMessage(message);
                    onInvalid && onInvalid(event);
                },
                [value, validator, onInvalid]
            ),
            handleOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
                const value = event.target.value;
                onChange && onChange(value);
            }, []);

        return (
            <SelectorGroup.Wrapper
                id={`${radioGroupId}-wrapper`}
                ref={radioGroupRef}
                type="radio"
                aria-describedby={`${radioGroupId}-helper-text`}
                {...{ ...wrapperProps, disabled, required, hasHelperOrErrorText }}
            >
                {label && (
                    <SelectorGroup.Label
                        id={`${radioGroupId}-label`}
                        type="radio"
                        required={required}
                        disabled={disabled}
                        textVariant={labelVariant}
                        textWeight={labelWeight}
                    >
                        {label}
                    </SelectorGroup.Label>
                )}
                {(hasError || helperText) && (
                    <SelectorGroup.HelperText id={`${radioGroupId}-helper-text`} type="radio" disabled={disabled} hasError={hasError}>
                        {errorText || builtInErrorMessage || helperText}
                    </SelectorGroup.HelperText>
                )}
                <SelectorGroup.Options id={`${radioGroupId}-options`} columns={columns}>
                    {options.map(option => (
                        <Radio
                            id={`${option.label}-${radioGroupId}`}
                            key={option.value}
                            name={name}
                            required={required}
                            hasError={hasError}
                            onChange={handleOnChange}
                            onInvalid={handleOnInvalid}
                            checked={option.value === value}
                            {...{ ...option, disabled: disabled || option.disabled }}
                        />
                    ))}
                </SelectorGroup.Options>
            </SelectorGroup.Wrapper>
        );
    })
);

RadioGroup.displayName = 'RadioGroup';
RadioGroup.Style = FieldWithLabel.Style;
RadioGroup.defaultProps = {
    label: '',
    name: '',
    fullWidth: true,
    labelWeight: 'Medium',
    labelVariant: 'body1'
};
