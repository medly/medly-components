import React from 'react';
import { WithStyle } from '../../utils/types';
import Text from '../Text';
import { ButtonStyled } from './Button.styled';
import { Props } from './types';

import { isValidStringOrNumber } from '../../utils/helpers/ReactHelper';

export const Button: React.SFC<Props> & WithStyle = props => {
    return (
        <ButtonStyled {...props}>
            {React.Children.map(props.children, c => {
                return isValidStringOrNumber(c) ? <Text>{c}</Text> : c;
            })}
        </ButtonStyled>
    );
};
Button.defaultProps = {
    variant: 'solid',
    color: 'primary'
};
Button.displayName = 'Button';
Button.Style = ButtonStyled;

export default Button;
