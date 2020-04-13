import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AccountBalanceWalletIconSvg from '../../assets/Action/account_balance_wallet_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AccountBalanceWalletIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AccountBalanceWalletIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AccountBalanceWalletIcon.Style = SvgIcon;
AccountBalanceWalletIcon.displayName = 'AccountBalanceWalletIcon';

export default AccountBalanceWalletIcon
