import { WithStyle } from '@medly-components/utils';
import React from 'react';
import FieldWithLabel from '../FieldWithLabel';
import { Props } from './types';

const RadioGroup: React.SFC<Props> & WithStyle = React.memo(props => {
    const { size, name, label, required, children, labelPosition } = props;
    return (
        <FieldWithLabel fullWidth {...{ labelPosition }}>
            {label && <FieldWithLabel.Label {...{ required, labelPosition }}>{label}</FieldWithLabel.Label>}
            <FieldWithLabel.Field>
                {React.Children.map(children, child => {
                    return React.cloneElement(child as any, {
                        size,
                        name,
                        required
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
