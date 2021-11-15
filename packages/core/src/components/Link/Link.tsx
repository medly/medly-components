import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import { memo, forwardRef, Children } from 'react';
import Text from '../Text';
import { LinkStyled } from './Link.styled';
import { LinkProps } from './types';
import type { FC } from 'react';

const Component: FC<LinkProps> = memo(
    forwardRef(({ href, ...props }, ref) => {
        return (
            <LinkStyled href={href} {...props} ref={ref}>
                {Children.map(props.children, c => {
                    return isValidStringOrNumber(c) ? <Text>{c}</Text> : c;
                })}
            </LinkStyled>
        );
    })
);

Component.displayName = 'Link';
export const Link: FC<LinkProps> & WithStyle = Object.assign(Component, { Style: LinkStyled });
