import { layoutDefaultTheme } from '@medly-components/theme';
import { WithStyle } from 'packages/utils/src/types';
import React, { useState } from 'react';
import HeaderContext from './Header.context';
import { Container, Content, HamburgerIcon } from './Header.styled';
import Nav from './Nav';
import NavItem from './NavItem';
import { HeaderProps, HeaderStaticProps } from './types';

const Header: React.FC<HeaderProps> & HeaderStaticProps & WithStyle = ({ children, withNav, ...resProps }) => {
    const [isOpen, toggleIsOpen] = useState(false);
    return (
        <Container {...resProps}>
            <Content>
                {withNav && (
                    <HamburgerIcon
                        data-testid="hamburger-icon"
                        iconColor={layoutDefaultTheme.header.fontColor}
                        onClick={() => toggleIsOpen(true)}
                        size="L"
                    />
                )}
                <HeaderContext.Provider value={{ isOpen, onClose: () => toggleIsOpen(false) }}>{children}</HeaderContext.Provider>
            </Content>
        </Container>
    );
};

Header.Context = HeaderContext;
Header.Nav = Nav;
Header.NavItem = NavItem;
Header.Style = Container;

Header.defaultProps = {
    withNav: true
};

export default Header;
