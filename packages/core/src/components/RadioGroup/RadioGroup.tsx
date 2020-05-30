import { WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import Radio from '../Radio';
import { Props } from './types';

export const RadioGroup: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
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
            labelVariant,
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
            <FieldWithLabel id={`${label}-radioGroup`} ref={ref} fullWidth {...{ fullWidth, labelPosition }}>
                {label && (
                    <FieldWithLabel.Label {...{ required, labelPosition, labelVariant, labelWeight, labelColor }}>
                        {label}
                    </FieldWithLabel.Label>
                )}
                <FieldWithLabel.Field onChange={handleOnChange}>
                    {options.map(option => (
                        <Radio
                            key={option.value}
                            {...{ ...option, size, name, required }}
                            disabled={disabled || option.disabled}
                            checked={option.value === value}
                        />
                    ))}
                </FieldWithLabel.Field>
            </FieldWithLabel>
        );
    })
);

RadioGroup.displayName = 'RadioGroup';
RadioGroup.Style = FieldWithLabel.Style;
RadioGroup.defaultProps = {
    label: '',
    name: '',
    fullWidth: true,
    labelPosition: 'left'
};
