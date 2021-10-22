import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Text from '../Text';
import { ButtonStyled } from './Button.styled';
import BtnLoader from './Loader';
import { ButtonProps } from './types';

const Component: FC<ButtonProps> = React.memo(
    React.forwardRef((props, ref) => {
        const theme = useContext(ThemeContext);
        return (
            <ButtonStyled ref={ref} {...props}>
                {React.Children.map(props.children, c => {
                    return isValidStringOrNumber(c) ? <Text textVariant={theme.button.textVariant[props.size!]}>{c}</Text> : c;
                })}
                {props.isLoading && <BtnLoader variant={props.variant!} size={props.size!} />}
            </ButtonStyled>
        );
    })
);
Component.defaultProps = {
    type: 'button',
    variant: 'solid',
    disabled: false,
    edges: 'square',
    size: 'M'
};
Component.displayName = 'Button';
export const Button: FC<ButtonProps> & WithStyle = Object.assign(Component, {
    Style: ButtonStyled
});
