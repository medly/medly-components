import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Text from '../Text';
import { AvatarStyled } from './Avatar.styled';
import { AvatarProps } from './types';

const Component: FC<AvatarProps> = React.memo(
    React.forwardRef((props, ref) => {
        const isImage = !!React.Children.toArray(props.children).find(
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
Component.displayName = 'Avatar';
export const Avatar: FC<AvatarProps> & WithStyle = Object.assign(Component, {
    Style: AvatarStyled
});
