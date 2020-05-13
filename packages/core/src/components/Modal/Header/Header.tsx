import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React from 'react';
import Text from '../../Text';
import * as Styled from './Header.styled';
import { Props } from './types';

export const Header: React.SFC<Props> & WithStyle = React.memo(props => (
    <Styled.Header {...{ ...props, id: `${props.id}-header` }}>
        {React.Children.map(props.children, c => {
            return isValidStringOrNumber(c) ? <Text textVariant="h2">{c}</Text> : c;
        })}
    </Styled.Header>
));
Header.displayName = 'Header';
Header.Style = Styled.Header;
