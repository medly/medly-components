import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ShoppingBasketIconSvg from '../../assets/Action/shopping_basket_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ShoppingBasketIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ShoppingBasketIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ShoppingBasketIcon.Style = SvgIcon;
ShoppingBasketIcon.displayName = 'ShoppingBasketIcon';

export default ShoppingBasketIcon
