import { layoutDefaultTheme } from '@medly-components/theme';
import { FCC, ReactNode, useContext } from 'react';
import HeaderContext from '../Header.context';
import { BGOverlay, NavCloseIcon as CloseIcon, Container, Content } from './Nav.styled';

export type NavProps = { children: ReactNode };
const Nav: FCC<NavProps> = ({ children }) => {
    const { isOpen, onClose } = useContext(HeaderContext);
    return (
        <>
            <BGOverlay data-testid="overlay" isOpen={isOpen} onClick={onClose} />
            <Container data-testid="container" isOpen={isOpen}>
                <CloseIcon
                    size="L"
                    data-testid="closeIcon"
                    onClick={onClose}
                    iconColor={layoutDefaultTheme.header.navItem.textColor.default}
                />
                <Content>{children}</Content>
            </Container>
        </>
    );
};

export default Nav;
