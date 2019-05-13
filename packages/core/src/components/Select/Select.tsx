import { WithStyle } from '@medly-components/utils';
import React from 'react';
import Label from '../Label';
import Text from '../Text';

import FieldWithLabel from '../FieldWithLabel';
import { SelectIconStyled, SelectStyled, SelectWrapperStyled } from './Select.styled';
import { Props } from './types';

const Select: React.SFC<Props> & WithStyle = React.forwardRef((props, ref) => {
    const { description, label, labelPosition, required, fullWidth } = props;

    return (
        <FieldWithLabel {...{ fullWidth, labelPosition }}>
            {label && <Label {...{ required, labelPosition }}>{label}</Label>}
            <SelectWrapperStyled {...{ description, fullWidth, labelPosition }}>
                <SelectStyled ref={ref} {...props}>
                    {props.children}
                </SelectStyled>
                <SelectIconStyled />
            </SelectWrapperStyled>
            {description && <Text>{description}</Text>}
        </FieldWithLabel>
    );
});

Select.Style = SelectWrapperStyled;
Select.defaultProps = {
    label: '',
    labelPosition: 'top',
    fullWidth: false,
    required: false,
    description: ''
};

export default Select;
