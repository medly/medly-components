import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ShoppingBasketIconSvg from '../../assets/Action/shopping_basket_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ShoppingBasketIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ShoppingBasketIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ShoppingBasketIcon.Style = SvgIcon;
ShoppingBasketIcon.displayName = 'ShoppingBasketIcon';

export default ShoppingBasketIcon
