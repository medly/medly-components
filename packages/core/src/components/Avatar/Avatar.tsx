import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { Children, forwardRef, memo } from 'react';
import Text from '../Text';
import { AvatarStyled } from './Avatar.styled';
import { AvatarProps } from './types';

const Component: FCC<AvatarProps> = memo(
    forwardRef((props, ref) => {
        const isImage = !!Children.toArray(props.children).find(
            (child: any) => child.type === 'img' || child.props?.originalType === 'img'
        );
        return (
            <AvatarStyled ref={ref} {...props} isImage={isImage}>
                {Children.map(props.children, c => {
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
export const Avatar: FCC<AvatarProps> & WithStyle = Object.assign(Component, {
    Style: AvatarStyled
});
