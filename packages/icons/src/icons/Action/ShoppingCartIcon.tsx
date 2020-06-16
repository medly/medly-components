import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ShoppingCartIconSvg from '../../assets/Action/shopping_cart_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ShoppingCartIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ShoppingCartIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ShoppingCartIcon.Style = SvgIcon;
ShoppingCartIcon.displayName = 'ShoppingCartIcon';

export default ShoppingCartIcon
