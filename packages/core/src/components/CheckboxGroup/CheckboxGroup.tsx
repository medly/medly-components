import { useCombinedRefs, useKeyPress, WithStyle } from '@medly-components/utils';
import { ChangeEvent, FC, FocusEvent, forwardRef, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Checkbox from '../Checkbox';
import { SelectorGroup } from '../Selectors';
import getValuesFromOptions from './getValuesFromOptions';
import { CheckboxGroupProps } from './types';

const Component: FC<CheckboxGroupProps> = memo(
    forwardRef((props, ref) => {
        const {
            id,
            values,
            onChange,
            options,
            size,
            label,
            labelVariant,
            labelWeight,
            showSelectAll,
            disabled,
            errorText,
            helperText,
            columns,
            required,
            validator,
            parentHasError,
            fullWidthOptions,
            isHovered,
            setIsHovered,
            ...wrapperProps
        } = props;

        const [cursor, setCursor] = useState(-2),
            [builtInErrorMessage, setErrorMessage] = useState(''),
            isUpKeyPressed = useKeyPress('ArrowUp'),
            isDownKeyPressed = useKeyPress('ArrowDown'),
            checkboxGroupId = useMemo(() => id || label, [id, label]),
            checkboxGroupRef = useCombinedRefs<HTMLDivElement>(ref, useRef(null)),
            hasError = useMemo(
                () => !!errorText || !!builtInErrorMessage || parentHasError,
                [builtInErrorMessage, errorText, parentHasError]
            ),
            hasHelperOrErrorText = useMemo(() => !!(errorText || helperText), [errorText, helperText]),
            allChildValues = useMemo(() => getValuesFromOptions(options), [options]),
            areAllValuesSelected = useMemo(() => allChildValues.every(val => values?.includes(val)), [options, values]),
            indeterminate = useMemo(
                () => !areAllValuesSelected && allChildValues.some(el => values?.includes(el)),
                [areAllValuesSelected, allChildValues]
            );

        const validate = useCallback(
                selectedValues => {
                    const message =
                        (validator && validator(selectedValues)) ||
                        (required && selectedValues.length === 0 && 'Please select at least one option.') ||
                        '';
                    setErrorMessage(message);
                },
                [validator]
            ),
            onBlur = useCallback(
                (event: FocusEvent<HTMLDivElement>) => {
                    const { currentTarget } = event;
                    setTimeout(() => !currentTarget.contains(document.activeElement) && validate(values), 0);
                    props.onBlur && props.onBlur(event);
                },
                [validate, values, props.onBlur]
            );

        const handleOptionClick = useCallback(
                (event: ChangeEvent<HTMLInputElement>) => {
                    event.stopPropagation();
                    const item = event.target.name,
                        isChecked = event.target.checked,
                        newValues = isChecked ? [...values!, item] : values!.filter(vl => vl !== item);
                    validate(newValues);
                    onChange(newValues);
                },
                [values, onChange]
            ),
            handleSelectAllClick = useCallback(() => {
                const newValues = areAllValuesSelected
                    ? values!.filter(val => !allChildValues.includes(val))
                    : Array.from(new Set([...values!, ...allChildValues]));
                validate(newValues);
                onChange(newValues);
            }, [options, values, onChange]);

        useEffect(() => {
            if (isHovered && options.length && isUpKeyPressed) {
                setCursor(prevState => (prevState > -2 ? prevState - 1 : prevState));
            }
        }, [isHovered, isUpKeyPressed, options]);

        useEffect(() => {
            if (isHovered && options.length && isDownKeyPressed) {
                setCursor(prevState => (prevState < options.length ? prevState + 1 : prevState));
            }
        }, [isHovered, isDownKeyPressed, options]);

        useEffect(() => {
            if (isHovered && setIsHovered) {
                if (cursor > -2) setIsHovered(false);
                if (cursor === -2 || cursor === options.length) setIsHovered(true);
            }
        }, [cursor, setIsHovered, isHovered]);

        return (
            <SelectorGroup.Wrapper
                ref={checkboxGroupRef}
                id={`${checkboxGroupId}-wrapper`}
                aria-describedby={`${checkboxGroupId}-helper-text`}
                {...{ ...wrapperProps, hasHelperOrErrorText, onBlur, type: 'checkbox' }}
            >
                {label &&
                    (showSelectAll ? (
                        <Checkbox
                            key="select-all"
                            label={label}
                            checked={areAllValuesSelected}
                            onChange={handleSelectAllClick}
                            indeterminate={indeterminate}
                            id={`${checkboxGroupId}-select-all`}
                            isHovered={cursor === -1}
                            {...{ size, hasError, disabled, labelVariant, labelWeight }}
                        />
                    ) : (
                        <SelectorGroup.Label
                            id={`${checkboxGroupId}-label`}
                            type="checkbox"
                            hasError={hasError}
                            required={required}
                            disabled={disabled}
                            textVariant={labelVariant}
                            textWeight={labelWeight}
                        >
                            {label}
                        </SelectorGroup.Label>
                    ))}
                {(errorText || builtInErrorMessage || helperText) && (
                    <SelectorGroup.HelperText
                        id={`${checkboxGroupId}-helper-text`}
                        type="checkbox"
                        disabled={disabled}
                        hasError={hasError}
                        isIndented={showSelectAll}
                    >
                        {errorText || builtInErrorMessage || helperText}
                    </SelectorGroup.HelperText>
                )}
                <SelectorGroup.Options
                    id={`${checkboxGroupId}-options`}
                    columns={columns}
                    isIndented={showSelectAll}
                    fullWidthOptions={fullWidthOptions}
                >
                    {options.map((option, index) => {
                        return Array.isArray(option.value) ? (
                            <Component
                                key={option.label}
                                parentHasError={hasError}
                                id={`${option.label}-${checkboxGroupId}`}
                                {...{
                                    ...props,
                                    showSelectAll: option.showSelectAll ?? true,
                                    options: option.value,
                                    label: option.label,
                                    columns: option.columns,
                                    helperText: option.helperText,
                                    errorText: option.errorText
                                }}
                            />
                        ) : (
                            <Checkbox
                                size={size}
                                key={option.value}
                                name={option.value}
                                label={option.label}
                                checked={values?.includes(option.value)}
                                onChange={handleOptionClick}
                                disabled={disabled || option.disabled}
                                hasError={hasError}
                                id={`${option.label}-${checkboxGroupId}`}
                                isHovered={isHovered && cursor === index}
                            />
                        );
                    })}
                </SelectorGroup.Options>
            </SelectorGroup.Wrapper>
        );
    })
);

Component.displayName = 'CheckboxGroup';
Component.defaultProps = { values: [], columns: 1, fullWidthOptions: false, labelVariant: 'body1', labelWeight: 'Medium' };
export const CheckboxGroup: FC<CheckboxGroupProps> & WithStyle = Object.assign(Component, { Style: SelectorGroup.Wrapper });
