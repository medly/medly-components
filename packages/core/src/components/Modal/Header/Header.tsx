import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import { Children, memo, useContext, useEffect, useRef } from 'react';
import Text from '../../Text';
import { ModalContext } from '../Modal.context';
import * as Styled from './Header.styled';
import type { FC } from 'react';

const Component: FC = memo(({ children }) => {
    const { id, setHeaderHeight, isSmallScreen, scrollState } = useContext(ModalContext);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        headerRef.current && setHeaderHeight(headerRef.current.offsetHeight);
    }, [headerRef.current, isSmallScreen]);

    return (
        <Styled.Header id={`${id}-header`} ref={headerRef} scrollState={scrollState}>
            {Children.map(children, c => {
                return isValidStringOrNumber(c) ? <Text textVariant={isSmallScreen ? 'h3' : 'h2'}>{c}</Text> : c;
            })}
        </Styled.Header>
    );
});
Component.displayName = 'Header';
export const Header: FC & WithStyle = Object.assign(Component, { Style: Styled.Header });
