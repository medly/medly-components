import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ShoppingCartIconSvg from '../../assets/Action/shopping_cart_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ShoppingCartIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ShoppingCartIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ShoppingCartIcon.Style = SvgIcon;
ShoppingCartIcon.displayName = 'ShoppingCartIcon';

export default ShoppingCartIcon
