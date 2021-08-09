import React, { useState } from 'react';
import { Container, Content, HamburgerIcon } from './NavBar.styled';
import MedlyLogo from '@medly-components/core/src/components/MedlyLogo';
import Nav from './Nav';
import { layoutDefaultTheme } from '@medly-components/theme';
import { useMediaQuery } from '@medly-components/utils';
import NavItem from './NavItem';

const NavBar = () => {
    const [isOpen, toggleIsOpen] = useState(false);
    return (
        <Container>
            <Content>
                <HamburgerIcon iconColor={layoutDefaultTheme.navBar.fontColor} onClick={() => toggleIsOpen(true)} />
                <MedlyLogo showName={useMediaQuery(`@media (min-width: 960px)`)} />
                <Nav isOpen={isOpen} onClose={() => toggleIsOpen(false)}>
                    <NavItem isActive>Item 1</NavItem>
                    <NavItem>Item 2</NavItem>
                    <NavItem>Item 3</NavItem>
                </Nav>
                <div>Logout</div>
            </Content>
        </Container>
    );
};

export default NavBar;
