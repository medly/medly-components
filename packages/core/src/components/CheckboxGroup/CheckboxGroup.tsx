import { WithStyle } from '@medly-components/utils';
import React from 'react';
import FieldWithLabel from '../FieldWithLabel';
import { Props } from './types';

const CheckboxGroup: React.SFC<Props> & WithStyle = React.memo(props => {
    const { size, name, label, required, children, labelPosition, disabled } = props;
    return (
        <FieldWithLabel fullWidth {...{ labelPosition }}>
            {label && <FieldWithLabel.Label {...{ required, labelPosition }}>{label}</FieldWithLabel.Label>}
            <FieldWithLabel.Field>
                {React.Children.map(children, child => {
                    return React.cloneElement(child as any, {
                        size,
                        name,
                        required,
                        disabled
                    });
                })}
            </FieldWithLabel.Field>
        </FieldWithLabel>
    );
});

CheckboxGroup.displayName = 'CheckboxGroup';
CheckboxGroup.Style = FieldWithLabel.Style;
CheckboxGroup.defaultProps = {
    label: '',
    name: '',
    labelPosition: 'left'
};

export default CheckboxGroup;
