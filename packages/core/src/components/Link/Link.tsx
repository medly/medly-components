import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Text from '../Text';
import { LinkStyled } from './Link.styled';
import { LinkProps } from './types';

const Component: FC<LinkProps> = React.memo(
    React.forwardRef(({ href, ...props }, ref) => {
        return (
            <LinkStyled href={href} {...props} ref={ref}>
                {React.Children.map(props.children, c => {
                    return isValidStringOrNumber(c) ? <Text>{c}</Text> : c;
                })}
            </LinkStyled>
        );
    })
);

Component.displayName = 'Link';
export const Link: FC<LinkProps> & WithStyle = Object.assign(Component, { Style: LinkStyled });
