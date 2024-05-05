import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { Children, forwardRef, memo } from 'react';
import Text from '../Text';
import { LinkStyled } from './Link.styled';
import { LinkProps } from './types';

const Component: FCC<LinkProps> = memo(
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
export const Link: FCC<LinkProps> & WithStyle = Object.assign(Component, { Style: LinkStyled });
