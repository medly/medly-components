import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { useEffect, useRef } from 'react';
import Text from '../../Text';
import { HeaderProps } from '../types';
import * as Styled from './Header.styled';

export const Header: React.FC<HeaderProps> & WithStyle = React.memo(({ id, setHeaderHeight, children, isSmallScreen, ...restProps }) => {
    const headerRef = useRef<HTMLDivElement>();

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }, [headerRef.current]);

    return (
        <Styled.Header ref={headerRef} {...{ ...restProps, id: `${id}-header` }}>
            {React.Children.map(children, c => {
                return isValidStringOrNumber(c) ? <Text textVariant={isSmallScreen ? 'h3' : 'h2'}>{c}</Text> : c;
            })}
        </Styled.Header>
    );
});
Header.displayName = 'Header';
Header.Style = Styled.Header;
