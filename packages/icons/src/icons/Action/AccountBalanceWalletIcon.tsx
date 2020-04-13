import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AccountBalanceWalletIconSvg from '../../assets/Action/account_balance_wallet_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AccountBalanceWalletIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AccountBalanceWalletIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AccountBalanceWalletIcon.Style = SvgIcon;
AccountBalanceWalletIcon.displayName = 'AccountBalanceWalletIcon';

export default AccountBalanceWalletIcon
