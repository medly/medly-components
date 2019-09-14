import { WithStyle } from '@medly-components/utils';
import React from 'react';
import Checkbox from '../Checkbox';
import FieldWithLabel from '../FieldWithLabel';
import { Props } from './types';

const CheckboxGroup: React.SFC<Props> & WithStyle = React.memo(props => {
    const {
        defaultValues,
        onChange,
        options,
        size,
        label,
        labelPosition,
        labelSize,
        labelWeight,
        labelColor,
        showSelectAll,
        disabled
    } = props;

    const handleOptionClick = (event: React.ChangeEvent<HTMLInputElement>) => {
            const item = event.target.name,
                isChecked = event.target.checked,
                newValues = isChecked ? [...defaultValues, item] : defaultValues.filter(vl => vl !== item);
            onChange(newValues);
        },
        handleSelectAllClick = () => {
            const newValues = options.length === defaultValues.length ? [] : options.map(option => option.value);
            onChange(newValues);
        };

    return (
        <FieldWithLabel fullWidth {...{ labelPosition }}>
            {label && (
                <FieldWithLabel.Label {...{ labelPosition, labelSize, labelWeight, labelColor }}>
                    {showSelectAll ? (
                        <Checkbox
                            key="select-all"
                            {...{ size, disabled, labelSize, labelWeight, labelColor }}
                            label={label}
                            checked={options.length === defaultValues.length}
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
                            key={option.value}
                            name={option.value}
                            label={option.label}
                            checked={defaultValues.includes(option.value)}
                            onChange={handleOptionClick}
                            {...{ size, disabled }}
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
    defaultValues: [],
    showSelectAll: false,
    labelPosition: 'left'
};

export default CheckboxGroup;
