import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Text from '../Text';
import { AvatarStyled } from './Avatar.styled';
import { Props } from './types';

export const Avatar: FC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const isImage = React.Children.toArray(props.children).find(
            (child: any) => child.type === 'img' || child.props?.originalType === 'img'
        );
        return (
            <AvatarStyled ref={ref} {...props} isImage={isImage}>
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
