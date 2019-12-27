import { WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import Radio from '../Radio';
import { Props } from './types';

export const RadioGroup: SFC<Props> & WithStyle = React.memo(props => {
    const {
        size,
        name,
        label,
        required,
        options,
        labelPosition,
        onChange,
        value,
        disabled,
        labelSize,
        fullWidth,
        labelWeight,
        labelColor
    } = props;

    const handleOnChange = useCallback(
        (event: React.FormEvent<HTMLInputElement>) => {
            const target = event.target as HTMLInputElement;
            onChange && onChange(target.value);
        },
        [onChange]
    );
    return (
        <FieldWithLabel fullWidth {...{ fullWidth, labelPosition }}>
            {label && (
                <FieldWithLabel.Label {...{ required, labelPosition, labelSize, labelWeight, labelColor }}>{label}</FieldWithLabel.Label>
            )}
            <FieldWithLabel.Field onChange={handleOnChange}>
                {options.map(option => (
                    <Radio
                        key={option.value}
                        {...{ ...option, size, name, required }}
                        disabled={disabled || option.disabled}
                        defaultChecked={option.value === value}
                    />
                ))}
            </FieldWithLabel.Field>
        </FieldWithLabel>
    );
});

RadioGroup.displayName = 'RadioGroup';
RadioGroup.Style = FieldWithLabel.Style;
RadioGroup.defaultProps = {
    label: '',
    name: '',
    fullWidth: true,
    labelPosition: 'left'
};
