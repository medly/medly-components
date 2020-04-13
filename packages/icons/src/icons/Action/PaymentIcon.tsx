import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PaymentIconSvg from '../../assets/Action/payment_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PaymentIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PaymentIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PaymentIcon.Style = SvgIcon;
PaymentIcon.displayName = 'PaymentIcon';

export default PaymentIcon
