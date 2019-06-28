import { WithStyle } from '@medly-components/utils';
import React from 'react';
import FieldWithLabel from '../FieldWithLabel';
import Label from '../Label';
import { Props } from './types';

const RadioGroup: React.SFC<Props> & WithStyle = React.memo(props => {
    const { size, name, label, required, children, labelPosition } = props;
    return (
        <FieldWithLabel {...{ labelPosition }}>
            {label && <Label {...{ required, labelPosition }}>{label}</Label>}
            {React.Children.map(children, child => {
                return React.cloneElement(child as any, {
                    size,
                    name,
                    required
                });
            })}
        </FieldWithLabel>
    );
});

RadioGroup.displayName = 'RadioGroup';
RadioGroup.Style = FieldWithLabel;
RadioGroup.defaultProps = {
    label: '',
    name: '',
    labelPosition: 'left'
};

export default RadioGroup;
