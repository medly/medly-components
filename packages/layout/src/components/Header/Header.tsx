import React, { useState } from 'react';
import { Container, Content, HamburgerIcon } from './Header.styled';
import { layoutDefaultTheme } from '@medly-components/theme';
import HeaderContext from './Header.context';
import { HeaderProps, HeaderStaticProps } from './types';
import Nav from './Nav';
import NavItem from './NavItem';

const Header: React.FC<HeaderProps> & HeaderStaticProps = ({ children }) => {
    const [isOpen, toggleIsOpen] = useState(false);
    return (
        <Container>
            <Content>
                <HamburgerIcon iconColor={layoutDefaultTheme.navBar.fontColor} onClick={() => toggleIsOpen(true)} />
                <HeaderContext.Provider value={{ isOpen, onClose: () => toggleIsOpen(false) }}>
                    {children}
                </HeaderContext.Provider>
            </Content>
        </Container>
    );
};

Header.Context = HeaderContext;
Header.Nav = Nav;
Header.NavItem = NavItem;

export default Header;
