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
                    return isValidStringOrNumber(c) ? (
                        <Text textVariant={props.size === 'M' ? 'body1' : 'body2'} textWeight="Medium">
                            {c}
                        </Text>
                    ) : (
                        c
                    );
                })}
            </ButtonStyled>
        );
    })
);
Button.defaultProps = {
    type: 'button',
    variant: 'solid',
    color: 'default',
    disabled: false,
    edges: 'square',
    size: 'M'
};
Button.displayName = 'Button';
Button.Style = ButtonStyled;
