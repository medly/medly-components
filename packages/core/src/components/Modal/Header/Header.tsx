import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { Children, memo, useContext, useLayoutEffect, useRef } from 'react';
import Text from '../../Text';
import { ModalContext } from '../Modal.context';
import * as Styled from './Header.styled';

const Component: FCC = memo(({ children }) => {
    const { id, headerHeight, setHeaderHeight, isSmallScreen, scrollState } = useContext(ModalContext);
    const headerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        headerRef.current && headerHeight !== headerRef.current.offsetHeight && setHeaderHeight(headerRef.current.offsetHeight);
    }, [headerRef.current, headerRef.current?.offsetHeight, isSmallScreen, scrollState.scrollPosition]);

    return (
        <Styled.Header id={`${id}-header`} ref={headerRef} scrollState={scrollState}>
            {Children.map(children, c => {
                return isValidStringOrNumber(c) ? <Text textVariant={isSmallScreen ? 'h3' : 'h2'}>{c}</Text> : c;
            })}
        </Styled.Header>
    );
});
Component.displayName = 'Header';
export const Header: FCC & WithStyle = Object.assign(Component, { Style: Styled.Header });
