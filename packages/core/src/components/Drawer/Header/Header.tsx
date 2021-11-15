import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import { useContext, memo, Children } from 'react';
import Text from '../../Text';
import { DrawerContext } from '../Drawer.context';
import { CloseIconStyled, HeaderStyled } from './Header.styled';
import type { FC } from 'react';

const Component: FC = memo(({ children, ...restProps }) => {
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
export const Header: FC & WithStyle = Object.assign(Component, { Style: HeaderStyled });
