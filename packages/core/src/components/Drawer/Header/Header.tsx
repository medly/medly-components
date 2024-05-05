import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { Children, memo, useContext } from 'react';
import Text from '../../Text';
import { DrawerContext } from '../Drawer.context';
import { CloseIconStyled, HeaderStyled } from './Header.styled';

const Component: FCC = memo(({ children, ...restProps }) => {
    const { id, scrollState, onClose } = useContext(DrawerContext);
    return (
        <HeaderStyled showShadow={!scrollState.scrolledToTop} {...restProps} id={`${id}-header`}>
            {Children.map(children, c => {
                return isValidStringOrNumber(c) ? <Text textVariant="h3">{c}</Text> : c;
            })}
            <CloseIconStyled onClick={onClose} size="M" variant="solid" id={`${id}-close-icon`} title={`${id}-close-icon`} />
        </HeaderStyled>
    );
});

Component.displayName = 'DrawerHeader';
export const Header: FCC & WithStyle = Object.assign(Component, { Style: HeaderStyled });
