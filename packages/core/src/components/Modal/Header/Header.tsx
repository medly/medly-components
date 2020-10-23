import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { useContext, useEffect, useRef } from 'react';
import Text from '../../Text';
import { ModalContext } from '../Modal.context';
import * as Styled from './Header.styled';
import { Props } from './types';

export const Header: React.FC<Props> & WithStyle = React.memo(({ children }) => {
    const { id, setHeaderHeight, isSmallScreen, scrollState } = useContext(ModalContext);
    const headerRef = useRef<HTMLDivElement>();

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }, [headerRef.current, isSmallScreen]);

    return (
        <Styled.Header ref={headerRef} {...{ scrollState, id: `${id}-header` }}>
            {React.Children.map(children, c => {
                return isValidStringOrNumber(c) ? <Text textVariant={isSmallScreen ? 'h3' : 'h2'}>{c}</Text> : c;
            })}
        </Styled.Header>
    );
});
Header.displayName = 'Header';
Header.Style = Styled.Header;
