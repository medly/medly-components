import { WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback } from 'react';
import Checkbox from '../Checkbox';
import FieldWithLabel from '../FieldWithLabel';
import { Props } from './types';

export const CheckboxGroup: SFC<Props> & WithStyle = React.memo(props => {
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

    const optionsValue = options.reduce((acc, curr) => {
        if (!Array.isArray(curr.value)) {
            acc.push(curr.value);
        }
        return acc;
    }, []);

    const handleOptionClick = useCallback(
            (event: React.ChangeEvent<HTMLInputElement>) => {
                const item = event.target.name,
                    isChecked = event.target.checked,
                    newValues = isChecked ? [...values, item] : values.filter(vl => vl !== item);
                onChange(newValues);
            },
            [values, onChange]
        ),
        handleSelectAllClick = useCallback(() => {
            const newValues = optionsValue.every(val => values.includes(val))
                ? values.filter(val => !optionsValue.includes(val))
                : Array.from(new Set([...values, ...optionsValue]));
            onChange(newValues);
        }, [options, values, onChange]);

    return (
        <FieldWithLabel fullWidth {...{ fullWidth, labelPosition }}>
            {label && (
                <FieldWithLabel.Label {...{ labelPosition, labelSize, labelWeight, labelColor }}>
                    {showSelectAll ? (
                        <Checkbox
                            key="select-all"
                            {...{ size, disabled, labelSize, labelWeight, labelColor }}
                            label={label}
                            checked={options.length === values.length}
                            onChange={handleSelectAllClick}
                        />
                    ) : (
                        `${label}`
                    )}
                </FieldWithLabel.Label>
            )}
            <FieldWithLabel.Field isIndented={labelPosition === 'top'}>
                {options.map(option => {
                    return (
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
});

CheckboxGroup.displayName = 'CheckboxGroup';
CheckboxGroup.Style = FieldWithLabel.Style;
CheckboxGroup.defaultProps = {
    disabled: false,
    fullWidth: true,
    values: [],
    showSelectAll: false,
    labelPosition: 'left'
};
