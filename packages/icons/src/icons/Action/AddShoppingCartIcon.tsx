import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AddShoppingCartIconSvg from '../../assets/Action/add_shopping_cart_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AddShoppingCartIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AddShoppingCartIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AddShoppingCartIcon.Style = SvgIcon;
AddShoppingCartIcon.displayName = 'AddShoppingCartIcon';

export default AddShoppingCartIcon
