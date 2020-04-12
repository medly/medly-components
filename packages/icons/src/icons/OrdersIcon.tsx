import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import OrdersIconSvg from '../assets/Orders.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const OrdersIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <OrdersIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

OrdersIcon.Style = SvgIcon;
OrdersIcon.displayName = 'OrdersIcon';

export default OrdersIcon
