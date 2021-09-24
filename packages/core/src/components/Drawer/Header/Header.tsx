import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { useContext } from 'react';
import Text from '../../Text';
import { DrawerContext } from '../Drawer.context';
import { CloseIconStyled, HeaderStyled } from './Header.styled';

const Component: React.FC = React.memo(({ children, ...restProps }) => {
    const { id, scrollState, onClose } = useContext(DrawerContext);
    return (
        <HeaderStyled showShadow={!scrollState.scrolledToTop} {...restProps} id={`${id}-header`}>
            {React.Children.map(children, c => {
                return isValidStringOrNumber(c) ? <Text textVariant="h3">{c}</Text> : c;
            })}
            <CloseIconStyled onClick={onClose} size="M" variant="solid" id={`${id}-close-icon`} />
        </HeaderStyled>
    );
});

Component.displayName = 'DrawerHeader';
export const Header: React.FC & WithStyle = Object.assign(Component, { Style: HeaderStyled });
