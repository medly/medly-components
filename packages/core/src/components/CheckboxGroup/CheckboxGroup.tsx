import { WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback, useMemo } from 'react';
import Checkbox from '../Checkbox';
import FieldWithLabel from '../FieldWithLabel';
import Text from '../Text';
import * as Styled from './CheckboxGroup.styled';
import getValuesFromOptions from './getValuesFromOptions';
import { Props } from './types';

export const CheckboxGroup: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const {
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
            isIndented,
            parentHasError
        } = props;

        const hasError = useMemo(() => !!errorText || parentHasError, [errorText, parentHasError]),
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
                id={`${label}-checkboxGroup`}
                ref={ref}
                {...{ disabled, hasError, showSelectAll, isIndented, hasHelperOrErrorText }}
            >
                {label &&
                    (showSelectAll ? (
                        <Checkbox
                            key="select-all"
                            {...{ size, hasError, disabled, labelVariant, labelWeight, labelColor }}
                            label={label}
                            checked={areAllValuesSelected}
                            onChange={handleSelectAllClick}
                            indeterminate={indeterminate}
                        />
                    ) : (
                        <Text textVariant={labelVariant} textWeight={labelWeight} textColor={labelColor}>
                            {label}
                        </Text>
                    ))}
                {(errorText || helperText) && (
                    <Styled.CheckboxGroupHelperText
                        id={`checkbox-helper-text`}
                        disabled={disabled}
                        hasError={hasError}
                        isIndented={showSelectAll}
                    >
                        {errorText || helperText}
                    </Styled.CheckboxGroupHelperText>
                )}
                <Styled.CheckboxGroupOptions columns={columns} isIndented={showSelectAll}>
                    {options.map(option => {
                        return Array.isArray(option.value) ? (
                            <CheckboxGroup
                                key={option.label}
                                parentHasError={hasError}
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
                            />
                        );
                    })}
                </Styled.CheckboxGroupOptions>
            </Styled.CheckboxGroupWrapper>
        );
    })
);

CheckboxGroup.displayName = 'CheckboxGroup';
CheckboxGroup.Style = FieldWithLabel.Style;
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
