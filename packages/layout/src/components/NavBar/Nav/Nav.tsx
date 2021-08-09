import React from 'react';
import { BGOverlay, Container, Content, NavCloseIcon as CloseIcon } from './Nav.styled';
import { layoutDefaultTheme } from '@medly-components/theme';

export type NavProps = { isOpen: boolean, onClose: () => void, children: React.ReactNode };
const Nav: React.FC<NavProps> = ({ isOpen, onClose, children }) => {
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
