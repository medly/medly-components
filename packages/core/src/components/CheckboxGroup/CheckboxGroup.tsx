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
            labelPosition,
            labelVariant,
            labelWeight,
            labelColor,
            showSelectAll,
            disabled,
            fullWidth,
            errorMessage,
            error,
            helperText,
            columns
        } = props;

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
                {...{ fullWidth, labelPosition, error, showSelectAll }}
            >
                {label && (
                    <FieldWithLabel.Label
                        {...{
                            labelPosition,
                            labelVariant,
                            labelWeight,
                            labelColor,
                            labelSpacing: error || showSelectAll ? '0' : theme.spacing.S2
                        }}
                    >
                        {showSelectAll ? (
                            <Checkbox
                                key="select-all"
                                {...{ size, disabled, labelVariant, labelWeight, labelColor }}
                                label={label}
                                checked={areAllValuesSelected}
                                onChange={handleSelectAllClick}
                                error={error}
                            />
                        ) : (
                            `${label}`
                        )}
                    </FieldWithLabel.Label>
                )}
                {(error || helperText) && <HelperText id={`checkbox-helper-text`}>{errorMessage || helperText}</HelperText>}
                <FieldWithLabel.Field isIndented={labelPosition === 'top'} columns={columns}>
                    {options.map(option => {
                        return Array.isArray(option.value) ? (
                            <CheckboxGroup
                                key={option.label}
                                {...{
                                    ...props,
                                    options: option.value,
                                    label: option.label,
                                    error: option.error,
                                    columns: option.columns
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
                                error={error}
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
    labelPosition: 'left',
    errorMessage: 'Error text here',
    helperText: '',
    error: false,
    columns: 1
};
