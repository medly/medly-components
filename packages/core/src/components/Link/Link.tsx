import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Text from '../Text';
import { LinkStyled } from './Link.styled';
import { Props } from './types';

export const Link: SFC<Props> & WithStyle = React.memo(
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

Link.displayName = 'Link';
Link.Style = LinkStyled;
