import { useCombinedRefs, WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback, useMemo } from 'react';
import Checkbox from '../Checkbox';
import { SelectorGroup } from '../Selectors';
import getValuesFromOptions from './getValuesFromOptions';
import { Props } from './types';

export const CheckboxGroup: SFC<Props> & WithStyle = React.memo(
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
            parentHasError,
            ...wrapperProps
        } = props;

        const checkboxGroupId = useMemo(() => id || label, [id, label]),
            checkboxGroupRef = useCombinedRefs<HTMLDivElement>(ref, React.useRef(null)),
            hasError = useMemo(() => !!errorText || parentHasError, [errorText, parentHasError]),
            hasHelperOrErrorText = useMemo(() => !!(errorText || helperText), [errorText, helperText]),
            allChildValues = useMemo(() => getValuesFromOptions(options), [options]),
            areAllValuesSelected = useMemo(() => allChildValues.every(val => values.includes(val)), [options, values]),
            indeterminate = useMemo(() => !areAllValuesSelected && allChildValues.some(el => values.includes(el)), [
                areAllValuesSelected,
                allChildValues
            ]);

        const handleOptionClick = useCallback(
                (event: React.ChangeEvent<HTMLInputElement>) => {
                    event.stopPropagation();
                    const item = event.target.name,
                        isChecked = event.target.checked,
                        newValues = isChecked ? [...values, item] : values.filter(vl => vl !== item);
                    onChange(newValues);
                },
                [values, onChange]
            ),
            handleSelectAllClick = useCallback(() => {
                const newValues = areAllValuesSelected
                    ? values.filter(val => !allChildValues.includes(val))
                    : Array.from(new Set([...values, ...allChildValues]));
                onChange(newValues);
            }, [options, values, onChange]);

        return (
            <SelectorGroup.Wrapper
                ref={checkboxGroupRef}
                type="checkbox"
                id={`${checkboxGroupId}-wrapper`}
                aria-describedby={`${checkboxGroupId}-helper-text`}
                {...{ ...wrapperProps, hasHelperOrErrorText }}
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
                            required={required}
                            disabled={disabled}
                            textVariant={labelVariant}
                            textWeight={labelWeight}
                        >
                            {label}
                        </SelectorGroup.Label>
                    ))}
                {(errorText || helperText) && (
                    <SelectorGroup.HelperText
                        id={`${checkboxGroupId}-helper-text`}
                        type="checkbox"
                        disabled={disabled}
                        hasError={hasError}
                        isIndented={showSelectAll}
                    >
                        {errorText || helperText}
                    </SelectorGroup.HelperText>
                )}
                <SelectorGroup.Options id={`${checkboxGroupId}-options`} columns={columns} isIndented={showSelectAll}>
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
    labelVariant: 'body1',
    labelWeight: 'Medium'
};
