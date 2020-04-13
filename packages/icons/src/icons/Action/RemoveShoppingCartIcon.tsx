import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RemoveShoppingCartIconSvg from '../../assets/Action/remove_shopping_cart_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RemoveShoppingCartIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <RemoveShoppingCartIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

RemoveShoppingCartIcon.Style = SvgIcon;
RemoveShoppingCartIcon.displayName = 'RemoveShoppingCartIcon';

export default RemoveShoppingCartIcon
