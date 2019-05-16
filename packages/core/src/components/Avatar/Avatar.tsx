import { defaultTheme } from '@medly-components/theme';
import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React from 'react';
import Text from '../Text';
import { AvatarStyled } from './Avatar.styled';
import { Props } from './types';

const Avatar: React.SFC<Props> & WithStyle = React.memo(props => {
    return (
        <AvatarStyled {...props}>
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
});

Avatar.displayName = 'Avatar';
Avatar.Style = AvatarStyled;

export default Avatar;
