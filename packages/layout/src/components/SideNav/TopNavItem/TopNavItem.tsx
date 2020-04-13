import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BurgerIcon from '../BurgerIcon';
import NavIcon from '../NavIcon';
import * as Styled from './TopNavItem.styled';
import { Props } from './types';

export const TopNavItem: SFC<Props> & WithStyle = React.memo(props => {
    const { open, burgerIconClickHandler } = props,
        Logo = props.logo;

    return (
        <Styled.TopNavItem as="div">
            <NavIcon>
                <BurgerIcon size="S" open={open} onClick={burgerIconClickHandler} />
            </NavIcon>
            <Styled.Logo>{Logo && <Logo />}</Styled.Logo>
        </Styled.TopNavItem>
    );
});

TopNavItem.displayName = 'TopNavItem';
TopNavItem.Style = Styled.TopNavItem;
