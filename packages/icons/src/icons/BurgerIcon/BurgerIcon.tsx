import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import { BurgerIconStyled, SpanStyled } from './BurgerIcon.styled';
import { BurgerIconProps } from './types';

export const BurgerIcon: SFC<BurgerIconProps> & WithStyle = React.memo(props => {
    const { size, color } = props;
    return (
        <BurgerIconStyled id="burgerIcon" {...props}>
            <SpanStyled {...{ size, color }} />
            <SpanStyled {...{ size, color }} />
            <SpanStyled {...{ size, color }} />
        </BurgerIconStyled>
    );
});
BurgerIcon.displayName = 'BurgerIcon';
BurgerIcon.defaultProps = {
    size: 'L',
    open: false
};
BurgerIcon.Style = BurgerIconStyled;
