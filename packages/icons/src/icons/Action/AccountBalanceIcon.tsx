import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AccountBalanceIconSvg from '../../assets/Action/account_balance_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AccountBalanceIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AccountBalanceIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AccountBalanceIcon.Style = SvgIcon;
AccountBalanceIcon.displayName = 'AccountBalanceIcon';

export default AccountBalanceIcon
