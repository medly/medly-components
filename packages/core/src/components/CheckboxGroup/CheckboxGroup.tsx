import { ThemeContext, useCombinedRefs, WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useContext, useMemo, useState } from 'react';
import Checkbox from '../Checkbox';
import { HelperAndErrorTextTooltip } from '../HelperAndErrorTextTooltip/HelperAndErrorTextTooltip';
import { SelectorGroup } from '../Selectors';
import getValuesFromOptions from './getValuesFromOptions';
import { CheckboxGroupProps } from './types';

export const CheckboxGroup: FC<CheckboxGroupProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
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
            showTooltipForHelperAndErrorText,
            ...wrapperProps
        } = props;

        const theme = useContext(ThemeContext);

        const [builtInErrorMessage, setErrorMessage] = useState(''),
            checkboxGroupId = useMemo(() => id || label, [id, label]),
            checkboxGroupRef = useCombinedRefs<HTMLDivElement>(ref, React.useRef(null)),
            hasError = useMemo(() => !!errorText || !!builtInErrorMessage || parentHasError, [
                builtInErrorMessage,
                errorText,
                parentHasError
            ]),
            hasHelperOrErrorText = useMemo(() => !!(errorText || helperText), [errorText, helperText]),
            allChildValues = useMemo(() => getValuesFromOptions(options), [options]),
            areAllValuesSelected = useMemo(() => allChildValues.every(val => values.includes(val)), [options, values]),
            indeterminate = useMemo(() => !areAllValuesSelected && allChildValues.some(el => values.includes(el)), [
                areAllValuesSelected,
                allChildValues
            ]);

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
                (event: React.FocusEvent<HTMLDivElement>) => {
                    const currentTarget = event.currentTarget;
                    setTimeout(() => !currentTarget.contains(document.activeElement) && validate(values), 0);
                    props.onBlur && props.onBlur(event);
                },
                [validate, values, props.onBlur]
            );

        const handleOptionClick = useCallback(
                (event: React.ChangeEvent<HTMLInputElement>) => {
                    event.stopPropagation();
                    const item = event.target.name,
                        isChecked = event.target.checked,
                        newValues = isChecked ? [...values, item] : values.filter(vl => vl !== item);
                    validate(newValues);
                    onChange(newValues);
                },
                [values, onChange]
            ),
            handleSelectAllClick = useCallback(() => {
                const newValues = areAllValuesSelected
                    ? values.filter(val => !allChildValues.includes(val))
                    : Array.from(new Set([...values, ...allChildValues]));
                validate(newValues);
                onChange(newValues);
            }, [options, values, onChange]);

        return (
            <SelectorGroup.Wrapper
                ref={checkboxGroupRef}
                type="checkbox"
                id={`${checkboxGroupId}-wrapper`}
                aria-describedby={`${checkboxGroupId}-helper-text`}
                {...{ ...wrapperProps, hasHelperOrErrorText, onBlur }}
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
                            {showTooltipForHelperAndErrorText && (
                                <HelperAndErrorTextTooltip
                                    idPrefix={checkboxGroupId}
                                    errorIconColor={theme.checkbox.borderColor.error}
                                    errorText={errorText}
                                    builtInErrorMessage={builtInErrorMessage}
                                    helperText={helperText}
                                />
                            )}
                        </SelectorGroup.Label>
                    ))}
                {(errorText || builtInErrorMessage || helperText) && !showTooltipForHelperAndErrorText && (
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
                    {options.map(option => {
                        return Array.isArray(option.value) ? (
                            <CheckboxGroup
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
                                checked={values.includes(option.value)}
                                onChange={handleOptionClick}
                                disabled={disabled || option.disabled}
                                hasError={hasError}
                                id={`${option.label}-${checkboxGroupId}`}
                            />
                        );
                    })}
                </SelectorGroup.Options>
            </SelectorGroup.Wrapper>
        );
    })
);

CheckboxGroup.displayName = 'CheckboxGroup';
CheckboxGroup.Style = SelectorGroup.Wrapper;
CheckboxGroup.defaultProps = {
    values: [],
    columns: 1,
    fullWidthOptions: false,
    labelVariant: 'body1',
    labelWeight: 'Medium'
};
