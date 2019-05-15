import { defaultTheme } from '@medly-components/theme';
import { isValidStringOrNumber, WithStyle, withTheme } from '@medly-components/utils';
import React from 'react';
import Text from '../Text';
import { AvatarStyled } from './Avatar.styled';
import { Props } from './types';

const Avatar: React.FunctionComponent<Props> & WithStyle = props => {
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

Avatar.defaultProps = {
    theme: defaultTheme
};
Avatar.displayName = 'Avatar';
Avatar.Style = AvatarStyled;

export default withTheme(Avatar);
