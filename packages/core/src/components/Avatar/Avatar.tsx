import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Text from '../Text';
import { AvatarStyled } from './Avatar.styled';
import { Props } from './types';

export const Avatar: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        return (
            <AvatarStyled ref={ref} {...props}>
                {React.Children.map(props.children, c => {
                    return isValidStringOrNumber(c) ? (
                        <Text uppercase textWeight="Strong">
                            {c}
                        </Text>
                    ) : (
                        c
                    );
                })}
            </AvatarStyled>
        );
    })
);

Avatar.displayName = 'Avatar';
Avatar.Style = AvatarStyled;
