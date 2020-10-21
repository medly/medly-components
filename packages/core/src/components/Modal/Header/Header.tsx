import { isValidStringOrNumber, useWindowSize, WithStyle } from '@medly-components/utils';
import React, { useEffect, useRef } from 'react';
import Text from '../../Text';
import * as Styled from './Header.styled';
import { Props } from './types';

export const Header: React.FC<Props> & WithStyle = React.memo(({ id, setHeaderHeight, children, ...restProps }) => {
    const headerRef = useRef();
    const { width: windowWidth } = useWindowSize();

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }, headerRef.current);

    return (
        <Styled.Header ref={headerRef} {...{ ...restProps, id: `${id}-header` }}>
            {React.Children.map(children, c => {
                return isValidStringOrNumber(c) ? <Text textVariant={windowWidth < 768 ? 'h3' : 'h2'}>{c}</Text> : c;
            })}
        </Styled.Header>
    );
});
Header.displayName = 'Header';
Header.Style = Styled.Header;
