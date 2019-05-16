import { defaultTheme } from '@medly-components/theme';
import { isValidStringOrNumber, WithStyle, withTheme } from '@medly-components/utils';
import React from 'react';
import Text from '../Text';
import { AvatarStyled } from './Avatar.styled';
import { Props } from './types';

const AvatarWithTheme: React.SFC<Props> = props => {
    const { theme, size } = props;
    const { avatar } = theme;
    const { defaults } = avatar;
    const fontSize = avatar[size || defaults.size].fontSize;

    return (
        <AvatarStyled {...props}>
            {React.Children.map(props.children, c => {
                return isValidStringOrNumber(c) ? (
                    <Text uppercase textSize={fontSize} textWeight="Strong">
                        {c}
                    </Text>
                ) : (
                    c
                );
            })}
        </AvatarStyled>
    );
};
AvatarWithTheme.defaultProps = {
    theme: defaultTheme
};

const Avatar: React.SFC<Props> & WithStyle = withTheme(AvatarWithTheme);

Avatar.displayName = 'Avatar';
Avatar.Style = AvatarStyled;

export default Avatar;
