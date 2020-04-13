import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AccountBalanceIconSvg from '../../assets/Action/account_balance_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AccountBalanceIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AccountBalanceIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AccountBalanceIcon.Style = SvgIcon;
AccountBalanceIcon.displayName = 'AccountBalanceIcon';

export default AccountBalanceIcon
