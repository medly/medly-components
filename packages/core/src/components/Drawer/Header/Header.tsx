import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { useContext } from 'react';
import Text from '../../Text';
import { DrawerContext } from '../Drawer.context';
import { CloseIconStyled, HeaderStyled } from './Header.styled';

export const Header: React.FC & WithStyle = React.memo(({ children }) => {
    const { scrollState, onClose } = useContext(DrawerContext);
    return (
        <HeaderStyled showShadow={!scrollState.scrolledToTop}>
            {React.Children.map(children, c => {
                return isValidStringOrNumber(c) ? <Text textVariant="h3">{c}</Text> : c;
            })}
            <CloseIconStyled onClick={onClose} size="XS" variant="solid" />
        </HeaderStyled>
    );
});

Header.displayName = 'DrawerHeader';
Header.Style = HeaderStyled;
