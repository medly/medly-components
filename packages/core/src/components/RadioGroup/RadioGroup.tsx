import { WithStyle } from '@medly-components/utils';
import React from 'react';
import FieldWithLabel from '../FieldWithLabel';
import { Props as RadioProps } from '../Radio/types';
import { Props } from './types';

const RadioGroup: React.SFC<Props> & WithStyle = React.memo(props => {
    const { size, name, label, required, children, labelPosition, onChange, defaultChecked, disabled } = props;

    const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        onChange && onChange(target.value);
    };
    return (
        <FieldWithLabel fullWidth {...{ labelPosition }}>
            {label && <FieldWithLabel.Label {...{ required, labelPosition }}>{label}</FieldWithLabel.Label>}
            <FieldWithLabel.Field onChange={handleOnChange}>
                {React.Children.map(children, child => {
                    return React.cloneElement(child as React.ReactElement<RadioProps> & WithStyle, {
                        size,
                        name,
                        required,
                        disabled,
                        // @ts-ignore
                        defaultChecked: child.props.value === defaultChecked
                    });
                })}
            </FieldWithLabel.Field>
        </FieldWithLabel>
    );
});

RadioGroup.displayName = 'RadioGroup';
RadioGroup.Style = FieldWithLabel.Style;
RadioGroup.defaultProps = {
    label: '',
    name: '',
    labelPosition: 'left'
};

export default RadioGroup;
