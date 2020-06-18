import { WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback, useMemo } from 'react';
import Checkbox from '../Checkbox';
import Text from '../Text';
import * as Styled from './CheckboxGroup.styled';
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
            labelColor,
            showSelectAll,
            disabled,
            errorText,
            helperText,
            columns,
            fullWidth,
            parentHasError
        } = props;

        const checkboxGroupId = useMemo(() => id || label, [id, label]),
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
            <Styled.CheckboxGroupWrapper
                ref={ref}
                id={`${checkboxGroupId}-wrapper`}
                {...{ fullWidth, disabled, hasError, showSelectAll, hasHelperOrErrorText }}
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
                            aria-describedby={`${checkboxGroupId}-helper-text`}
                            {...{ size, hasError, disabled, labelVariant, labelWeight, labelColor }}
                        />
                    ) : (
                        <Text id={`${checkboxGroupId}-label`} textVariant={labelVariant} textWeight={labelWeight} textColor={labelColor}>
                            {label}
                        </Text>
                    ))}
                {(errorText || helperText) && (
                    <Styled.CheckboxGroupHelperText
                        id={`${checkboxGroupId}-helper-text`}
                        disabled={disabled}
                        hasError={hasError}
                        isIndented={showSelectAll}
                    >
                        {errorText || helperText}
                    </Styled.CheckboxGroupHelperText>
                )}
                <Styled.CheckboxGroupOptions id={`${checkboxGroupId}-field`} columns={columns} isIndented={showSelectAll}>
                    {options.map(option => {
                        return Array.isArray(option.value) ? (
                            <CheckboxGroup
                                key={option.label}
                                parentHasError={hasError}
                                id={`${checkboxGroupId}-${option.label}`}
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
                                id={`${checkboxGroupId}-${option.label}`}
                            />
                        );
                    })}
                </Styled.CheckboxGroupOptions>
            </Styled.CheckboxGroupWrapper>
        );
    })
);

CheckboxGroup.displayName = 'CheckboxGroup';
CheckboxGroup.Style = Styled.CheckboxGroupWrapper;
CheckboxGroup.defaultProps = {
    disabled: false,
    values: [],
    showSelectAll: false,
    errorText: '',
    helperText: '',
    columns: 1,
    labelVariant: 'body1',
    labelWeight: 'Medium'
};
