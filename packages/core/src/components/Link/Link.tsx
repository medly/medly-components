import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React from 'react';
import Text from '../Text';
import { LinkStyled } from './Link.styled';
import { Props } from './types';

const Link: React.FunctionComponent<Props> & WithStyle = React.forwardRef(({ href, ...props }, ref) => {
    return (
        <LinkStyled href={href} {...props} ref={ref}>
            {React.Children.map(props.children, c => {
                return isValidStringOrNumber(c) ? <Text>{c}</Text> : c;
            })}
        </LinkStyled>
    );
});

Link.displayName = 'Link';
Link.Style = LinkStyled;

export default Link;
