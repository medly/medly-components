import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Text from '../Text';
import { ButtonStyled } from './Button.styled';
import { Props } from './types';

export const Button: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        return (
            <ButtonStyled ref={ref} {...props}>
                {React.Children.map(props.children, c => {
                    return isValidStringOrNumber(c) ? <Text textWeight="Medium">{c}</Text> : c;
                })}
            </ButtonStyled>
        );
    })
);
Button.defaultProps = {
    type: 'button',
    variant: 'solid',
    color: 'primary',
    disabled: false
};
Button.displayName = 'Button';
Button.Style = ButtonStyled;
