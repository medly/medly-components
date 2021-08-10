import { layoutDefaultTheme } from '@medly-components/theme';
import React, { useState } from 'react';
import HeaderContext from './Header.context';
import { Container, Content, HamburgerIcon } from './Header.styled';
import Nav from './Nav';
import NavItem from './NavItem';
import { HeaderProps, HeaderStaticProps } from './types';

const Header: React.FC<HeaderProps> & HeaderStaticProps = ({ children, withNav }) => {
    const [isOpen, toggleIsOpen] = useState(false);
    return (
        <Container>
            <Content>
                {withNav && <HamburgerIcon iconColor={layoutDefaultTheme.header.fontColor} onClick={() => toggleIsOpen(true)} />}
                <HeaderContext.Provider value={{ isOpen, onClose: () => toggleIsOpen(false) }}>{children}</HeaderContext.Provider>
            </Content>
        </Container>
    );
};

Header.Context = HeaderContext;
Header.Nav = Nav;
Header.NavItem = NavItem;

Header.defaultProps = {
    withNav: true
};

export default Header;
