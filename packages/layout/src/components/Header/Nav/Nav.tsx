import React, { useContext } from 'react';
import { BGOverlay, Container, Content, NavCloseIcon as CloseIcon } from './Nav.styled';
import { layoutDefaultTheme } from '@medly-components/theme';
import HeaderContext from '../Header.context';

export type NavProps = { children: React.ReactNode };
const Nav: React.FC<NavProps> = ({ children }) => {
    const { isOpen, onClose } = useContext(HeaderContext)
    return (
        <>
            <BGOverlay isOpen={isOpen} onClick={onClose} />
            <Container isOpen={isOpen}>
                <CloseIcon onClick={onClose} iconColor={layoutDefaultTheme.navBar.fontColor} />
                <Content>
                    {children}
                </Content>
            </Container>
        </>
    );
};

export default Nav;
