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
            isSelectionKeyPressed = useKeyPress(' '),
            checkboxGroupId = useMemo(() => id || label, [id, label]),
            checkboxGroupRef = useCombinedRefs<HTMLDivElement>(ref, useRef(null)),
            isUpKeyPressed = useKeyPress('ArrowUp', false, checkboxGroupRef),
            isDownKeyPressed = useKeyPress('ArrowDown', false, checkboxGroupRef),
            hasError = useMemo(
                () => !!errorText || !!builtInErrorMessage || parentHasError,
                [builtInErrorMessage, errorText, parentHasError]
            ),
            hasHelperOrErrorText = useMemo(() => !!(errorText || helperText), [errorText, helperText]),
            allChildValues = useMemo(() => getValuesFromOptions(options), [options]),
            areAllValuesSelected = useMemo(() => allChildValues.every(val => values?.includes(val)), [options, values]),
            indeterminate = useMemo(
                () => !areAllValuesSelected && allChildValues.some(el => values?.includes(el)),
                [areAllValuesSelected, allChildValues, isSelectionKeyPressed]
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

        const handleOptionSelection = useCallback(
                (item: any) => (isChecked: boolean) => {
                    const newValues = isChecked ? [...values!, item] : values!.filter(vl => vl !== item);
                    validate(newValues);
                    onChange(newValues);
                },
                [values, onChange]
            ),
            handleOptionClick = useCallback(
                (event: ChangeEvent<HTMLInputElement>) => {
                    event.stopPropagation();
                    const { name, checked } = event.target as HTMLInputElement;
                    handleOptionSelection(name)(checked);
                },
                [handleOptionSelection]
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
                setCursor(prevState => (prevState > -1 ? prevState - 1 : options.length - 1));
            }
        }, [isHovered, isUpKeyPressed, options]);

        useEffect(() => {
            if (isHovered && options.length && isDownKeyPressed) {
                setCursor(prevState => (prevState < options.length ? prevState + 1 : prevState));
            }
        }, [isHovered, isDownKeyPressed, options]);

        useEffect(() => {
            isHovered && options.length && isSelectionKeyPressed && cursor === -1 && handleSelectAllClick();
        }, [isHovered, isSelectionKeyPressed, options, cursor]);

        useEffect(() => {
            if (isHovered && setIsHovered) {
                if (cursor > -2) setIsHovered(false);
                if ((isUpKeyPressed && cursor === -1) || cursor === options.length) {
                    setIsHovered(true);
                    setCursor(-2);
                }
                if ((isDownKeyPressed && cursor === -2) || cursor === options.length) setIsHovered(true);
            }
        }, [cursor, setIsHovered, isHovered, isUpKeyPressed, isDownKeyPressed]);

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
                                onSelectionFromKeyboard={handleOptionSelection(option.value)}
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
