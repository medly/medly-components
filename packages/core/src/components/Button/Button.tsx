import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Text from '../Text';
import { ButtonStyled } from './Button.styled';
import { Props } from './types';

export const Button: FC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => (
        <ButtonStyled ref={ref} {...props}>
            {React.Children.map(props.children, c => {
                return isValidStringOrNumber(c) ? <Text textVariant={props.size === 'M' ? 'button1' : 'button2'}>{c}</Text> : c;
            })}
        </ButtonStyled>
    ))
);
Button.defaultProps = {
    type: 'button',
    variant: 'solid',
    disabled: false,
    edges: 'square',
    size: 'M'
};
Button.displayName = 'Button';
Button.Style = ButtonStyled;
