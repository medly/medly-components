import { isValidStringOrNumber, ThemeContext, WithStyle } from '@medly-components/utils';
import React, { FC, useContext } from 'react';
import Text from '../Text';
import { ButtonStyled } from './Button.styled';
import BtnLoader from './Loader';
import { Props } from './types';

export const Button: FC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const theme = useContext(ThemeContext);
        return (
            <ButtonStyled ref={ref} {...props}>
                {React.Children.map(props.children, c => {
                    return isValidStringOrNumber(c) ? <Text textVariant={theme.button.textVariant[props.size]}>{c}</Text> : c;
                })}
                {props.isLoading && <BtnLoader variant={props.variant} size={props.size} />}
            </ButtonStyled>
        );
    })
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
