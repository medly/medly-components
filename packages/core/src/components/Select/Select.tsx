import { WithStyle } from '@medly-components/utils';
import React from 'react';
import Label from '../Label';
import Text from '../Text';

import { SelectFieldStyled, SelectIconStyled, SelectStyled, SelectWrapperStyled } from './Select.styled';
import { Props } from './types';

const Select: React.SFC<Props> & WithStyle = props => {
    const { description, label, labelPosition, required, fullWidth } = props;

    return (
        <SelectFieldStyled>
            {label && (
                <Label required={required} labelPosition={labelPosition}>
                    {label}
                </Label>
            )}
            <SelectWrapperStyled fullWidth={fullWidth}>
                <SelectStyled {...props}>{props.children}</SelectStyled>
                <SelectIconStyled />
            </SelectWrapperStyled>
            {description && <Text>{description}</Text>}
        </SelectFieldStyled>
    );
};

Select.defaultProps = {
    label: '',
    labelPosition: 'vertical',
    fullWidth: false,
    required: false,
    description: ''
};

Select.Style = SelectStyled;
export default Select;
