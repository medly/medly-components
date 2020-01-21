import { WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback, useMemo } from 'react';
import Checkbox from '../Checkbox';
import FieldWithLabel from '../FieldWithLabel';
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
            labelSize,
            labelWeight,
            labelColor,
            showSelectAll,
            disabled,
            fullWidth
        } = props;

        const allChildValues = useMemo(() => getValuesFromOptions(options), [options]),
            areAllValuesSelected = useMemo(() => allChildValues.every(val => values.includes(val)), [options, values]);

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
            <FieldWithLabel id={`${label}-checkboxGroup`} ref={ref} fullWidth {...{ fullWidth, labelPosition }}>
                {label && (
                    <FieldWithLabel.Label {...{ labelPosition, labelSize, labelWeight, labelColor }}>
                        {showSelectAll ? (
                            <Checkbox
                                key="select-all"
                                {...{ size, disabled, labelSize, labelWeight, labelColor }}
                                label={label}
                                checked={areAllValuesSelected}
                                onChange={handleSelectAllClick}
                            />
                        ) : (
                            `${label}`
                        )}
                    </FieldWithLabel.Label>
                )}
                <FieldWithLabel.Field isIndented={labelPosition === 'top'}>
                    {options.map(option => {
                        return Array.isArray(option.value) ? (
                            <CheckboxGroup
                                key={option.label}
                                {...{
                                    ...props,
                                    options: option.value,
                                    label: option.label
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
                            />
                        );
                    })}
                </FieldWithLabel.Field>
            </FieldWithLabel>
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
    labelPosition: 'left'
};
