import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { useContext, useEffect, useRef } from 'react';
import Text from '../../Text';
import { ModalContext } from '../Modal.context';
import * as Styled from './Header.styled';

const Component: React.FC = React.memo(({ children }) => {
    const { id, setHeaderHeight, isSmallScreen, scrollState } = useContext(ModalContext);
    const headerRef = useRef<HTMLDivElement>();

    useEffect(() => {
        headerRef.current && setHeaderHeight(headerRef.current.offsetHeight);
    }, [headerRef.current, isSmallScreen]);

    return (
        <Styled.Header ref={headerRef} {...{ scrollState, id: `${id}-header` }}>
            {React.Children.map(children, c => {
                return isValidStringOrNumber(c) ? <Text textVariant={isSmallScreen ? 'h3' : 'h2'}>{c}</Text> : c;
            })}
        </Styled.Header>
    );
});
Component.displayName = 'Header';
export const Header: React.FC & WithStyle = Object.assign(Component, { Style: Styled.Header });
