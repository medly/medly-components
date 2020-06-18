import { WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback, useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import Checkbox from '../Checkbox';
import FieldWithLabel from '../FieldWithLabel';
import { HelperText } from '../TextField/Styled';
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
                fullWidth,
                errorText,
                helperText,
                columns,
                isIndented,
                parentHasError
            } = props,
            hasError = !!errorText || parentHasError;

        const allChildValues = useMemo(() => getValuesFromOptions(options), [options]),
            areAllValuesSelected = useMemo(() => allChildValues.every(val => values.includes(val)), [options, values]);

        const theme = useContext(ThemeContext);

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
                fullWidth
                labelPosition="top"
                {...{ fullWidth, hasError, showSelectAll, isIndented }}
            >
                {label && (
                    <FieldWithLabel.Label
                        labelPosition="top"
                        {...{
                            labelVariant,
                            labelWeight,
                            labelColor,
                            labelSpacing: hasError || showSelectAll ? '0' : theme.spacing.S2
                        }}
                    >
                        {showSelectAll ? (
                            <Checkbox
                                key="select-all"
                                {...{ size, disabled, labelVariant, labelWeight, labelColor }}
                                label={label}
                                checked={areAllValuesSelected}
                                onChange={handleSelectAllClick}
                                indeterminate={!areAllValuesSelected && allChildValues.some(el => values.includes(el))}
                                hasError={hasError}
                            />
                        ) : (
                            `${label}`
                        )}
                    </FieldWithLabel.Label>
                )}
                {(errorText || helperText) && <HelperText id={`checkbox-helper-text`}>{errorText || helperText}</HelperText>}
                <FieldWithLabel.Field columns={columns}>
                    {options.map(option => {
                        return Array.isArray(option.value) ? (
                            <CheckboxGroup
                                key={option.label}
                                parentHasError={hasError}
                                isIndented
                                {...{
                                    ...props,
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
                </FieldWithLabel.Field>
            </Styled.CheckboxGroupWrapper>
        );
    })
);

CheckboxGroup.displayName = 'CheckboxGroup';
CheckboxGroup.Style = FieldWithLabel.Style;
CheckboxGroup.defaultProps = {
    disabled: false,
    fullWidth: true,
    values: [],
    showSelectAll: false,
    errorText: '',
    helperText: '',
    columns: 1,
    labelVariant: 'body1',
    labelWeight: 'Medium'
};
