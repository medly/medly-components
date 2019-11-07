// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import OrdersSvg from '../assets/Orders.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const OrdersIcon: SFC<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <OrdersSvg {...props} width="1em" height="1em" />
    </SvgIcon>
);

OrdersIcon.Style = SvgIcon;
OrdersIcon.displayName = 'OrdersIcon';
