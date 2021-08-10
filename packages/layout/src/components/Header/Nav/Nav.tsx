import { layoutDefaultTheme } from '@medly-components/theme';
import React, { useContext } from 'react';
import HeaderContext from '../Header.context';
import { BGOverlay, Container, Content, NavCloseIcon as CloseIcon } from './Nav.styled';

export type NavProps = { children: React.ReactNode };
const Nav: React.FC<NavProps> = ({ children }) => {
    const { isOpen, onClose } = useContext(HeaderContext);
    return (
        <>
            <BGOverlay isOpen={isOpen} onClick={onClose} />
            <Container isOpen={isOpen}>
                <CloseIcon onClick={onClose} iconColor={layoutDefaultTheme.header.fontColor} />
                <Content>{children}</Content>
            </Container>
        </>
    );
};

export default Nav;
