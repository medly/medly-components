import { layoutDefaultTheme } from '@medly-components/theme';
import React, { useContext } from 'react';
import Header from '../Header';
import { BGOverlay, Container, Content, NavCloseIcon as CloseIcon } from './Nav.styled';

export type NavProps = { children: React.ReactNode };
const Nav: React.FC<NavProps> = ({ children }) => {
    const { isOpen, onClose } = useContext(Header.Context);
    return (
        <>
            <BGOverlay data-testid="overlay" isOpen={isOpen} onClick={onClose} />
            <Container data-testid="container" isOpen={isOpen}>
                <CloseIcon size="L" data-testid="closeIcon" onClick={onClose} iconColor={layoutDefaultTheme.header.fontColor} />
                <Content>{children}</Content>
            </Container>
        </>
    );
};

export default Nav;
