import { WithStyle } from '@medly-components/utils';
import React from 'react';
import FieldWithLabel from '../FieldWithLabel';
import Label from '../Label';
import { Props } from './types';

const CheckboxGroup: React.SFC<Props> & WithStyle = React.memo(props => {
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

CheckboxGroup.displayName = 'CheckboxGroup';
CheckboxGroup.Style = FieldWithLabel;
CheckboxGroup.defaultProps = {
    size: 'S',
    label: '',
    name: '',
    labelPosition: 'start'
};

export default CheckboxGroup;
