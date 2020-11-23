import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { useContext, useEffect, useRef } from 'react';
import Text from '../../Text';
import { DialogBoxContext } from '../DialogBox.context';
import * as Styled from './Header.styled';

export const Header: React.FC & WithStyle = React.memo(({ children }) => {
    const { id, setHeaderHeight, isSmallScreen, scrollState } = useContext(DialogBoxContext);
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
Header.displayName = 'Header';
Header.Style = Styled.Header;
