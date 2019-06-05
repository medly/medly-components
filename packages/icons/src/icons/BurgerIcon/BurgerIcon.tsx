import { WithStyle } from '@medly-components/utils';
import React, { useState } from 'react';
import { BurgerIconStyled, SpanStyled } from './BurgerIcon.styled';
import { BurgerIconProps } from './types';

export const BurgerIcon: React.SFC<BurgerIconProps> & WithStyle = React.memo(props => {
    const [open, setOpenState] = useState(false);
    const { size, color } = props;

    const onclickHandler = () => {
        props.onClick && props.onClick(!open);
        setOpenState(!open);
    };

    return (
        <BurgerIconStyled id="burgerIcon" {...{ size, color, open, onClick: onclickHandler }}>
            <SpanStyled {...{ size, color }} />
            <SpanStyled {...{ size, color }} />
            <SpanStyled {...{ size, color }} />
        </BurgerIconStyled>
    );
});
BurgerIcon.displayName = 'BurgerIcon';
BurgerIcon.defaultProps = {
    size: 'L'
};
BurgerIcon.Style = BurgerIconStyled;

export default BurgerIcon;
